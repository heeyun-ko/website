import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string(),
		category: z.string(),
		tech: z.array(z.string()),
		heroImage: z.string(),
		published: z.boolean(),
		links: z.array(z.object({
			title: z.string(),
			url: z.string()
		}))
	}),
});

export const collections = {
	'portfolio': portfolio,
	// ... 다른 컬렉션들
}; 