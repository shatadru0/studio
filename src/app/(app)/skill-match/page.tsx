
"use client";

import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { getSkillMatchSuggestions } from "@/ai/flows/skill-match-suggestions";
import { useAuth } from "@/hooks/use-auth";

const formSchema = z.object({
  userProfile: z.string().min(10, {
    message: "Your profile must be at least 10 characters.",
  }),
  userSkills: z.string().min(2, {
    message: "Please list at least one skill.",
  }),
  otherUserProfiles: z.string().min(10, {
    message: "Other user profiles must be at least 10 characters.",
  }),
  otherUserSkills: z.string().min(2, {
    message: "Please list at least one skill for other users.",
  }),
});

type FormData = z.infer<typeof formSchema>;

type SuggestionResult = {
  suggestions: string;
} | null;

export default function SkillMatchPage() {
  const { toast } = useToast();
  const [suggestions, setSuggestions] = useState<SuggestionResult>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userProfile: `User: ${user?.displayName || 'Me'}. I am a senior frontend developer with 10 years of experience, specializing in React and Next.js. I enjoy mentoring junior developers.`,
      userSkills: "React, Next.js, TypeScript, TailwindCSS, Mentoring",
      otherUserProfiles: `User: Alex. A UX/UI designer with a passion for creating intuitive user interfaces.
User: Sam. A backend developer proficient in Node.js and database management.`,
      otherUserSkills: "UX/UI Design, Figma, Node.js, PostgreSQL, API Design",
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await getSkillMatchSuggestions(values);
      setSuggestions(result);
      toast({
        title: "Suggestions Generated!",
        description: "Your personalized skill matches are ready below.",
      });
    } catch (error) {
      console.error("Failed to get skill match suggestions:", error);
      toast({
        variant: "destructive",
        title: "An Error Occurred",
        description: "Could not generate suggestions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-3xl md:text-4xl font-bold tracking-tight">
            AI Skill Match
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Describe your skills and what you're looking for to get AI-powered collaboration suggestions.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Find Your Match</CardTitle>
            <CardDescription>Fill in the details below to generate suggestions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="userProfile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Profile</FormLabel>
                      <FormControl>
                        <Textarea rows={3} placeholder="Tell us about yourself..." {...field} />
                      </FormControl>
                      <FormDescription>
                        A brief description of your professional background.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userSkills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Skills</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Python, Graphic Design, Marketing" {...field} />
                      </FormControl>
                      <FormDescription>
                        List your skills, separated by commas.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="otherUserProfiles"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other User Profiles</FormLabel>
                      <FormControl>
                        <Textarea rows={4} placeholder="Profiles of other users in the platform..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Paste profiles of other users you are interested in collaborating with.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="otherUserSkills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other User Skills</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Skills of the users mentioned above..." {...field} />
                      </FormControl>
                      <FormDescription>
                        List the skills for the other users, separated by commas.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get Suggestions
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {suggestions && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Generated Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert whitespace-pre-wrap">
              {suggestions.suggestions}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
