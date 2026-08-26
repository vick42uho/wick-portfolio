import { MetadataRoute } from 'next';
import { allPosts } from 'content-collections';
import { DATA } from '@/data/resume';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || DATA.url || 'https://wick-portfolio-22.vercel.app').replace(/\/$/, '');

  // 1. Static Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // 2. Dynamic Blog Post Routes (Derived from Content Collections)
  const blogRoutes: MetadataRoute.Sitemap = allPosts.map((post) => {
    const slug = post._meta.path.replace(/\.mdx$/, '');
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(post.publishedAt || new Date()),
      changeFrequency: 'monthly',
      priority: 0.85,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
