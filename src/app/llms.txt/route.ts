import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export async function GET() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  const postsMarkdown = sortedPosts
    .map((post) => {
      const slug = post._meta.path.replace(/\.mdx$/, "");
      return `- [${post.title}](${absoluteUrl(`/blog/${slug}`)}): ${post.summary} (${post.publishedAt})`;
    })
    .join("\n");

  const projectsMarkdown = DATA.projects
    .map((proj) => {
      const link = proj.href ? ` (${proj.href})` : "";
      return `- **${proj.title}**${link}: ${proj.description} [Tech: ${proj.technologies.join(", ")}]`;
    })
    .join("\n");

  const markdown = `# Wick Thaweep Poraha (วิค / วิก ทวีป โปราหา)
> Senior Full-Stack Software Engineer & Systems Architect based in Bangkok, Thailand.
> Also known as: Wick, Wic, Vic, Vick, วิค, วิก, ทวีป โปราหา, Thaweep Poraha.

- **Website**: ${SITE_URL}
- **GitHub**: ${DATA.contact.social.GitHub.url}
- **Email**: ${DATA.contact.email}
- **Location**: ${DATA.location}

## About
${DATA.summary.trim()}

## Core Technologies & Skills
${DATA.skills.map((s) => `- ${s.name}`).join("\n")}

## Featured Projects
${projectsMarkdown}

## Technical Articles & Blog Posts
${postsMarkdown}
`;

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
