"use client";

import { useState, useRef, useEffect, type ComponentProps } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";
import { codeToHtml } from "shiki/bundle/web";
import { cn } from "@/lib/utils";

type CodeBlockProps = ComponentProps<"pre">;

function extractLanguage(className?: string): string {
  if (!className) return "plaintext";
  const match = className.match(/language-([a-z0-9-]+)/i);
  return match ? match[1] : "plaintext";
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [{ html, className, title }, setRenderState] = useState<{
    html: string;
    className: string;
    title: string | null;
  }>({ html: "", className: "", title: null });
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const pre = preRef.current;
    const codeEl = pre?.querySelector("code");
    if (!pre || !codeEl) return;

    const codeText = codeEl.textContent || "";
    const lang = extractLanguage(codeEl.className);
    const nextTitle = codeEl.getAttribute("data-title");
    const nextClassName = codeEl.className || "";

    void codeToHtml(codeText, {
      lang: lang as any,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
    })
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        setRenderState({
          html: doc.querySelector("code")?.innerHTML ?? "",
          className: nextClassName,
          title: nextTitle,
        });
      })
      .catch((error) => {
        console.error("Failed to highlight code:", error);
        setRenderState({ html: "", className: nextClassName, title: nextTitle });
      });
  }, [children]);

  const handleCopy = async () => {
    const code = preRef.current?.textContent || "";
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  const currentTitle = title || (className ? extractLanguage(className).toUpperCase() : "CODE");

  return (
    <div className={[
      "group relative overflow-hidden rounded-2xl border",
      "bg-neutral-50 dark:bg-gray-950",
      "border-neutral-200 dark:border-white/10 shadow-md dark:shadow-2xl",
      "inset-ring inset-ring-neutral-200/50 dark:inset-ring-white/5",
    ].join(" ")}>
      <pre
        ref={preRef}
        {...props}
        className={cn("p-0! m-0! overflow-x-auto", props.className)}
      >
        {/* Window Chrome / Tab Header (ปรับแต่งให้รองรับ Light/Dark mode) */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/80 dark:bg-gray-950/80 border-b border-neutral-200 dark:border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            {/* macOS-style dots */}
            <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-white/15"></span>
            <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-white/15"></span>
            <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-white/15"></span>
            {/* File/Language name */}
            <span className="ml-4 font-mono text-xs text-neutral-500 dark:text-gray-400 font-semibold tracking-wide uppercase">
              {currentTitle}
            </span>
          </div>
          {/* Copy button */}
          <Button
            onClick={handleCopy}
            variant="outline"
            size="icon"
            className={cn(
              "size-7 text-neutral-500 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer transition-opacity rounded-lg",
              "border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 hover:border-blue-500/30 dark:hover:border-blue-500/30",
              "shadow-none focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
            )}
            aria-label="Copy code"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          </Button>
        </div>

        {html && (
          <div className="p-5 overflow-x-auto text-[13px]/6 font-mono">
            <code
              className={`shiki ${className} *:block`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        )}

        {!html && (
          <div className="p-5 overflow-x-auto text-[13px]/6 font-mono text-neutral-700 dark:text-gray-300">
            {children}
          </div>
        )}
      </pre >
    </div>
  );
}
