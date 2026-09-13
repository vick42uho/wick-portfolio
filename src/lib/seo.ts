import { DATA } from "@/data/resume";

/**
 * Base clean URL without trailing slashes
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_BASE_URL || DATA.url || "https://wick-portfolio-22.vercel.app").replace(/\/$/, "");

/**
 * Ensures a path is resolved to a fully-qualified absolute URL without double slashes
 */
export function absoluteUrl(path = ""): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Safely resolves an image URL to an absolute URL, handling external links (e.g. Unsplash)
 * and relative local paths gracefully.
 */
export function resolveImageUrl(image?: string, fallback = "/me.jpg"): string {
  if (!image) {
    return absoluteUrl(fallback);
  }
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  return absoluteUrl(image);
}

/**
 * Global author information
 */
export const AUTHOR_INFO = {
  name: "Wick Thaweep Poraha",
  thaiName: "ทวีป โปราหา",
  nickname: "Wick (วิค)",
  alternateNames: [
    "Wick",
    "Wic",
    "Vic",
    "Vick",
    "วิค",
    "วิก",
    "วิค ทวีป",
    "วิก ทวีป",
    "วิค ทวีป โปราหา",
    "วิก ทวีป โปราหา",
    "ทวีป โปราหา",
    "Thaweep Poraha",
    "Wick Thaweep",
    "Vic Thaweep",
    "Vick Thaweep",
    "Wic Thaweep",
    "Wick Thaweep Poraha",
    "Vic Thaweep Poraha",
    "Vick Thaweep Poraha",
    "Wic Thaweep Poraha",
    "𝕎𝕚𝕔𝕜",
  ],
  role: "Senior Full-Stack Software Engineer",
  email: DATA.contact.email,
  telephone: DATA.contact.tel,
  github: DATA.contact.social.GitHub.url,
  location: DATA.location,
  avatar: absoluteUrl("/me.jpg"),
};
