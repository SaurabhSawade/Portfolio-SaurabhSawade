import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SauChat-Real Time Chat App",
    description: "A real-time messaging platform built with Socket.IO and MERN stack, featuring group chats, typing indicators, file sharing, and JWT-based authentication.",
    image: "/projects/project1.png",
    tags: ["Mern Stack", "Socket.IO"],
    demoUrl: "https://sau-chat.vercel.app/",
    githubUrl: "https://github.com/SaurabhSawade/SauChat.git",
  },
  {
    id: 2,
    title: "AI-Powered-Code-Reviewer",
    description:
      "A smart code review tool powered by the Gemini API that analyzes uploaded code files, provides linting suggestions, highlights bugs, and suggests best practices—all through a clean React UI.",
    image: "/projects/project2.png",
    tags: ["Mern Stack", "Gemini.ai"],
    demoUrl: "https://ai-powered-code-reviewer-jet.vercel.app",
    githubUrl: "https://github.com/SaurabhSawade/AI-Powered-Code-Reviewer.git",
  },
  {
    id: 3,
    title: "Metro Connect",
    description:
      "A Java-based metro route planner that calculates the shortest path between stations using Dijkstra’s algorithm, with interchange handling and optimized user input validation.",
    image: "/projects/project3.png",
    tags: ["Java","Dijkstra's algorithm","Heap"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Chess Game",
    description:
      "A fully functional chess game built with React and drag-and-drop support (react-dnd), featuring real-time move validation, checkmate detection, castling, en passant, and pawn promotion.",
    image: "/projects/project4.png",
    tags: ["React", "tailwind.css"],
    demoUrl: "https://chess-game-react-rho.vercel.app",
    githubUrl: "https://github.com/SaurabhSawade/ChessGame-React.git",
  },
  {
    id: 5,
    title: "LaundryEase – Laundry Service Web App",
    description:
      "A responsive single-page app built with HTML, CSS, and JavaScript. It lets users request laundry pickup via a form powered by EmailJS—no backend needed. Mobile-friendly with a clean and intuitive design.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://laundry-service-vzi5.vercel.app/",
    githubUrl: "https://github.com/SaurabhSawade/Laundry-Service.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/saurabhsawade"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
