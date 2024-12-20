import { defineCollection, z } from 'astro:content';

// 블로그 컬렉션 정의
const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string(),
		// ... 기타 필드들
	})
});

// 포트폴리오 컬렉션 정의
const portfolio = defineCollection({
	type: 'content',  // 명시적으로 type 지정
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
	})
});

// 컬렉션 내보내기
export const collections = {
	'blog': blog,
	'portfolio': portfolio
}; 