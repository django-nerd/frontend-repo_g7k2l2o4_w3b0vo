import { Code2, Cpu, Layout, Server } from 'lucide-react';

const skills = [
  { icon: <Code2 className="h-5 w-5" />, label: 'JavaScript / TypeScript' },
  { icon: <Layout className="h-5 w-5" />, label: 'React / Next.js' },
  { icon: <Server className="h-5 w-5" />, label: 'Node.js / FastAPI' },
  { icon: <Cpu className="h-5 w-5" />, label: 'System Design' },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Adrian</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I’m a software engineer focused on crafting clean, performant applications.
              I love bringing ideas to life through code, solving complex problems, and
              collaborating with teams to create intuitive products.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((s) => (
                <div key={s.label} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
                  <div className="text-blue-600">{s.icon}</div>
                  <span className="text-sm font-medium text-slate-700">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 flex items-center justify-center text-slate-600">
                <span className="text-sm">Clean code, scalable systems, delightful UX</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Tools I enjoy: React, TypeScript, Tailwind, FastAPI, PostgreSQL, MongoDB, Docker, and cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
