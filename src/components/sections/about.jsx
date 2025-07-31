import { RevealOnScroll } from "../revealonscroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "Svelte"];
  const backendSkills = ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-[url('/portfolio-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
        <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-orange-200 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="rounded-xl p-8 border border-white/30 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            <strong>Passionate developer with hands-on experience in building both web and desktop applications using modern development tools and frameworks. Continuously learning and exploring scalable, user-focused solutions.</strong>
          </p>

          {/* Education Section */}
          <div className="p-6 mt-8 rounded-xl border border-white/30 hover:-translate-y-1 transition-all text-left">
            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>B.Tech in Electrical Engineering</strong> - Chitkara University (2022-Present)
              </li>
              <li>
                CGPA : 7.2
              </li>
              <li>
                Relevant Coursework: Data Structures and Algorithms, Full-Stack Web Development, Cloud Computing , Operating System , Database Management System
              </li>
            </ul>
          </div>
          <div className="p-6 mt-8 rounded-xl border border-white/30 hover:-translate-y-1 transition-all text-left">
            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Higher Secondary Education</strong> - Sacred Heat Convent School (2020-2022)
              </li>
              <li>
                CGPA : 8.0
              </li>
            </ul>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
