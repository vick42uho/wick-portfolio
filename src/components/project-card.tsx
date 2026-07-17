/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { GlowCard } from "@/components/ui/spotlight-card";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  if (!src || imageError) {
    return (
      <div className="w-full h-44 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 flex items-center justify-center">
        <span className="text-blue-400/30 text-4xl font-bold font-mono"></span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-44 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <GlowCard
      glowColor="blue"
      customSize={true} // ให้คุมขนาดแบบ grid ในหน้าแรก
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-2xl",
        "transition-all duration-300 cursor-pointer shadow-lg",
        "bg-white/3 dark:bg-blue-950/5",
        "hover:-translate-y-0.5",
        className
      )}
    >
      {/* Media */}
      <div className="relative shrink-0 overflow-hidden">
        <Link href={href || "#"} target="_blank" rel="noopener noreferrer" className="block" aria-label={title}>
          {video ? (
            <video src={video} autoPlay loop muted playsInline className="w-full h-44 object-cover" />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-44 bg-gradient-to-br from-blue-900/30 to-indigo-900/20" />
          )}
        </Link>

        {/* Link badges — top right overlay */}
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-1.5 z-20">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={link.type}
              >
                <Badge
                  className="flex items-center gap-1 text-[11px] font-medium
                    bg-blue-600/90 hover:bg-blue-500 text-white border-blue-500/50
                    backdrop-blur-sm shadow-[0_0_10px_oklch(0.55_0.22_255/0.4)]"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1 z-10">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-foreground group-hover:text-blue-300 transition-colors duration-200">
              {title}
            </h3>
            <time className="text-xs text-muted-foreground/70">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-400 transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm flex-none"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed
          text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium
                  border border-blue-500/15 bg-blue-500/8 text-blue-400/80
                  dark:border-blue-400/15 dark:bg-blue-400/5 dark:text-blue-300/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </GlowCard>
  );
}
