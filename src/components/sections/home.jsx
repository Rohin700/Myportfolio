import { RevealOnScroll } from "../revealonscroll";
import { Github, Linkedin, FileDown, Rocket } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between items-center relative bg-cover bg-center py-10 px-4"
      style={{ backgroundImage: "url('/portfolio-bg.jpg')" }}
    >
      {/* Top Heading Section */}
      <div className="text-center z-10 px-4 flex flex-col items-center justify-center min-h-[60vh]">
  <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent animate-pulse">
    Hello!
  </h1>
  <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-400 to-orange-500 bg-clip-text text-transparent">
    I'm Rohin
  </h2>

  <p className="text-xl md:text-2xl font-semibold text-white text-center max-w-2xl mx-auto mt-4 bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent">
    An algorithm must be <span className="font-bold">seen</span> to be <span className="font-bold">believed</span>.
  </p>
</div>

      {/* Bottom Buttons Section */}
      <div className="flex flex-wrap justify-center gap-4 z-10 mb-10">
        {/* View Projects */}
        <a
          href="#projects"
          className="bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 py-4 px-6 rounded-xl font-medium shadow-md backdrop-blur-md transition-transform transform hover:-translate-y-1 text-center flex flex-col items-center"
        >
          <Rocket size={24} className="mb-1" />
          View Projects
        </a>

        {/* Download CV */}
        <a
          href="/RRresume.pdf"
          download
          className="bg-white/10 text-white hover:bg-white/20 py-4 px-6 rounded-xl font-medium shadow-md backdrop-blur-md transition-transform transform hover:-translate-y-1 text-center flex flex-col items-center"
        >
          <FileDown size={24} className="mb-1" />
          Download CV
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rohin36"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 py-4 px-6 rounded-xl font-medium shadow-md backdrop-blur-md transition-transform transform hover:-translate-y-1 text-center flex flex-col items-center"
        >
          <Linkedin size={24} className="mb-1" />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Rohin700"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800/20 text-gray-100 hover:bg-gray-800/30 py-4 px-6 rounded-xl font-medium shadow-md backdrop-blur-md transition-transform transform hover:-translate-y-1 text-center flex flex-col items-center"
        >
          <Github size={24} className="mb-1" />
          GitHub
        </a>
      </div>
    </section>
  );
};
