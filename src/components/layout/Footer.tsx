import { profile } from "../../data/profile";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";

import { Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: profile.github,
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gaspard-tumusiime",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      url: profile.instagram,
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      url: profile.facebook,
      icon: FaFacebook,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/254701311114",
      icon: FaWhatsapp,
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-sky-100 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} {profile.name}.
          All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">

          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="text-xl text-slate-600 transition-colors duration-300 hover:text-sky-700"
            >
              <Icon />
            </a>
          ))}

          <a
            href="mailto:gaspard.tumus@gmail.com"
            aria-label="Email"
            title="Email"
            className="text-xl text-slate-600 transition-colors duration-300 hover:text-sky-700"
          >
            <Mail size={20} />
          </a>

        </div>
      </div>
    </footer>
  );
}
