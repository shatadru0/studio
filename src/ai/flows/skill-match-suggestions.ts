'use server';

/**
 * @fileOverview An AI agent for suggesting skill matches between users.
 *
 * - getSkillMatchSuggestions - A function that returns skill match suggestions for a user.
 * - SkillMatchSuggestionsInput - The input type for the getSkillMatchSuggestions function.
 * - SkillMatchSuggestionsOutput - The return type for the getSkillMatchSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillMatchSuggestionsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('The profile information of the user requesting skill match suggestions.'),
  userSkills: z
    .string()
    .describe('A list of skills the user possesses.'),
  otherUserProfiles: z
    .string()
    .describe('A list of profiles of other users in the system.'),
  otherUserSkills: z
    .string()
    .describe('A list of skills of other users in the system.'),
});
export type SkillMatchSuggestionsInput = z.infer<
  typeof SkillMatchSuggestionsInputSchema
>;

const SkillMatchSuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of suggested skill matches between the user and other users, with explanations for each suggestion.'
    ),
});
export type SkillMatchSuggestionsOutput = z.infer<
  typeof SkillMatchSuggestionsOutputSchema
>;

export async function getSkillMatchSuggestions(
  input: SkillMatchSuggestionsInput
): Promise<SkillMatchSuggestionsOutput> {
  return skillMatchSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'skillMatchSuggestionsPrompt',
  input: {schema: SkillMatchSuggestionsInputSchema},
  output: {schema: SkillMatchSuggestionsOutputSchema},
  prompt: `You are an AI assistant designed to provide skill match suggestions between users on a skill-sharing platform.

  Given the following information about a user and other users on the platform, suggest potential skill matches that would benefit both parties. Explain why each match is suggested.

  User Profile: {{{userProfile}}}
  User Skills: {{{userSkills}}}
  Other User Profiles: {{{otherUserProfiles}}}
  Other User Skills: {{{otherUserSkills}}}

  Provide a list of suggested skill matches with explanations for each suggestion.
  `,
});

const skillMatchSuggestionsFlow = ai.defineFlow(
  {
    name: 'skillMatchSuggestionsFlow',
    inputSchema: SkillMatchSuggestionsInputSchema,
    outputSchema: SkillMatchSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
