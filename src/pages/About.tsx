import { images } from "../data/images";
import { BookOpen, GraduationCap, Globe2, Target } from "lucide-react";
import Photo from "../components/ui/Photo";
import SectionHeading from "../components/ui/SectionHeadings";
import { profile } from "../data/profile";

export default function About() {
  return (
    <div className="space-y-20 pb-16">
      <section>
        <SectionHeading
          eyebrow="Get to Know Me"
          title="More than just code."
          description="My journey combines software engineering, entrepreneurship, leadership and a commitment to meaningful social impact."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Photo
            src={images.about}
            alt="Gaspard Tumusiime"
            className="aspect-[4/5] w-full rounded-3xl border border-white/10 object-cover"
          />

          <div className="space-y-6 leading-8 text-slate-400">
            <h2 className="text-2xl font-bold text-white">
              Hi, I'm Gaspard.
            </h2>

            <p>
              I'm pursuing a Bachelor of Science in Software
              Engineering at United States International
              University - Africa (USIU-Africa).
            </p>

            <p>
              My technical experience includes developing
              full-stack web applications, integrating AI
              services, working with databases and APIs,
              and collaborating on software projects.
            </p>

            <p>
              Beyond software development, I've been involved
              in digital skills training, youth mentorship,
              sustainability initiatives and entrepreneurship.
              These experiences have strengthened my interest
              in technology that addresses real challenges.
            </p>

            <p>
              I'm currently seeking opportunities to contribute
              to software development while learning from
              experienced engineering teams.
            </p>

            <div className="grid gap-4 pt-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
                <Target className="mb-3 text-cyan-400" />
                <h3 className="font-semibold text-white">
                  Career Focus
                </h3>
                <p className="mt-2 text-sm">
                  Software engineering and product development.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
                <Globe2 className="mb-3 text-cyan-400" />
                <h3 className="font-semibold text-white">
                  Interests
                </h3>
                <p className="mt-2 text-sm">
                  Technology, entrepreneurship and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
        />

        <div className="space-y-5">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <GraduationCap className="mb-4 text-cyan-400" size={30} />
                <h3 className="text-xl font-semibold text-white">
                  BSc Software Engineering
                </h3>
                <p className="mt-2 text-slate-300">
                  United States International University - Africa
                </p>
              </div>
              <span className="text-sm text-cyan-400">
                2024 - 2028 (Expected)
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Relevant coursework includes System Analysis and
              Design, Introduction to Software Engineering,
              Website Design, Object-Oriented Programming,
              and Data Structures and Algorithms.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-7">
            <BookOpen className="mb-4 text-cyan-400" size={30} />
            <h3 className="text-xl font-semibold text-white">
              Secondary Education
            </h3>
            <p className="mt-2 text-slate-300">
              Uganda Advanced Certificate of Education — 2022
            </p>
            <p className="mt-1 text-slate-300">
              Uganda Certificate of Education — 2019
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Recipient of the CNOOC Best Performer's Award
              for outstanding UCE academic performance (2020).
              Served as Sanitation Prefect from 2021 to 2022.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Beyond Engineering"
            title="Areas of Interest"
          />
          <div className="flex flex-wrap gap-3">
            {profile.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Communication"
            title="Languages"
          />
          <div className="space-y-3">
            {profile.languages.map((language) => (
              <div
                key={language.name}
                className="flex justify-between rounded-xl border border-white/10 bg-slate-900 px-5 py-4"
              >
                <span className="text-white">{language.name}</span>
                <span className="text-cyan-400">{language.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
