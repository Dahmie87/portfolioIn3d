import type React from "react";
import { Link } from "react-router-dom";

import AbstractShape from "../components/abstract";
import heroProfile from "../assets/download.jfif";
import bannerBackground from "../assets/O9FG5M0.jpg";
import NavBar from "../components/navbar";
import SocialIcons from "../components/social";
import { BlurReveal, BlurText } from "../components/blur";
import ConceptC from "../components/concept";
import SkillsExperienceSection from "../components/skills";
import { ContactOption1 } from "../components/contact";

export default function HomePage(): React.ReactElement {
  return (
    <div className="text-slate-900 min-h-screen">
      <div className="md:mx-10 my-2 bg-white rounded-4xl shadow-sm overflow-visible md:overflow-visible min-h-[calc(100vh-1rem)] md:min-h-0 relative md:static">
        <div className="md:min-h-[calc(100vh-1rem)] md:overflow-hidden md:rounded-4xl md:flex md:flex-col">
          <NavBar />

          <div className="flex flex-col md:flex-row md:items-center px-6 md:pt-38 pt-28 pb-16 gap-6 md:flex-1">
            <div className="flex-1">
              <BlurReveal delay={0.1}>
                <div className="flex items-center gap-4 mb-10">
                  <img
                    alt="Designer Profile"
                    className="w-14 h-14 rounded-full object-cover"
                    src={heroProfile}
                  />
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900 tracking-[1px]">
                      Omotayo Damilare
                    </h2>
                    <p className="text-xs text-slate-400 font-medium tracking-[3px]">
                      AI Engineer
                    </p>
                  </div>
                </div>
              </BlurReveal>

              <BlurText
                tag="h1"
                text="Building Intelligent Systems,"
                baseDelay={0.2}
                stagger={0.07}
                className="text-[38px] font-normal leading-[1.1] tracking-tight text-slate-900"
              />
              <BlurText
                tag="h1"
                text="Driven by LLMs."
                baseDelay={0.4}
                stagger={0.07}
                className="text-[38px] font-normal leading-[1.1] tracking-tight mb-4 text-slate-900"
              />

              <BlurReveal delay={0.75}>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8 md:max-w-[70%]">
                  I engineer software with AI at the core combining full-stack
                  development with large language models to build applications
                  that are not just functional, but intelligent.
                </p>
              </BlurReveal>

              <BlurReveal delay={0.9}>
                <div className="flex items-center gap-3 flex-wrap">
                  <Link
                    to="/projects"
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold"
                  >
                    View Projects
                  </Link>
                  <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg w-fit">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                    <span>Available for work</span>
                  </div>
                </div>
              </BlurReveal>

              <BlurReveal delay={1.05}>
                <SocialIcons />
              </BlurReveal>
            </div>

            <BlurReveal
              delay={0.5}
              style={{ flexShrink: 0, position: "relative", margin: "auto" }}
            >
              <div style={{ width: 280, height: 280 }}>
                <AbstractShape />
              </div>
            </BlurReveal>
          </div>
        </div>

        <BlurReveal
          delay={1.5}
          className="md:relative md:z-5 md:bg-white md:min-h-screen px-8 md:pt-10"
        >
          <ConceptC />
        </BlurReveal>

        <BlurReveal delay={1.7}>
          <SkillsExperienceSection />
        </BlurReveal>

        <section className="px-6 pb-8 md:pb-12 bg-white">
          <div
            className="max-w-5xl mx-auto rounded-3xl border border-slate-200 overflow-hidden mb-2 bg-cover bg-center"
            style={{
              backgroundImage:
                `linear-gradient(135deg, rgba(0,0,0,0.78), rgba(0,0,0,0.55)), url(${bannerBackground})`,
            }}
          >
            <div className="px-5 md:px-8 py-6 md:py-8">
              <p className="text-xs tracking-[0.16em] uppercase text-white/75 mb-2">
                Open To Collaborations
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Have a bold idea? Let&apos;s ship it fast.
              </h3>
             
            </div>
          </div>
          <ContactOption1 />
        </section>

        <footer className="bg-white border-t border-slate-200 px-6 py-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-slate-500">
            <p>
              Copyright {new Date().getFullYear()} Omotayo Damilare. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/projects" className="hover:text-slate-900 transition-colors">
                Projects
              </Link>
              <Link to="/blog" className="hover:text-slate-900 transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="hover:text-slate-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
