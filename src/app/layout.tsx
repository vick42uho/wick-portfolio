import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "th_TH",
    type: "website",
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
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

            {/* ── Wide Grid Layout System with side gutters (จาก Section 5 ของ Skill) ── */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-[60px_1fr_60px] lg:grid-cols-[100px_1fr_100px] min-h-screen">
                
                {/* Left diagonal stripe gutter */}
                <div className="col-start-1 row-span-full hidden md:block relative border-r border-white/5 bg-fixed">
                  <div className="absolute inset-0
                    bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
                    bg-size-[8px_8px] opacity-15 dark:opacity-30
                    [--pattern-fg:var(--color-black)] dark:[--pattern-fg:var(--color-white)]"
                  />
                </div>

                {/* Main Content Area */}
                <div className="col-start-2 py-12 pb-28 sm:py-24 px-4 sm:px-8 lg:px-16 max-w-3xl mx-auto w-full">
                  {children}
                </div>

                {/* Right diagonal stripe gutter */}
                <div className="col-start-3 row-span-full hidden md:block relative border-l border-white/5 bg-fixed">
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
