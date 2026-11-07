
import {
  BrainCircuit,
  Code2,
  Database,
  Globe,
  Terminal,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeadings";
import { skillGroups } from "../data/skills";

const icons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Frontend Development": Globe,
  "Backend & Databases": Database,
  "AI & Emerging Technologies": BrainCircuit,
  "Tools & Deployment": Terminal,
  "Professional Skills": Users,
};

export default function Skills() {
  return (
    <div className="space-y-16 pb-16">
      <section>
        <SectionHeading
          eyebrow="Technical Toolkit"
          title="Skills & Technologies"
          description="Programming languages, development technologies, platforms and professional capabilities I've worked with through academic, project and community experiences."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = icons[group.category] ?? Code2;

            return (
              <article
                key={group.category}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-7 transition-colors hover:border-cyan-400/30"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                    <Icon size={24} />
                  </div>

                  <h2 className="text-lg font-semibold text-white">
                    {group.category}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900 p-8 md:p-12">
        <SectionHeading
          eyebrow="Professional Development"
          title="Continuously learning and building."
          description="My software engineering studies and practical projects help me develop stronger foundations in software design, application development, problem solving and collaboration."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Software Design & OOP",
            "Data Structures & Algorithms",
            "Full-Stack Application Development",
          ].map((area) => (
            <div
              key={area}
              className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-sm font-medium text-cyan-200"
            >
              {area}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
