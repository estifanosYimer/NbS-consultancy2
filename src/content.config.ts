import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const Benefit = z.enum(['floods', 'drought', 'groundwater', 'quality', 'erosion', 'heat', 'biodiversity', 'carbon']);
const Tool = z.enum(['suitability', 'catchment', 'groundwater', 'coupled', 'monitor', 'studio', 'quality', 'game']);
const Landscape = z.enum(['city', 'farmland', 'valley', 'hills', 'wet']);

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/solutions' }),
  schema: z.object({
    title: z.string(),
    family: z.string(),
    summary: z.string(),
    benefits: z.array(Benefit),
    tools: z.array(Tool),
    landscapes: z.array(Landscape),
    order: z.number().default(0),
    supporting: z.boolean().default(false),
  }),
});

export const collections = { solutions };
