import { RevealOnScroll } from "../revealonscroll";

export const Skills = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "Angular" , "CSS3"  ,"Bootstrap" , "HTML5" , "JavaScript (ES6+)"];
  const backendSkills = ["Node.js", "Express", "C++" , "Java" , "Python" , "MongoDB" , "MySQL-Workbench" , "JavaScript" , "Spring" , "Mongoose" , "Ajax" , "Regex" , "JQuery" , "Axios", "DBMS", "Operating System" , "Cyber Security"];
  const tools = ["OpenAI API" , "DigiLocker API", "Google Gemini" , "JavaFX" , "Scene Builder" , "JWToken", "Nodemailer" , "IntelliJ" , "Postman" , "VS Code" , "MATLAB" , "AutoCAD", "EmailJS" ];
  const cloud = ["AWS" , "Docker" , "GitHub" , "Cloudinary" , "Render" , "MongoDB Atlas" , "MySQL"]

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 bg-[url('/portfolio-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
            My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Frontend Skills */}
            <div className="rounded-xl p-6 border border-white/30 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 shadow-md transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="rounded-xl p-6 border border-white/30 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 shadow-md transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-xl p-6 border border-white/30 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Tools </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 shadow-md transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div className="rounded-xl p-6 border border-white/30 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Cloud Services</h3>
              <div className="flex flex-wrap gap-2">
                {cloud.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 shadow-md transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
