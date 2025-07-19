import Link from "next/link";
import { ArrowRightLeft } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
           <Link href="/" className="flex items-center gap-2">
            <ArrowRightLeft className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">
              SkillSwap Hub
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SkillSwap Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
