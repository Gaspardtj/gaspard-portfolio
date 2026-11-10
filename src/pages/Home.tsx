import { images } from "../data/images";
import { ArrowRight, Download, MapPin } from "lucide-react";
import Button from "../components/ui/Button";
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
      <section className="profile-hero">
        <img className="profile-hero-image" src={images.profile} alt="" fetchPriority="high" />
        <div className="profile-hero-overlay" />
        <div className="profile-hero-content">
          <p className="mb-4 text-lg text-slate-600">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Gaspard
            <br />
            <span className="text-sky-700">Tumusiime Jimmy</span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-slate-700 md:text-2xl">
            Software Engineering Student & Developer
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-600">
            {profile.bio}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
            <MapPin size={17} className="text-sky-700" />
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

      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center"
          >
            <p className="text-3xl font-bold text-sky-700">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-slate-600">
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

      <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-sky-50 to-blue-100 p-8 text-center md:p-14">
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
