import { allPosts } from "content-collections";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

export async function GET() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  const rssItems = sortedPosts
    .map((post) => {
      const slug = post._meta.path.replace(/\.mdx$/, "");
      const postUrl = absoluteUrl(`/blog/${slug}`);
      const pubDate = new Date(post.publishedAt).toUTCString();

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.summary)}</description>
      <author>${escapeXml(post.author || "Wick Thaweep")}</author>
    </item>`;
    })
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Wick Thaweep — Engineering Blog</title>
    <link>${absoluteUrl("/blog")}</link>
    <description>Technical articles on Full-Stack Software Engineering, Rust, Next.js, PostgreSQL, and AI Agents by Wick Thaweep.</description>
    <language>th-TH</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
