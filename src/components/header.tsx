
"use client";

import Link from "next/link";
import { UserNav } from "./user-nav";
import { ArrowRightLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/skill-match", label: "Skill Match" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/dashboard" className="mr-8 flex items-center gap-2">
          <ArrowRightLeft className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-semibold">
            SkillSwap Hub
          </span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
