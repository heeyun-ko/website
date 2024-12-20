import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string(),
		// ... 기타 필요한 필드들
	}),
});

export const collections = {
	'portfolio': portfolio,
	// ... 다른 컬렉션들
}; 