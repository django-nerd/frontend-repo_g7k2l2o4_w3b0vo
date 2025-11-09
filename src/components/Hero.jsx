import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-medium shadow-lg shadow-slate-900/10">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              Programmer Portfolio
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Hi, I’m <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Adrian Nanda</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              I build modern, scalable web applications with delightful user experiences.
              Explore my work, skills, and how I can help bring your ideas to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-95 transition"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-50 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="h-[50vh] lg:h-[65vh]" />
        </div>
      </div>
    </section>
  );
}
