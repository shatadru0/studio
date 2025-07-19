import { PublicHeader } from "@/components/public-header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, Repeat, ShieldCheck, Sparkles, UserPlus, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24 lg:py-32">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Swap Skills, Not Cash.
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              Join a community where your time and talent are the currency. Learn new skills, share your expertise, and grow together.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/register">
                  Get Started for Free <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/login">Explore the Hub</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600/400.png"
              alt="People collaborating on a project"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
              data-ai-hint="collaboration community"
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-muted py-16 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple & Fair Exchange
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Trading skills on our platform is as easy as 1-2-3.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <UserPlus className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">1. Create Your Profile</h3>
                <p className="text-muted-foreground">
                  List the skills you can offer and the skills you want to learn. Let the community know what you bring to the table.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Repeat className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">2. Earn Credits</h3>
                <p className="text-muted-foreground">
                  Share your expertise with others. Every hour you give earns you one time-credit to spend.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">3. Spend Credits</h3>
                <p className="text-muted-foreground">
                  Use your credits to book sessions with other experts and learn something new. It's that simple.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why You'll Love SkillSwap Hub
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We've built a platform with everything you need to succeed.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Clock />
                </div>
                <CardTitle className="mt-4">Credit-Based Economy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our platform runs on time, not money. 1 hour of your work earns 1 credit to spend on another's skill.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Sparkles />
                </div>
                <CardTitle className="mt-4">AI-Powered Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our AI suggests the perfect skill swaps for you, making collaboration effortless.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Users />
                </div>
                <CardTitle className="mt-4">Diverse Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Connect with professionals and hobbyists from various fields. Your next mentor is here.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <ShieldCheck />
                </div>
                <CardTitle className="mt-4">Secure & Trusted</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Verified profiles and a transparent booking system ensure a safe and reliable experience.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted">
          <div className="container flex flex-col items-center justify-center space-y-6 py-16 text-center md:py-24 lg:py-32">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Unlock Your Potential?
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              Join thousands of others who are leveling up their skills and sharing their passion.
            </p>
            <Button asChild size="lg">
              <Link href="/register">Sign Up for Free Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
