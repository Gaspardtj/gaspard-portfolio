
import { images } from "../../data/images";
import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-sky-100/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink
          to="/"
          className="block rounded-full ring-2 ring-white shadow-sm transition hover:ring-sky-500"
          aria-label="Gaspard Tumusiime Jimmy — home"
          onClick={() => { setIsOpen(false); window.scrollTo({ top: 0 }); }}
        >
          <img src={images.profile} alt="Gaspard Tumusiime Jimmy" className="h-11 w-11 rounded-full object-cover object-[center_25%]" />
        </NavLink>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-sky-700"
                  : "text-slate-700 hover:text-sky-700"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-5 md:hidden">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-sky-700"
                  : "text-slate-700 hover:text-sky-700"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
