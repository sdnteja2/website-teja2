import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    artikel: defineCollection({
      source: 'artikel/*.md',
      type: 'page',
      // // Define custom schema for docs collection
      // schema: z.object({
      //   tags: z.array(z.string()),
      //   image: z.string(),
      //   date: z.date()
      // })
    }),
  },
})
