import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    desc: 'WebSocket-powered chat with rooms, typing indicators, and message history.',
    stack: ['React', 'FastAPI', 'WebSocket'],
    link: '#',
    repo: '#',
  },
  {
    title: 'E-commerce Dashboard',
    desc: 'Analytics-driven admin panel with charts, orders, and product management.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'AI Image Enhancer',
    desc: 'Batch enhance and upscale images using AI with job queue and progress.',
    stack: ['Python', 'FastAPI', 'Worker'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-violet-600">See all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-50 to-slate-100" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-[11px] rounded-full bg-slate-100 px-2 py-1 text-slate-700">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
