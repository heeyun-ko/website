import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		category: z.enum(['Project', 'Research', 'Publication']).default('Project'),
		tech: z.array(z.string()).default([]),
		heroImage: z.string().optional(),
		links: z.array(z.object({
			title: z.string(),
			url: z.string()
		})).optional(),
	}),
});

export const collections = { portfolio }; 