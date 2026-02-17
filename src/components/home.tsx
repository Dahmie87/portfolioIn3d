import type React from "react";
import AbstractShape from "./abstract";
import heroProfile from "../assets/profile-1.jfif";

function NavBar() {
  return (
    <>
      <nav className="mx-auto w-xl rounded-2xl py-8 bg-gray-100/40 border border-gray-400"></nav>
    </>
  );
}

export default function ProtoType(): React.ReactElement {
  return (
    <div className="text-slate-900 min-h-screen">
      <div className="mx-4 my-2 bg-white rounded-4xl shadow-sm overflow-hidden min-h-[calc(100vh-1rem)] relative">
        {/* nav */}
        <NavBar />
        {/* hero */}
        <div className="flex flex-col md:flex-row md:items-center px-6 pt-8 pb-16 gap-6">
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
              <button className="bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold">
                See Resume
              </button>
              <button className="bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-xl text-sm font-semibold">
                View my Projects
              </button>
            </div>
          </div>

          {/* RIGHT — abstract shape */}
          <div
            className="shrink-0 relative mx-auto md:mx-0"
            style={{ width: 280, height: 280 }}
          >
            <AbstractShape />
          </div>
        </div>
      </div>
    </div>
  );
}
