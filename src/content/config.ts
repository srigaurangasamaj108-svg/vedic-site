import { defineCollection, z } from 'astro:content';

// This defines the structure of your Gita verses [cite: 7]
const gita = defineCollection({
  type: 'content',
  schema: z.object({
    book: z.string(),
    chapter: z.number(),
    verse: z.number(),
    title: z.string(),
    commentary_author: z.string().optional(),
  }),
});

// This exports the collection for use in your pages [cite: 7, 9]
export const collections = { gita };