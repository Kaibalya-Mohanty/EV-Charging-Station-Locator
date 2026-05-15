"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-foreground" />
            <span className="text-sm font-medium tracking-wide uppercase">
              EV Grid
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            {["Features", "Network", "Pricing", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground">
            2026 EV Charge Grid. Built for electric mobility.
          </div>
        </div>
      </div>
    </footer>
  );
}
