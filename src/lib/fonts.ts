import { DM_Serif_Display, Inter } from "next/font/google";

/**
 * Editorial serif paired with a clean sans serif.
 * The CSS variables are consumed by the `--font-serif` / `--font-sans`
 * tokens in `globals.css`, so swapping the typefaces here re-skins the
 * whole site.
 */

export const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  weight: "400",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fontVariables = `${dmSerif.variable} ${inter.variable}`;