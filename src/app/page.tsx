/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { AvatarInteractive } from "@/components/avatar-interactive";
import { DescriptionTypeWriter } from "@/components/description-type-writer";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, MapPin } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: DATA.location.split(",")[0].trim(),
      addressCountry: DATA.location.split(",")[1]?.trim() || DATA.location,
    },
    jobTitle: "Full-Stack Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Yanhee International Hospital",
    },
    sameAs: [DATA.contact.social.GitHub.url],
  }).replace(/</g, "\\u003c");

  return (
    <main className="min-h-dvh flex flex-col gap-20 relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: jsonLdContent }}
      />

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section id="hero" className="relative">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-4 gap-y-8 flex flex-col md:flex-row justify-between items-start">
            {/* Text */}
            <div className="gap-3 flex flex-col order-2 md:order-1 flex-1">

              {/* Location badge */}
              <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium w-fit
                  bg-blue-500/10 border border-blue-700/20 text-blue-600 dark:text-blue-300">
                  <MapPin className="size-3" aria-hidden />
                  {DATA.location}
                </span>
              </BlurFade>

              {/* Name */}
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-metallic-white"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                as="h1"
              />

              {/* Typewriter subtitle */}
              <div className="text-muted-foreground max-w-[600px] text-base md:text-lg">
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <DescriptionTypeWriter
                    staticText="Systems-minded full-stack engineer turning"
                    sequence={DATA.descriptionSequence}
                  />
                </BlurFade>
              </div>
            </div>

            {/* Avatar */}
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 flex-none">
              <AvatarInteractive
                avatarUrl={DATA.avatarUrl}
                name={DATA.name}
                initials={DATA.initials}
              />
            </BlurFade>
          </div>
        </div>

        {/* Full-Viewport Horizontal Divider (จาก Section 4 ของ Skill - 200vw trick) */}
        <div className="absolute bottom-[-40px] left-0 right-0 h-px pointer-events-none">
          <div className="relative w-full h-full
            before:absolute before:top-0 before:h-px before:w-[200vw] before:left-[-100vw]
            before:bg-neutral-200 dark:before:bg-white/8"
            aria-hidden
          />
        </div>
      </section>

      {/* ══ ABOUT ══════════════════════════════════════════════ */}
      <section id="about" className="relative">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="section-title">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>

        {/* Full-Viewport Divider */}
        <div className="absolute bottom-[-40px] left-0 right-0 h-px pointer-events-none">
          <div className="relative w-full h-full
            before:absolute before:top-0 before:h-px before:w-[200vw] before:left-[-100vw]
            before:bg-neutral-200 dark:before:bg-white/8"
            aria-hidden
          />
        </div>
      </section>

      {/* ══ WORK EXPERIENCE ════════════════════════════════════ */}
      <section id="work" className="relative">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="section-title">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <WorkSection />
          </BlurFade>
        </div>

        {/* Full-Viewport Divider */}
        <div className="absolute bottom-[-40px] left-0 right-0 h-px pointer-events-none">
          <div className="relative w-full h-full
            before:absolute before:top-0 before:h-px before:w-[200vw] before:left-[-100vw]
            before:bg-neutral-200 dark:before:bg-white/8"
            aria-hidden
          />
        </div>
      </section>

      {/* ══ EDUCATION ══════════════════════════════════════════ */}
      <section id="education" className="relative">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="section-title">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 10 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-card group flex items-center gap-x-4 p-4 justify-between
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div className="flex items-center gap-x-4 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-10 p-1 border border-neutral-200 dark:border-white/10 rounded-full shadow
                          ring-1 ring-blue-500/20 overflow-hidden object-contain flex-none
                          bg-white/5"
                      />
                    ) : (
                      <div className="size-10 border border-neutral-200 dark:border-white/10 rounded-full bg-blue-500/10 flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2 text-foreground">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-blue-400 opacity-0 -translate-x-2
                            group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">{education.degree}</div>
                    </div>
                  </div>
                  <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                    {education.start} - {education.end}
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Full-Viewport Divider */}
        <div className="absolute bottom-[-40px] left-0 right-0 h-px pointer-events-none">
          <div className="relative w-full h-full
            before:absolute before:top-0 before:h-px before:w-[200vw] before:left-[-100vw]
            before:bg-neutral-200 dark:before:bg-white/8"
            aria-hidden
          />
        </div>
      </section>

      {/* ══ SKILLS ═════════════════════════════════════════════ */}
      <section id="skills" className="relative">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="section-title">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 12 + id * 0.04}>
                <div className="skill-badge">
                  {skill.icon && (
                    <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                  )}
                  <span>{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Full-Viewport Divider */}
        <div className="absolute bottom-[-40px] left-0 right-0 h-px pointer-events-none">
          <div className="relative w-full h-full
            before:absolute before:top-0 before:h-px before:w-[200vw] before:left-[-100vw]
            before:bg-neutral-200 dark:before:bg-white/8"
            aria-hidden
          />
        </div>
      </section>

      {/* ══ PROJECTS ═══════════════════════════════════════════ */}
      <section id="projects" className="relative">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <ProjectsSection />
        </BlurFade>

        {/* Full-Viewport Divider */}
        <div className="absolute bottom-[-40px] left-0 right-0 h-px pointer-events-none">
          <div className="relative w-full h-full
            before:absolute before:top-0 before:h-px before:w-[200vw] before:left-[-100vw]
            before:bg-neutral-200 dark:before:bg-white/8"
            aria-hidden
          />
        </div>
      </section>

      {/* ══ CONTACT ════════════════════════════════════════════ */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
