import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
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

const siteCleanUrl = (DATA.url || "https://wick-portfolio-22.vercel.app").replace(/\/$/, '');

// ── Complete SEO Metadata Configuration ──
export const metadata: Metadata = {
  metadataBase: new URL(siteCleanUrl),
  title: {
    default: "Wick Thaweep (วิค ทวีป) — Senior Full-Stack Software Engineer",
    template: "%s | Wick Thaweep",
  },
  description: DATA.description,
  keywords: [
    "Wick",
    "Wick Thaweep",
    "Wick Thaweep Poraha",
    "Thaweep Poraha",
    "วิค ทวีป",
    "วิค ทวีป โพราหา",
    "พอร์ตโฟลิโอวิค",
    "Full-Stack Software Engineer",
    "Senior Full Stack Developer Thailand",
    "Rust Developer Thailand",
    "Axum REST API",
    "Next.js Portfolio",
    "React Developer Bangkok",
    "TypeScript Expert",
    "Tailwind CSS v4 Design System",
    "Healthcare Web Applications",
    "High Availability PostgreSQL",
    "AI Agent Skills",
    "Loop Engineering AI Agents",
    "Software Architecture",
    "DevOps Docker Kubernetes"
  ],
  authors: [{ name: "Wick Thaweep Poraha", url: siteCleanUrl }],
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
    url: siteCleanUrl,
    siteName: "Wick Thaweep Portfolio",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    type: "website",
  },
  
  twitter: {
    title: "Wick Thaweep (วิค ทวีป) — Senior Full-Stack Software Engineer",
    card: "summary_large_image",
    description: DATA.description,
    creator: "@vick42uho",
  },

  alternates: {
    canonical: siteCleanUrl,
    languages: {
      "th-TH": siteCleanUrl,
      "en-US": siteCleanUrl,
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
    "@id": `${siteCleanUrl}/#person`,
    name: "Wick Thaweep Poraha",
    alternateName: ["Wick", "วิค ทวีป", "ทวีป โพราหา", "𝕎𝕚𝕔𝕜"],
    url: siteCleanUrl,
    image: `${siteCleanUrl}/me.png`,
    jobTitle: "Senior Full-Stack Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Healthcare & Enterprise Technology",
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
    "@id": `${siteCleanUrl}/#website`,
    url: siteCleanUrl,
    name: "Wick Thaweep Portfolio",
    description: DATA.description,
    author: {
      "@id": `${siteCleanUrl}/#person`,
    },
    inLanguage: ["th", "en"],
  };

  return (
    <html lang="th" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/jpeg" href="/me.jpg" />
        <link rel="shortcut icon" type="image/jpeg" href="/me.jpg" />
        <link rel="apple-touch-icon" href="/me.jpg" />
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
