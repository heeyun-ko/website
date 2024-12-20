import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		// Add other fields that your portfolio items use
	}),
});

export const collections = {
	'portfolio': portfolio
}; 