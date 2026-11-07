
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import Button from "../components/ui/Button";
import ProjectCard from "../components/ui/ProjectCard";
import SectionHeading from "../components/ui/SectionHeadings";

import { projects } from "../data/projects";
import { profile } from "../data/profile";

export default function Projects() {
  return (
    <div className="space-y-16 pb-16">

      {/* Page Introduction */}
      <section>
        <SectionHeading
          eyebrow="My Portfolio"
          title="Selected Projects"
          description="Explore some of the applications I've worked on, demonstrating my experience in frontend development, backend integration, artificial intelligence, and object-oriented programming."
        />

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* Technical Contributions */}
      <section>
        <SectionHeading
          eyebrow="Behind the Work"
          title="Technical Contributions"
          description="Key software engineering skills and technologies I've applied through practical development projects."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Frontend Development",
              description:
                "Building responsive and interactive user interfaces using React, TypeScript, HTML, and CSS.",
            },
            {
              title: "Backend Integration",
              description:
                "Connecting applications to authentication systems, databases, and REST APIs using technologies such as Supabase.",
            },
            {
              title: "AI Integration",
              description:
                "Integrating the Google Gemini API to support intelligent features, including agricultural price predictions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <h3 className="mb-3 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="rounded-3xl border border-white/10 bg-slate-900 p-8 md:p-10">

        <div className="mb-5 inline-flex rounded-xl bg-cyan-400/10 p-4 text-cyan-400">
          <FaGithub size={30} />
        </div>

        <h2 className="text-2xl font-bold text-white">
          Interested in Collaborating?
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-slate-400">
          I'm passionate about developing practical software
          solutions and collaborating with other developers,
          organizations, and innovators to create meaningful
          digital products.
        </p>

        <div className="mt-7 flex flex-wrap gap-4">
          <Button to="/contact">
            Contact Me
            <ArrowRight size={17} />
          </Button>

          {profile.github && (
            <Button
              href={profile.github}
              variant="secondary"
            >
              <FaGithub size={18} />
              View My GitHub
            </Button>
          )}
        </div>
      </section>

    </div>
  );
}
