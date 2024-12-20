import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		category: z.string(),
		tech: z.array(z.string()),
		heroImage: z.string().optional(),
		published: z.boolean(),
		links: z.array(z.object({
			title: z.string(),
			url: z.string()
		})).optional().default([])
	})
});

export const collections = { portfolio };