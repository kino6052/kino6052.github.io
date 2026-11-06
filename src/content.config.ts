import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    group: z.enum(["metaphysics", "web", "ml", "other"]),
    original: z.string().url(),
    archived: z.boolean().optional(),
  }),
});

export const collections = { blog };
