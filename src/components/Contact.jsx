import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-t from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Let’s work together</h2>
            <p className="mt-4 text-slate-600">Have a project in mind or just want to say hi? I’m open to freelance, full-time roles, and collaborations.</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <a href="mailto:adrian@example.com" className="text-sm font-medium text-slate-700 hover:text-slate-900">
                adrian@example.com
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell me about your project..." />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white px-5 py-2.5 text-sm font-semibold shadow hover:opacity-95 transition"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Adrian Nanda. All rights reserved.</p>
      </div>
    </section>
  );
}
