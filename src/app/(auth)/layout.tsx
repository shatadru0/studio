
import React from "react";
import Link from "next/link";
import { ArrowRightLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-muted p-4">
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2">
          <ArrowRightLeft className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-3xl font-bold">
            SkillSwap Hub
          </h1>
        </Link>
      </div>
      {children}
    </main>
  );
}
