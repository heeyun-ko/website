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
		updatedDate: z.date().optional(),
		heroImage: z.string().optional(),
		category: z.literal('postings'),
		tags: z.array(z.string()).optional(),
		published: z.boolean()
	})
});

const cvDownload = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		category: z.literal('CV download'),
		fileUrl: z.string(),
		published: z.boolean()
	})
});

export const collections = {
	main,
	postings,
	cvDownload
};
