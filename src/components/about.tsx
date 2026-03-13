export default function About() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="font-normal text-4xl md:text-[42px] ">
          About Me
        </div>

        {/* Right Column */}
        <div className="space-y-4 text-slate-500">
          <p>
            I’m a full-stack developer with a strong focus on backend engineering. I’m currently an undergraduate student at Lagos State University (LASU), majoring in Computer Science.
          </p>
          <p>
            Over the past 3+ years, I’ve immersed myself in the world of software development, starting from basic programming concepts and gradually growing into complex system architecture and full-stack application design.
          </p>
          <p>
            My primary backend tools are Python, Django, and FastAPI, while my frontend experience revolves around React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}