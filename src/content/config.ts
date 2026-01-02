import { defineCollection, z } from 'astro:content';

const verseSchema = defineCollection({
  type: 'content',
  schema: z.object({
    book: z.string(),
    chapter: z.number(),
    verse: z.number(),
    title: z.string(),
    commentary_author: z.string().optional(),
    themes: z.array(z.string()).optional(),
    life_paths: z.array(z.string()).optional(),
    vibhagas: z.array(z.string()).optional(),
  }),
});

const departmentSchema = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    vibhaga_id: z.string(),
    description: z.string(),
    target_paths: z.array(z.string()),
    associated_pdfs: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'sruti': verseSchema,
  'smrti': verseSchema,
  'purana': verseSchema,
  'itihasa': verseSchema,
  'upaveda': verseSchema,
  'agama': verseSchema,
  'darshana': verseSchema,
  'gaudiya-vaisnava': verseSchema,
  'gita': verseSchema,
  'upanga': verseSchema, 
  'vedanga': verseSchema,
  'departments': departmentSchema, 
};