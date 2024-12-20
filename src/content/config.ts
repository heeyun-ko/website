import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		category: z.string(),
		tech: z.array(z.string()),
		published: z.boolean()
	})
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		heroImage: z.string().optional(),
		category: z.string(),
		tags: z.array(z.string()).optional(),
		published: z.boolean()
	})
});

export const collections = {
	portfolio,
	blog
};