
import { useState } from "react";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-slate-800">
        {!imageFailed ? (
          <img
           src={project.image}
           alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-slate-500">
            <Code2 size={44} />
            <span className="text-sm">{project.title}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-sm text-cyan-400">
            {project.role} · {project.year}
          </span>
          <ArrowUpRight className="text-slate-500" size={20} />
        </div>

        <h3 className="mb-3 text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mb-5 leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-cyan-400"
              >
                View Code
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-white hover:text-cyan-400"
              >
                Live Demo <ExternalLink size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
