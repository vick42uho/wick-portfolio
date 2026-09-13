import { MetadataRoute } from 'next';
import { allPosts } from 'content-collections';
import { SITE_URL, absoluteUrl, resolveImageUrl } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [absoluteUrl('/me.jpg')],
    },
    {
      url: absoluteUrl('/blog'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      images: [absoluteUrl('/blog/opengraph-image')],
    },
  ];

  // 2. Dynamic Blog Post Routes (Derived from Content Collections)
  const blogRoutes: MetadataRoute.Sitemap = allPosts.map((post) => {
    const slug = post._meta.path.replace(/\.mdx$/, '');
    const postImageUrl = resolveImageUrl(
      post.image,
      `/blog/${slug}/opengraph-image`
    );

    return {
      url: absoluteUrl(`/blog/${slug}`),
      lastModified: new Date(post.updatedAt || post.publishedAt || new Date()),
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [postImageUrl],
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
