"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnnouncementBarProps {
  message?: string;
  linkHref?: string;
  linkLabel?: string;
}

/**
 * Compact announcement bar at the top of the page.
 * Can be dismissed by the user (stored in sessionStorage).
 */
export function AnnouncementBar({
  message = "Complimentary shipping on orders over $75",
  linkHref = "/shipping",
  linkLabel = "Details",
}: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "border-b border-line bg-mist transition-all duration-300 ease-soft",
        dismissed && "opacity-0 pointer-events-none h-0 overflow-hidden"
      )}
      role="status"
      aria-live="polite"
    >
      <div className="container-content px-gutter">
        <div className="flex items-center justify-between gap-4 py-2.5">
          <p className="text-caption text-charcoal/70">{message}</p>
          {linkHref && linkLabel && (
            <Link
              href={linkHref}
              className="shrink-0 text-caption font-medium text-forest underline underline-offset-2 hover:text-forest-deep transition-colors"
            >
              {linkLabel}
            </Link>
          )}
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss announcement"
            className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full text-charcoal/40 transition-colors hover:bg-forest/5 hover:text-forest"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}