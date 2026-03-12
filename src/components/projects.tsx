import React, { useEffect, useState } from "react";

export default function BlurryText() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the blur-to-clear effect on mount
    const timeout = setTimeout(() => setLoaded(true), 100); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="max-w-4xl mx-auto p-6 text-center">
      <h1
        className={`text-5xl font-bold transition-all duration-1000 ${
          loaded ? "blur-0 opacity-100" : "blur-sm opacity-0"
        }`}
      >
        Welcome to My Projects
      </h1>
      <p
        className={`mt-4 text-lg transition-all duration-1500 ${
          loaded ? "blur-0 opacity-100" : "blur-sm opacity-0"
        }`}
      >
        Check out some of my latest work below
      </p>
    </section>
  );
}