import type React from "react";
import AbstractShape from "./abstract";
import heroProfile from "../assets/profile-1.jfif";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import BlurryText from "./projects";
import NavBar from "./navbar";
import About from "./about";
import SocialIcons from "./social";

export default function ProtoType(): React.ReactElement {
  return (
    <div className="text-slate-900 min-h-screen">
      <div className="md:mx-10 my-2 bg-white rounded-4xl shadow-sm overflow-hidden min-h-[calc(100vh-1rem)] relative">
        {/* nav */}
        <NavBar />
        {/* hero */}
        <div className="flex flex-col md:flex-row md:items-center px-6 md:pt-38 pt-28 pb-16 gap-6">
          {/* LEFT — text */}
          <div className="flex-1">
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

            <h1 className="text-[38px] font-normal leading-[1.1] tracking-tight mb-4 text-slate-900">
              Your Digital Vision,
              <br />
              Perfectly Realized.
            </h1>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-[95%]">
              From concept to launch, I create websites with stunning visuals,
              seamless user experiences, and expert development in Webflow and
              Framer.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold ">
                View Projects
              </button>
              {" "}
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg w-fit">

  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
  </span>

  <span>Available for work</span>

</div>
            </div>
            <SocialIcons/>
          </div>

          {/* RIGHT — abstract shape */}
          <div
            className="shrink-0 relative mx-auto md:mx-0 md:mt-10"
            style={{ width: 280, height: 280 }}
          >
            <AbstractShape />
          </div>
        </div>

        <About  />   
      </div>
    </div>
  );
}
