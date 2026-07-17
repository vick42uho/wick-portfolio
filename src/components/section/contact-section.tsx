import Link from "next/link";
import { DATA } from "@/data/resume";
import { Phone, Mail } from "lucide-react";

function LineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.586.39.084.922.258 1.058.592.12.301.079.77.038 1.074l-.171 1.025c-.052.31-.252 1.212 1.083.66 1.333-.55 7.186-4.233 9.803-7.247 2.15-2.483 3.153-4.877 3.153-7.512zm-14.733 3.513h-2.133c-.325 0-.589-.264-.589-.589v-4.667c0-.325.264-.589.589-.589h2.133c.325 0 .589.264.589.589v.589c0 .325-.264.589-.589.589h-1.544v.889h1.544c.325 0 .589.264.589.589v.589c0 .325-.264.589-.589.589h-1.544v.889h1.544c.325 0 .589.264.589.589v.589c0 .325-.264.589-.589.589zm4.288 0h-1.422c-.325 0-.589-.264-.589-.589v-4.667c0-.325.264-.589.589-.589h.589c.325 0 .589.264.589.589v3.478l1.422-3.478a.591.591 0 0 1 .536-.389h.589c.325 0 .589.264.589.589v4.667c0 .325-.264.589-.589.589h-.589c-.325 0-.589-.264-.589-.589v-3.478l-1.422 3.478a.591.591 0 0 1-.536.389zm4.614 0h-2.133c-.325 0-.589-.264-.589-.589v-4.667c0-.325.264-.589.589-.589h.589c.325 0 .589.264.589.589v4.078h1.544c.325 0 .589.264.589.589v.589c0 .325-.264.589-.589.589zm3.541-1.178c0 .325-.264.589-.589.589h-2.133c-.325 0-.589-.264-.589-.589v-4.667c0-.325.264-.589.589-.589h2.133c.325 0 .589.264.589.589v.589c0 .325-.264.589-.589.589h-1.544v.889h1.544c.325 0 .589.264.589.589v.589c0 .325-.264.589-.589.589h-1.544v.889h1.544c.325 0 .589.264.589.589v.589z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/45 backdrop-blur-xs py-5 px-6 max-w-xl mx-auto transition-all duration-300 hover:border-sky-500/20">
      
      {/* Subtle ambient glow in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[150px] w-[300px] rounded-full bg-linear-to-r from-sky-500/5 to-violet-500/5 blur-[50px] pointer-events-none" />

      {/* Sleek inline structure */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 z-10">
        
        {/* Text column */}
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-lg font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xs text-muted-foreground max-w-xs leading-normal">
            Let&apos;s connect! Drop me an email, call, or message on Line.
          </p>
        </div>

        {/* Buttons column */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
          {/* Email button */}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="group relative flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-border bg-background/80 hover:bg-background px-4 py-2 text-xs font-semibold shadow-xs transition-all duration-200 hover:border-sky-500/30 hover:-translate-y-0.5"
          >
            <Mail className="size-3.5 text-sky-500 group-hover:scale-110 transition-transform" />
            <span>Email</span>
          </Link>

          {/* Line button */}
          <Link
            href="https://line.me/ti/p/zEG7niQb-o"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-border bg-background/80 hover:bg-background px-4 py-2 text-xs font-semibold shadow-xs transition-all duration-200 hover:border-green-500/30 hover:-translate-y-0.5"
          >
            <LineIcon className="size-3.5 text-green-500 group-hover:scale-110 transition-transform" />
            <span>Line</span>
          </Link>

          {/* Phone button */}
          <Link
            href="tel:092-445-2492"
            className="group relative flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-border bg-background/80 hover:bg-background px-4 py-2 text-xs font-semibold shadow-xs transition-all duration-200 hover:border-violet-500/30 hover:-translate-y-0.5"
          >
            <Phone className="size-3.5 text-violet-500 group-hover:scale-110 transition-transform" />
            <span>Call</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
