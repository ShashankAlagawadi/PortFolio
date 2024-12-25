"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/achievements", label: "Achievements" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-violet-500/10 nav-gradient">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex w-full justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold gradient-text">Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative py-1.5 transition-colors",
                  pathname === href
                    ? "text-secondary font-semibold"
                    : "text-foreground/60 hover:text-violet-400",
                  pathname === href &&
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-violet-500 after:to-secondary after:content-['']"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}