import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import site from './data/site.json';

// Form-based editors save blank fields as "", so treat blanks as missing.
const textOr = (fallback: string) =>
  z
    .string()
    .optional()
    .transform((value) => value?.trim() || fallback);
const optionalUrl = z.union([z.url(), z.literal('')]).optional();

const meetings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/meetings' }),
  schema: z.object({
    title: z.string(),
    // Write as YYYY-MM-DD. Treated as a calendar day, not a timestamp.
    date: z.coerce.date(),
    time: textOr(site.defaultTime),
    location: textOr(site.defaultLocation),
    summary: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().default(''),
    youtube: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const maps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/maps' }),
  schema: z.object({
    title: z.string(),
    // Any day in the featured month, e.g. 2026-08-01.
    month: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().default(''),
    link: optionalUrl,
    credit: z.string().optional(),
    creditUrl: optionalUrl,
    draft: z.boolean().default(false),
  }),
});

export const collections = { meetings, maps };
