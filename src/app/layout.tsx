import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { SITE_URL, absoluteUrl, resolveImageUrl } from "@/lib/seo";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

// ── Next.js Dynamic Viewport (สลับสีแถบบน Browser ตาม theme) ──
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050d1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

// ── Complete SEO Metadata Configuration ──
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wick Thaweep (วิค ทวีป) — Senior Full-Stack Software Engineer",
    template: "%s | Wick Thaweep",
  },
  description: DATA.description,
  keywords: [
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
    "พอร์ตโฟลิโอ วิค",
    "พอร์ตโฟลิโอ วิก",
    "พอร์ตโฟลิโอ ทวีป โปราหา",
    "Full-Stack Software Engineer",
    "Senior Full Stack Developer Thailand",
    "Rust Developer Thailand",
    "Axum REST API",
    "Next.js Portfolio",
    "React Developer Bangkok",
    "TypeScript Expert",
    "Tailwind CSS v4 Design System",
    "Healthcare Web Applications",
    "Hospital Information Systems",
    "High Availability PostgreSQL",
    "Patroni PostgreSQL Cluster",
    "AI Agent Skills",
    "Loop Engineering AI Agents",
    "Software Architecture",
    "DevOps Docker Kubernetes",
    "Bun Elysia Framework",
  ],
  authors: [{ name: "Wick Thaweep Poraha", url: SITE_URL }],
  creator: "Wick Thaweep Poraha",
  publisher: "Wick Thaweep Poraha",
  
  // Favicon and Device Icons
  icons: {
    icon: [
      { url: "/icon", sizes: "48x48", type: "image/png" },
      { url: "/me.jpg", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Wick Thaweep (วิค ทวีป) — Senior Full-Stack Software Engineer",
    description: DATA.description,
    url: SITE_URL,
    siteName: "Wick Thaweep Portfolio",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Wick Thaweep — Senior Full-Stack Software Engineer",
      },
    ],
  },
  
  twitter: {
    title: "Wick Thaweep (วิค ทวีป) — Senior Full-Stack Software Engineer",
    card: "summary_large_image",
    description: DATA.description,
    creator: "@vick42uho",
    images: [`${SITE_URL}/opengraph-image`],
  },

  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": `${SITE_URL}/rss.xml`,
    },
    languages: {
      "th-TH": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "bZ9Kr1lTGv_Bb5dHcZZRy1iiUaFvt2gD0Opmenpm5BM",
  },
  other: {
    "geo.region": "TH-10",
    "geo.placename": "Bangkok",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced Schema.org JSON-LD for Search Engine Knowledge Graphs
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Wick Thaweep Poraha",
    alternateName: [
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
    url: SITE_URL,
    image: resolveImageUrl("/me.jpg"),
    jobTitle: "Senior Full-Stack Software Engineer",
    email: `mailto:${DATA.contact.email}`,
    telephone: DATA.contact.tel,
    nationality: {
      "@type": "Country",
      name: "Thailand",
    },
    worksFor: {
      "@type": "Organization",
      name: "Yanhee International Hospital",
      url: "https://th.yanhee.net/",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Dhonburi Rajabhat University",
      url: "https://dru1.dru.ac.th/",
    },
    description: DATA.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },
    sameAs: [
      "https://github.com/vick42uho",
      "https://x.com/vick42uho",
    ],
    knowsAbout: [
      "Full-Stack Software Engineering",
      "Rust (Axum API)",
      "Next.js & React",
      "TypeScript",
      "PostgreSQL Architecture",
      "Docker & Containerization",
      "AI Agent Skills & Loop Engineering",
      "Tailwind CSS v4 Design Systems",
      "Healthcare Enterprise Systems",
    ],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Wick Thaweep Portfolio & Technical Blog",
    alternateName: [
      "Wick Portfolio",
      "Vic Portfolio",
      "Vick Portfolio",
      "Wic Portfolio",
      "วิค ทวีป พอร์ตโฟลิโอ",
      "วิก ทวีป พอร์ตโฟลิโอ",
      "พอร์ตโฟลิโอ ทวีป โปราหา",
    ],
    description: DATA.description,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: ["th-TH", "en-US"],
  };

  return (
    <html lang="th" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative overflow-x-hidden",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>

            {/* ── Ambient background effects ─────────────── */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
              {/* Mesh grid overlay */}
              <div className="absolute inset-0 mesh-grid opacity-30 dark:opacity-75" />

              {/* Blue glow orbs */}
              <div
                className="glow-orb-blue"
                style={{ width: 800, height: 800, top: -200, left: "10%" }}
              />
              <div
                className="glow-orb-indigo"
                style={{ width: 700, height: 700, top: 400, right: "-10%", animationDelay: "2s" }}
              />
              <div
                className="glow-orb-blue"
                style={{ width: 500, height: 500, bottom: "-10%", left: "20%", animationDelay: "4s", opacity: 0.4 }}
              />
            </div>

            {/* ── Wide Grid Layout System with side gutters ── */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-[60px_1fr_60px] lg:grid-cols-[100px_1fr_100px] min-h-screen">
                
                {/* Left diagonal stripe gutter */}
                <div className="md:col-start-1 row-span-full hidden md:block relative border-r border-white/5 bg-fixed">
                  <div className="absolute inset-0
                    bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
                    bg-size-[8px_8px] opacity-15 dark:opacity-30
                    [--pattern-fg:var(--color-black)] dark:[--pattern-fg:var(--color-white)]"
                  />
                </div>

                {/* Main Content Area */}
                <div className="col-start-1 md:col-start-2 py-12 pb-28 sm:py-24 px-4 sm:px-8 lg:px-16 max-w-3xl mx-auto w-full">
                  {children}
                </div>

                {/* Right diagonal stripe gutter */}
                <div className="md:col-start-3 row-span-full hidden md:block relative border-l border-white/5 bg-fixed">
                  <div className="absolute inset-0
                    bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
                    bg-size-[8px_8px] opacity-15 dark:opacity-30
                    [--pattern-fg:var(--color-black)] dark:[--pattern-fg:var(--color-white)]"
                  />
                </div>

              </div>
            </div>

            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
