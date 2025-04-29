import { defineCollection, z } from "astro:content"

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    draft: z.boolean().optional(),
    lang: z.string().optional(),
  }),
})

export const collections = {
  posts,
}
