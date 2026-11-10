
import { useEffect, useRef, useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  Users,
  GraduationCap,
  ExternalLink,
  Expand,
  X,
  ArrowRight,
} from "lucide-react";

import SectionHeading from "../components/ui/SectionHeadings";
import Button from "../components/ui/Button";
import { experiences } from "../data/experience";

interface ImagePreview {
  src: string;
  title: string;
}

export default function Experience() {
  const [selectedImage, setSelectedImage] =
    useState<ImagePreview | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Open the certificate viewer
  const openImage = (image: ImagePreview) => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    setSelectedImage(image);
  };

  // Close the certificate viewer
  const closeImage = () => {
    setSelectedImage(null);
  };

  // Handle keyboard navigation and page scrolling
  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "Tab") {
        const dialog = document.getElementById(
          "experience-image-dialog"
        );

        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );

        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [selectedImage]);

  // Experience achievements
  const achievements = [
    {
      icon: Users,
      value: "200+",
      label: "Students Trained",
      description:
        "Supported digital literacy training through ANGAZA.",
    },
    {
      icon: GraduationCap,
      value: "4",
      label: "Schools Reached",
      description:
        "Contributed to digital skills education across four schools.",
    },
    {
      icon: Award,
      value: "2025",
      label: "Millennium Fellow",
      description:
        "Participated in leadership and community impact initiatives.",
    },
  ];

  return (
    <div className="space-y-20 pb-16">

      {/* PAGE INTRODUCTION */}
      <section>
        <SectionHeading
          eyebrow="Professional Journey"
          title="Experience & Leadership"
          description="My journey combines technology, entrepreneurship, education, mentorship, and sustainability. Each experience has strengthened my technical and professional capabilities."
        />

        {/* EXPERIENCE TIMELINE */}
        <div className="relative ml-3 border-l border-cyan-400/20 pl-7 md:ml-5 md:pl-12">

          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="relative mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-cyan-400/30 md:p-8"
            >
              {/* TIMELINE INDICATOR */}
              <div className="absolute -left-[37px] top-8 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 md:-left-[57px]" />

              {/* EXPERIENCE HEADER */}
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="mb-3 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-sky-700">
                    {experience.period}
                  </span>

                  <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                    {experience.role}
                  </h2>

                  <p className="mt-2 font-medium text-slate-700">
                    {experience.organization}
                  </p>
                </div>

                <div className="rounded-xl bg-cyan-400/10 p-3 text-sky-700">
                  <BriefcaseBusiness size={23} />
                </div>
              </div>

              {/* EXPERIENCE DESCRIPTION */}
              <p className="mb-6 max-w-3xl leading-8 text-slate-600">
                {experience.description}
              </p>

              {/* KEY CONTRIBUTIONS */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-700">
                  Key Contributions
                </h3>

                <ul className="space-y-3">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMPACT CERTIFICATE PREVIEW */}
              {experience.image && (
                <div className="mt-7 border-t border-slate-200 pt-6">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Supporting Image / Certificate
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Click the preview to view the full image.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      openImage({
                        src: experience.image!,
                        title: experience.organization,
                      })
                    }
                    aria-label={`Enlarge image for ${experience.organization}`}
                    className="group block w-full max-w-[320px] cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 bg-sky-50 p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 sm:max-w-[360px]"
                  >
                    {/* Certificate Image */}
                    <div className="flex h-48 items-center justify-center overflow-hidden rounded-lg bg-slate-50 p-2">
                      <img
                        src={experience.image}
                        alt={`Supporting image for ${experience.organization}`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Preview Footer */}
                    <div className="mt-3 flex items-center justify-between gap-2 px-1">
                      <span className="text-xs font-medium text-slate-700">
                        View Full Image
                      </span>

                      <Expand
                        size={16}
                        className="text-sky-700"
                      />
                    </div>
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section>
        <SectionHeading
          eyebrow="Highlights"
          title="Impact & Recognition"
          description="Selected achievements from my leadership, mentorship, and community development experience."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map(
            ({ icon: Icon, value, label, description }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="mb-5 inline-flex rounded-xl bg-cyan-400/10 p-3 text-sky-700">
                  <Icon size={25} />
                </div>

                <p className="text-3xl font-bold text-slate-900">
                  {value}
                </p>

                <h3 className="mt-3 font-semibold text-slate-700">
                  {label}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* COLLABORATION SECTION */}
      <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-sky-50 to-blue-100 p-8 md:p-12">
        <div className="max-w-2xl">
          <Award className="mb-6 text-sky-700" size={32} />

          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Experience that goes beyond the classroom.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Through software development, entrepreneurship,
            mentorship, and community initiatives, I've learned
            the importance of teamwork, adaptability, and
            applying knowledge to real-world challenges.
          </p>

          <div className="mt-8">
            <Button to="/contact">
              Let's Connect
              <ArrowRight size={17} />
            </Button>
          </div>
        </div>
      </section>

      {/* FULLSCREEN CERTIFICATE VIEWER */}
      {selectedImage && (
        <div
          id="experience-image-dialog"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} image preview`}
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeImage}
            aria-label="Close image preview"
            className="absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white/10 p-3 text-slate-900 transition-colors hover:bg-white/20"
          >
            <X size={24} />
          </button>

          {/* Fullscreen Image Content */}
          <div
            className="flex max-h-[90vh] w-full max-w-6xl flex-col items-center gap-5"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="max-w-2xl text-center text-lg font-semibold text-slate-900">
              {selectedImage.title}
            </h2>

            <div className="flex min-h-0 w-full flex-1 items-center justify-center overflow-auto">
              <img
                src={selectedImage.src}
                alt={`${selectedImage.title} enlarged`}
                className="max-h-[75vh] max-w-full rounded-lg object-contain"
              />
            </div>

            <a
              href={selectedImage.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-white/10"
            >
              <ExternalLink size={17} />
              Open Original Image
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
