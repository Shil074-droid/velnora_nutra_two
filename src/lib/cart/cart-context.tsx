"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from "react";

import { getProductById } from "@/lib/data/products";
import type { CartItem, CartLine, CartSummary } from "@/lib/types";
import { clamp } from "@/lib/utils";

const STORAGE_KEY = "velnora:cart";
const MAX_PER_LINE = 99;

type CartAction =
  | { type: "add"; productId: string; quantity: number }
  | { type: "remove"; productId: string }
  | { type: "setQuantity"; productId: string; quantity: number }
  | { type: "clear" }
  | { type: "hydrate"; items: CartItem[] };

function reducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "add": {
      const quantity = clamp(action.quantity, 1, MAX_PER_LINE);
      const existing = state.find((i) => i.productId === action.productId);
      if (!existing) {
        return [...state, { productId: action.productId, quantity }];
      }
      return state.map((i) =>
        i.productId === action.productId
          ? { ...i, quantity: clamp(i.quantity + quantity, 1, MAX_PER_LINE) }
          : i,
      );
    }
    case "remove":
      return state.filter((i) => i.productId !== action.productId);
    case "setQuantity": {
      const quantity = clamp(action.quantity, 0, MAX_PER_LINE);
      if (quantity === 0) {
        return state.filter((i) => i.productId !== action.productId);
      }
      return state.map((i) =>
        i.productId === action.productId ? { ...i, quantity } : i,
      );
    }
    case "clear":
      return [];
    case "hydrate":
      return action.items;
    default:
      return state;
  }
}

interface CartContextValue extends CartSummary {
  isEmpty: boolean;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  quantityOf: (productId: string) => number;
}

const CartContext = createContext<CartContextValue | null>(null);

/**
 * Client-side cart store. Persists to `localStorage` and hydrates after
 * mount so the server and initial client render always agree.
 */
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);
  const readyRef = useRef(false);

  // Read the persisted cart once on mount (never during SSR).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const valid = (parsed as CartItem[]).filter(
            (item) =>
              typeof item?.productId === "string" &&
              typeof item?.quantity === "number" &&
              getProductById(item.productId),
          );
          if (valid.length > 0) {
            dispatch({ type: "hydrate", items: valid });
          }
        }
      }
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  // Persist the cart whenever it changes. On the very first (mount) pass
  // `readyRef` is still false, so we skip writing and only mark ready — this
  // ensures the stored cart is never overwritten with the initial empty
  // state before the hydration effect above has applied.
  useEffect(() => {
    if (readyRef.current) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {
        /* storage may be unavailable */
      }
    }
    readyRef.current = true;
  }, [items]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    dispatch({ type: "add", productId, quantity });
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "remove", productId });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "setQuantity", productId, quantity });
  }, []);

  const clearCart = useCallback(() => dispatch({ type: "clear" }), []);

  const quantityOf = useCallback(
    (productId: string) =>
      items.find((item) => item.productId === productId)?.quantity ?? 0,
    [items],
  );

  const value = useMemo<CartContextValue>(() => {
    const lines: CartLine[] = items.flatMap((item) => {
      const product = getProductById(item.productId);
      if (!product) return [];
      return [
        {
          product,
          quantity: item.quantity,
          lineTotal: product.price * item.quantity,
        },
      ];
    });

    const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);

    return {
      lines,
      itemCount,
      subtotal,
      isEmpty: lines.length === 0,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      quantityOf,
    };
  }, [items, addItem, removeItem, setQuantity, clearCart, quantityOf]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/** Access the cart. Must be used within a `CartProvider`. */
export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a <CartProvider>");
  }
  return context;
}
