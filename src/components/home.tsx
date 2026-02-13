export default function ProtoType() {
  return (
    <div>
      <div className="text-slate-900 min-h-screen">
        <div className="mx-4 my-2 bg-white rounded-[2rem] shadow-sm overflow-hidden min-h-[calc(100vh-4rem)] relative">
          <nav className="flex items-center justify-between px-6 py-5"></nav>
          {/* <nav className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white text-[13px] font-bold">
                D
              </div>
              <span className="font-bold text-[18px] -tracking-normal">
                Dahmie
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-[11px] font-medium text-green-600">
                  Available
                </span>
              </div>
              <button className="text-sm font-semibold text-slate-800">
                Menu
              </button>
            </div>
          </nav> */}
          <div className="px-6 pt-20 flex items-center gap-4">
            <img
              alt="Designer Profile"
              className="w-14 h-14 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxe0Gwslm_w0XRk8uua1Wi1FRg9WhXU6LKwb0YoJ5EgkEbytu0Ft5ARnpw1WPr9VIDqLjZGHyjqlW85FLbVul9Mu3nKrwGbMn4etUzfL-Plt6GNiduOLjtD2oM87J6FvQ-W3szxPrfHHppEQ5yLdZmYB9SoYiAZphwphW6Q7_Gar9mK-PQbRHR75ErrB7H4eKhBNHRSDLr9z9oKdhWFr_lRn3n0oUmERyAml2_IVyCpJPmzb7HjoKFveh3Qc6CYLciRPJxkxi5mOyx"
            />
            <div>
              <h2 className="text-sm font-semibold text-slate-900  tracking-[1px]">
                Omotayo Damilare
              </h2>
              <p className="text-xs text-slate-400 font-medium tracking-[3px]">
                AI Engineer
              </p>
            </div>
          </div>
          <main className="px-6 pt-10 pb-12 relative">
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
            <div className="flex items-center gap-3">
              <button className="bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">
                See Resume
                {/* <File className="w-6" /> */}
              </button>
              <button className="bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-xl text-sm font-semibold">
                View my Projects
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
