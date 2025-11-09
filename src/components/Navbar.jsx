import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600" />
            <span className="font-semibold tracking-tight text-slate-900">Adrian Nanda</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="h-5 w-px bg-slate-200" />
            <a href="mailto:adrian@example.com" className="text-slate-600 hover:text-slate-900" aria-label="Email Adrian">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            <NavLink href="#about" onClick={close}>About</NavLink>
            <NavLink href="#projects" onClick={close}>Projects</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
            <div className="flex items-center gap-4 pt-2">
              <a href="mailto:adrian@example.com" className="text-slate-600 hover:text-slate-900" aria-label="Email Adrian">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
