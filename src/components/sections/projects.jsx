import { RevealOnScroll } from "../revealonscroll";

export const Projects = () => {
  return (
    <section
      id="projects"
     className="min-h-screen flex items-center justify-center py-20 bg-[url('/portfolio-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
        <RevealOnScroll>

    {/* First card - spans all 3 columns */}
    <div className="col-span-1 md:col-span-2 lg:col-span-3"></div>
    <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">🚧 Featured Projects</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">        
      

            {/* Project Card : 1 */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all bg-gray-900 shadow-md">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Emergency Store</h3>
                
                <p className="text-gray-300 mb-4">
                    A full-stack web application that facilitates the donation of medicines and medical equipment. Donors can contribute after verifying their identity through the DigiLocker API, ensuring authenticity. Needy users can browse available resources specific to their city and contact verified donors directly, creating a secure and localized donation ecosystem.
                </p>

                <div className="flex flex-wrap gap-2">
                    {["MongoDb - Atlas", "Express" , "React", "Node.js" , "Axios" ,"JWToken" , "Cloudinary" , "GenerativeAI" , "DigilockerAPI" , "NodeMailer"].map((tech, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 shadow-md transition"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                
                <div className="flex justify-between items-center">
                    <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >
                        (Click Here) : View Project →
                    </a>
                </div>
                
            </div>

        {/* Project Card : 2 */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all bg-gray-900 shadow-md">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Tailor Management System</h3>
                
                <p className="text-gray-300 mb-4">
                    A desktop application designed to streamline the management of customer records, worker assignments, and order tracking — reducing manual workload and enhancing productivity. The person in charge can monitor order status, send email updates to customers, and gain detailed insights into project demand, individual worker load, and overall operations.
                </p>

                <div className="flex flex-wrap gap-2">
                    {["Java", "JavaFX" , "IntelliJ", "Scene Builder" , "MySQLWorkbench" , "NodeMailer"].map((tech, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 shadow-md transition"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                
                <div className="flex justify-between items-center">
                    <a
                        href="https://github.com/Rohin700/taimansystem"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >
                        (Click Here) : View Project →
                    </a>
                </div>
                
            </div>

            {/* Project Card : 3 */}
                <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all bg-gray-900 shadow-md">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Wingss</h3>
                
                <p className="text-gray-300 mb-4">
                    A web application facilitating seamless interaction between tournament organizers and players. Organizers can easily create and manage tournaments, while players receive real-time updates, schedules, and announcements — streamlining communication and participation.
                </p>

                <div className="flex flex-wrap gap-2">
                    {["Bootstrap", "Node.js" , "Express", "Render", "Cloudinary" , "MySQL" , "Ajax" , "NodeMailer"].map((tech, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 shadow-md transition"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                
                <div className="flex justify-between items-center">
                    <a
                        href="https://wings-x5ep.onrender.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >
                        (Click here) : View Souce Code →
                    </a>
                </div>
                
            </div>
            
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
