import { defineCollection, z } from 'astro:content';

// 1. THE UNIVERSAL VERSE SCHEMA
// This governs every single scripture file (Gita, Upanishads, etc.)
const verseSchema = defineCollection({
  type: 'content', 
  schema: z.object({
    // Canonical Identity
    book: z.string(),       // e.g., "Bhagavad Gītā"
    chapter: z.number(),    // e.g., 2
    verse: z.number(),      // e.g., 47
    title: z.string().optional(),

    // Visual Data (Gita As It Is Style)
    // Structured synonyms for Red/Black rendering
    synonyms: z.array(
      z.object({
        word: z.string(),    // Sanskrit Word
        meaning: z.string()  // English Meaning
      })
    ).optional(),

    // Deep Study Layer (Commentaries)
    commentaries: z.array(
      z.object({
        author: z.string(), // e.g., "Śrīdhara Svāmī"
        sanskrit: z.string().optional(),
        translation: z.string().optional(),
        
        // AI Safety Policy
        source_status: z.enum(['canonical', 'verified', 'ai-draft', 'pending']).default('canonical')
      })
    ).optional(),

    // Bridge Page Link
    related_journal_slug: z.string().optional(),
  })
});

// 2. THE DEPARTMENT SCHEMA
// This governs the "Syllabus" lists
const departmentSchema = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    steps: z.array(
      z.object({
        label: z.string(),
        type: z.enum(['verse', 'pdf_ref']), // Strict choice
        verse_slug: z.string().optional(),
        pdf_url: z.string().optional(),
        is_reference_only: z.boolean().default(false)
      })
    )
  })
});

// 3. EXPORT COLLECTIONS
export const collections = {
  'gita': verseSchema,
  'departments': departmentSchema,
};