import { defineCollection, z } from 'astro:content';

const main = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		category: z.literal('main'),
		tech: z.array(z.string()).optional(),
		published: z.boolean()
	})
});

const postings = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		category: z.literal('postings'),
		tech: z.array(z.string()).optional(),
		published: z.boolean()
	})
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		category: z.literal('blog'),
		tech: z.array(z.string()).optional(),
		published: z.boolean()
	})
});

export const collections = { main, postings, blog };
