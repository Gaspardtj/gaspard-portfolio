import { images } from "../data/images";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import Button from "../components/ui/Button";
import Photo from "../components/ui/Photo";
import ProjectCard from "../components/ui/ProjectCard";
import SectionHeading from "../components/ui/SectionHeadings";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

const stats = [
  { value: "200+", label: "Students Trained" },
  { value: "4", label: "Schools Reached" },
  { value: "2025", label: "Millennium Fellow" },
];

export default function Home() {
  return (
    <div className="space-y-28 pb-16">
      <section className="grid min-h-[75vh] items-center gap-14 py-12 lg:grid-cols-2">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            Software Engineering · Technology · Impact
          </div>

          <p className="mb-4 text-lg text-slate-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">
            Gaspard
            <br />
            <span className="text-cyan-400">Tumusiime.</span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-slate-200 md:text-2xl">
            Software Engineering Student & Developer
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            {profile.bio}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={17} className="text-cyan-400" />
            {profile.location}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/projects">
              Explore My Work <ArrowRight size={17} />
            </Button>

            <Button
              href="/documents/Gaspard_CV.pdf"
              variant="secondary"
              download
            >
              Download CV <Download size={17} />
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-800 shadow-2xl">
            
              <Photo
              src={images.profile}
              alt="Portrait of Gaspard Tumusiime"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 shadow-xl">
            <p className="text-sm font-semibold text-white">
              Building for impact
            </p>
            <p className="mt-1 text-xs text-cyan-400">
              Technology & Innovation
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-7 text-center"
          >
            <p className="text-3xl font-bold text-cyan-400">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      <section>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I've worked on"
          description="Applications combining software engineering, practical problem solving and meaningful use of technology."
        />

        <div className="grid gap-7 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8">
          <Button to="/projects" variant="secondary">
            View All Projects <ArrowRight size={17} />
          </Button>
        </div>
      </section>

      <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-cyan-950/40 p-8 text-center md:p-14">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Have an idea worth building?"
          description="I'm interested in software engineering opportunities, technology collaborations and initiatives that create meaningful impact."
        />

        <div className="flex justify-center">
          <Button to="/contact">
            Get In Touch <ArrowRight size={17} />
          </Button>
        </div>
      </section>
    </div>
  );
}
