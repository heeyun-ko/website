import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string().optional(),
		tags: z.array(z.string()).default(['others']),
		published: z.boolean().default(false),
	})
});

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
		})).default([])
	})
});

export const collections = {
	'blog': blog,
	'portfolio': portfolio,
};