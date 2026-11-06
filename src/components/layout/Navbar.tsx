
import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink
          to="/"
          className="text-xl font-bold text-white"
        >
          Gaspard<span className="text-cyan-400">.</span>
        </NavLink>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
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
        <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
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
