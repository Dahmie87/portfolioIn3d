import type React from "react";
import AbstractShape from "./abstract";
// ─── Main Component ───────────────────────────────────
export default function ProtoType(): React.ReactElement {
  return (
    <div className="text-slate-900 min-h-screen">
      <div className="mx-4 my-2 bg-white rounded-[2rem] shadow-sm overflow-hidden min-h-[calc(100vh-1rem)] relative">
        {/* nav */}
        <nav className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white text-[13px] font-bold">
              D
            </div>
            <span className="font-bold text-[18px]">Dahmie</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[11px] font-medium text-green-600">
                Available
              </span>
            </div>
            <button className="text-sm font-semibold text-slate-800">
              Menu
            </button>
          </div>
        </nav>

        {/* hero */}
        <div className="flex flex-col md:flex-row md:items-center px-6 pt-8 pb-16 gap-6">
          {/* LEFT — text */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-10">
              <img
                alt="Designer Profile"
                className="w-14 h-14 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxe0Gwslm_w0XRk8uua1Wi1FRg9WhXU6LKwb0YoJ5EgkEbytu0Ft5ARnpw1WPr9VIDqLjZGHyjqlW85FLbVul9Mu3nKrwGbMn4etUzfL-Plt6GNiduOLjtD2oM87J6FvQ-W3szxPrfHHppEQ5yLdZmYB9SoYiAZphwphW6Q7_Gar9mK-PQbRHR75ErrB7H4eKhBNHRSDLr9z9oKdhWFr_lRn3n0oUmERyAml2_IVyCpJPmzb7HjoKFveh3Qc6CYLciRPJxkxi5mOyx"
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
            className="flex-shrink-0 relative mx-auto md:mx-0"
            style={{ width: 280, height: 280 }}
          >
            <AbstractShape />
          </div>
        </div>
      </div>
    </div>
  );
}
