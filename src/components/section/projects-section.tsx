import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      {/* Header */}
      <div className="flex flex-col gap-y-4 items-center justify-center">
        {/* Divider with centered badge */}
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-blue-500/10" />
          <div className="rounded-full px-4 py-1 border border-blue-500/30 bg-blue-500/10
            shadow-[0_0_16px_oklch(0.55_0.22_255/0.15)]">
            <span className="text-blue-400 text-xs font-mono font-semibold tracking-widest uppercase">
              My Projects
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-500/30 to-blue-500/10" />
        </div>

        <div className="flex flex-col gap-y-2 items-center text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-balance
            text-metallic-white">
            Check out my latest work
          </h2>
          <p className="text-muted-foreground text-sm/relaxed md:text-base/relaxed text-balance max-w-md">
            From hospital media platforms to enterprise IAM systems — production
            applications built and shipped.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            className="h-full"
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
