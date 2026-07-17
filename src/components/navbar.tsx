import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-30">
      <Dock
        className={[
          "z-50 pointer-events-auto relative mx-auto w-fit",
          "flex items-center gap-1.5 px-3 py-2 h-14",
          // Glassmorphism with metallic blue tint
          "rounded-2xl border border-white/10 dark:border-white/10",
          "bg-white/90 dark:bg-blue-950/20 backdrop-blur-2xl",
          // Metallic glow shadow
          "shadow-[0_0_0_1px_oklch(0.65_0.20_255/0.15),0_8px_32px_oklch(0.10_0.025_255/0.15),0_0_60px_oklch(0.55_0.22_255/0.05)]",
          "dark:shadow-[0_0_0_1px_oklch(0.65_0.20_255/0.20),0_8px_32px_oklch(0.08_0.02_255/0.6),0_0_80px_oklch(0.55_0.22_255/0.12)]",
        ].join(" ")}
      >
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                >
                  <DockIcon
                    className={[
                      "rounded-xl cursor-pointer size-full p-0",
                      "text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white",
                      "bg-transparent hover:bg-blue-500/15",
                      "border border-transparent hover:border-blue-500/25",
                      "transition-all duration-200",
                    ].join(" ")}
                  >
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={10}
                className="rounded-xl bg-blue-600 text-white px-3 py-1.5 text-sm font-medium
                  shadow-[0_4px_20px_oklch(0.55_0.22_255/0.4)]"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-blue-600" />
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Separator orientation="vertical" className="h-6 w-px bg-neutral-200 dark:bg-white/10 mx-0.5" />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={name}
                  >
                    <DockIcon
                      className={[
                        "rounded-xl cursor-pointer size-full p-0",
                        "text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white",
                        "bg-transparent hover:bg-blue-500/15",
                        "border border-transparent hover:border-blue-500/25",
                        "transition-all duration-200",
                      ].join(" ")}
                    >
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={10}
                  className="rounded-xl bg-blue-600 text-white px-3 py-1.5 text-sm font-medium
                    shadow-[0_4px_20px_oklch(0.55_0.22_255/0.4)]"
                >
                  <p>{name}</p>
                  <TooltipArrow className="fill-blue-600" />
                </TooltipContent>
              </Tooltip>
            );
          })}

        <Separator orientation="vertical" className="h-6 w-px bg-neutral-200 dark:bg-white/10 mx-0.5" />

        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon
              className={[
                "rounded-xl cursor-pointer size-full p-0",
                "text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white",
                "bg-transparent hover:bg-blue-500/15",
                "border border-transparent hover:border-blue-500/25",
                "transition-all duration-200",
              ].join(" ")}
            >
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={10}
            className="rounded-xl bg-blue-600 text-white px-3 py-1.5 text-sm font-medium
              shadow-[0_4px_20px_oklch(0.55_0.22_255/0.4)]"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-blue-600" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
