
"use client";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
        <div className="space-y-4">
          <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Welcome back, {user?.displayName || "User"}!
          </h1>
          <p className="text-lg text-muted-foreground">
            Ready to swap some skills? Here&apos;s your hub for learning and sharing.
          </p>
        </div>
        <div className="hidden md:flex justify-center">
            <Image
                src="https://placehold.co/400x300.png"
                alt="Illustration of people connecting and sharing ideas"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
                data-ai-hint="teamwork connection"
              />
        </div>
      </div>


      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>
              Keep your skills and profile information up to date.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">
              Edit Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Find a Skill Match</CardTitle>
            <CardDescription>
              Use our AI-powered tool to find your next collaboration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/skill-match">
                Go to Skill Match
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Browse Marketplace</CardTitle>
            <CardDescription>
              See what skills others are offering in the community.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
