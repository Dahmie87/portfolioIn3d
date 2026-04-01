import type React from "react";
import { Link } from "react-router-dom";

import AbstractShape from "../components/abstract";
import heroProfile from "../assets/download.jfif";
import NavBar from "../components/navbar";
import SocialIcons from "../components/social";
import { BlurReveal, BlurText } from "../components/blur";
import ConceptC from "../components/concept";
import SkillsExperienceSection from "../components/skills";


export default function HomePage(): React.ReactElement {
  return (
    <div className="text-slate-900 min-h-screen">
      <div className="md:mx-10 my-2 bg-white rounded-4xl shadow-sm overflow-visible md:overflow-visible min-h-[calc(100vh-1rem)] md:min-h-0 relative md:static">

        {/* hero section */}
        <div className="md:min-h-[calc(100vh-1rem)] md:overflow-hidden md:rounded-4xl md:flex md:flex-col">
          <NavBar />

          <div className="flex flex-col md:flex-row md:items-center px-6 md:pt-38 pt-28 pb-16 gap-6 md:flex-1">

            {/* LEFT — text */}
            <div className="flex-1">

              {/* Profile row */}
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

              {/* Headline — word by word */}
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

              {/* Subtext */}
              <BlurReveal delay={0.75}>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8 md:max-w-[70%]">
 I engineer software with AI at the core combining full-stack development with large language models to build applications that are not just functional, but intelligent.
                </p>
              </BlurReveal>

              {/* CTA buttons */}
              <BlurReveal delay={0.9}>
                <div className="flex items-center gap-3 flex-wrap">
                  <Link to={'/projects'} className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold">
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

              {/* Social icons */}
              <BlurReveal delay={1.05} className="">
                <SocialIcons />
              </BlurReveal>

            </div>

            {/* RIGHT — abstract shape */}
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

        {/* concept — normal flow on mobile, slides over hero on desktop */}

        <BlurReveal
        delay={1.5}
        className="md:relative md:z-5 md:bg-white md:min-h-screen px-8 md:pt-10">
          <ConceptC />
        </BlurReveal>

        <BlurReveal delay={1.7}>
          <SkillsExperienceSection />
        </BlurReveal>

      </div>
    </div>
  );
}