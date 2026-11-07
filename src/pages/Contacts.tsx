
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";
import SectionHeading from "../components/ui/SectionHeadings";
import { profile } from "../data/profile";

export default function Contact() {
  const contactMethods = [
    {
      name: "Email",
      detail: profile.email,
      url: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      name: "WhatsApp",
      detail: "Start a conversation",
      url: `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
      icon: FaWhatsapp,
    },
    {
      name: "LinkedIn",
      detail: "Connect professionally",
      url: profile.linkedin,
      icon: FaLinkedin,
    },
  ];

  const socialLinks = [
    { name: "GitHub", url: profile.github, icon: FaGithub },
    { name: "Instagram", url: profile.instagram, icon: FaInstagram },
    { name: "Facebook", url: profile.facebook, icon: FaFacebook },
  ].filter((social) => social.url);

  return (
    <div className="space-y-16 pb-16">
      <section>
        <SectionHeading
          eyebrow="Let's Talk"
          title="Get in Touch"
          description="Whether you have a software project, an internship opportunity, a collaboration idea or simply want to connect, I'd be glad to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {contactMethods.map(({ name, detail, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target={url.startsWith("http") ? "_blank" : undefined}
                rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400">
                  <Icon size={25} />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-white">{name}</h2>
                  <p className="mt-1 break-words text-sm text-slate-400">
                    {detail}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-slate-500 transition-colors group-hover:text-cyan-400"
                />
              </a>
            ))}
          </div>

          <aside className="h-fit rounded-3xl border border-white/10 bg-slate-900 p-8">
            <MessageCircle className="mb-6 text-cyan-400" size={34} />

            <h2 className="text-2xl font-bold text-white">
              Let's build something meaningful.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              I'm open to software engineering internships,
              collaborative projects and opportunities to
              contribute to impactful digital solutions.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm text-slate-300">
              <MapPin className="text-cyan-400" size={18} />
              {profile.location}
            </div>

            {socialLinks.length > 0 && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-4 text-sm text-slate-400">
                  Find me online
                </p>

                <div className="flex gap-4">
                  {socialLinks.map(({ name, url, icon: Icon }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      title={name}
                      className="rounded-xl border border-white/10 p-3 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                    >
                      <Icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-white">
          Prefer a quick conversation?
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
          WhatsApp is a convenient way to reach me directly.
        </p>

        <a
          href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
        >
          <FaWhatsapp size={21} />
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
