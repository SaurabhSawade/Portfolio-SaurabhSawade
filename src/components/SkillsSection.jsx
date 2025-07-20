import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  // { name: "Java", level: 85, category: "backend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Java (DSA & OOP)", level: 85, category: "backend" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "MySql", level: 85, category: "backend" },
  { name: "RESTful APIs", level: 85, category: "backend" },
  { name: "Authentication (JWT, OAuth)", level: 80, category: "backend" },
  { name: "Error Handling, Middleware", level: 90, category: "backend" },
  { name: "Multer", level: 80, category: "backend" },
  // { name: "Mongoose", level: 60, category: "backend" },
  // { name: "Mongoose", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 90, category: "tools" },
  { name: "Render", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "IntelliJ", level: 95, category: "tools" },
  { name: "Netlify", level: 95, category: "tools" },
  { name: "Vercel", level: 95, category: "tools" },
  { name: "MongoDB Atlas", level: 95, category: "tools" },
  { name: "MacOs", level: 95, category: "tools" },

  // Core Subjects
  {name:"Data Structures & Algorithms",level:90,category:"core Subjects"},
  {name:"Object-Oriented Programming",level:85,category:"core Subjects"},
  {name:"Database Management Systems",level:80,category:"core Subjects"},
  {name:"Computer Networks",level:83,category:"core Subjects"},
  {name:"Operating Systems",level:87,category:"core Subjects"},
  
];

const categories = ["all", "frontend", "backend", "tools","core Subjects"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
