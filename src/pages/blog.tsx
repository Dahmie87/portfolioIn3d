import React from "react";

const articles = [
  {
    date: "Feb 28, 2024",
    tag: "TYPESCRIPT",
    title: "Type-Safe Navigation with Advanced Generics",
    description:
      "Exploring the boundaries of TypeScript's type system to create a zero-runtime-error navigation architecture for enterprise applications.",
    readTime: "6 min read",
  },
  {
    date: "Feb 15, 2024",
    tag: "REACT",
    title: 'The Performance Cost of "Clean Code"',
    description:
      "When over-abstraction becomes a liability. A deep dive into React re-renders and the hidden costs of generic component patterns.",
    readTime: "12 min read",
  },
  {
    date: "Jan 22, 2024",
    tag: "DESIGN SYSTEMS",
    title: "Beyond Light and Dark: Semantic Tonal Palettes",
    description:
      "Moving past hex codes to semantic color tokens that adapt to accessibility requirements and brand evolution automatically.",
    readTime: "8 min read",
  },
  {
    date: "Jan 05, 2024",
    tag: "NEXT.JS",
    title: "Server Actions: The End of the API Layer?",
    description:
      "Exploring how Next.js 14 and React Server Components are redefining the boundaries between client and server logic.",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="font-body bg-[#faf8ff] text-[#131b2e] min-h-screen antialiased">

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Inter:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .font-headline { font-family: 'Manrope', sans-serif; }
        .font-body, body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      {/* TopAppBar */}
      <nav className="bg-white/70 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-600">architecture</span>
            <span className="text-xl font-extrabold tracking-tighter text-slate-900 font-headline">
              Architect
            </span>
          </div>
          <div className="hidden md:flex items-center font-headline tracking-tight font-medium">
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors mx-4">
              Home
            </a>
            <a
              href="#"
              className="text-indigo-600 border-b-2 border-indigo-600/50 pb-1 mx-4"
            >
              Blog
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors mx-4">
              About
            </a>
          </div>
          <div className="md:hidden">
            <span className="material-symbols-outlined text-[#131b2e]">menu</span>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="pt-24 pb-20">

        {/* Featured Post */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="group relative overflow-hidden rounded-xl bg-[#f2f3ff] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1AI5EnHGB-MJtDejjvzPGbWSPrsHlKJ0Ldg-QTPGhyMVej9iDCPdUU2hv3whb_TeA_cuPzQ-5SkU8o_qCrseZwjMcHs2-Oj-oihfVgsnV80bBd3HWzC3Z2-gWW8D-gqxq0pqStyGQgvPJ42MHS55aHlxMaTTk193E_Gfj_7ETb7ydJos1tGlOLFjJkhErPUdOtHwPoa46ZA8ir9cPnys7-whzVsM_ieb8f5iW2gf32JlynPNB6LVl3Gtd_9kcnjDFb_6-CVR5GrW_"
                  alt="Featured Post Illustration"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3525cd] bg-[#e2dfff]/20 px-3 py-1 rounded-full font-headline">
                    Featured
                  </span>
                  <span className="text-xs font-medium text-[#777587]">March 14, 2024</span>
                </div>
                <h1 className="font-headline text-4xl lg:text-6xl font-extrabold tracking-tight text-[#131b2e] leading-[1.1] mb-6">
                  Designing Atomic Systems for Scale
                </h1>
                <p className="text-lg text-[#464555] leading-relaxed mb-8 max-w-xl">
                  How we architected a multi-brand design system using CSS variables, Tailwind,
                  and a strict adherence to atomic principles.
                </p>
                <div className="flex items-center gap-6">
                  <a href="#" className="inline-flex items-center gap-2 group/btn">
                    <span className="font-headline font-bold text-[#3525cd] tracking-tight">
                      Read Analysis
                    </span>
                    <span className="material-symbols-outlined text-[#3525cd] group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Feed */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-headline text-2xl font-bold text-[#131b2e] flex items-center gap-3">
              Recent Articles
              <span className="h-[1px] flex-grow bg-[#c7c4d8]/30" />
            </h2>
          </div>

          <div className="space-y-16">
            {articles.map((article, i) => (
              <article
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group"
              >
                <div className="md:col-span-3 pt-2">
                  <span className="text-sm uppercase tracking-widest text-[#777587] block mb-1 font-label">
                    {article.date}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-[10px] font-bold text-[#454386] bg-[#b6b4ff] px-2 py-0.5 rounded">
                      {article.tag}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-headline text-2xl font-bold text-[#131b2e] mb-4 group-hover:text-[#3525cd] transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-[#464555] leading-relaxed mb-6 max-w-2xl">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-[#131b2e]">{article.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-[#c7c4d8]" />
                    <a
                      href="#"
                      className="text-xs font-bold text-[#3525cd] uppercase tracking-wider hover:underline"
                    >
                      Full Article
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-24 flex justify-center">
            <button className="px-8 py-3 rounded-lg bg-[#e2e7ff] hover:bg-[#dae2fd] transition-colors font-headline font-bold text-[#3525cd] tracking-tight">
              Load More Articles
            </button>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-32 bg-[#f2f3ff] py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight text-[#131b2e] mb-4">
                The Architect's Log
              </h2>
              <p className="text-[#464555] leading-relaxed text-lg max-w-md">
                Join 2,400+ developers receiving monthly deep-dives on systems architecture,
                front-end engineering, and digital craft.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="flex-grow bg-white border-none px-6 py-4 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none font-body text-[#131b2e]"
                />
                <button className="bg-[#3525cd] text-white px-8 py-4 rounded-lg font-headline font-bold transition-all hover:bg-[#3323cc] active:scale-95">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-[#777587] mt-4">
                Zero spam. Pure technical architecture. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 w-full py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-sm leading-relaxed">
          <div className="text-slate-500">
            © 2024 Digital Architect. Editorial Framework for Developers.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
              Github
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
              RSS
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}