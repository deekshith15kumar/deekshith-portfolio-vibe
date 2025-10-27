import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      period: "Nov 2024 – Jan 2025",
      description:
        "Built a real-time multi-user chat system using Flask + Socket.IO + SQLite. Managed 100+ simultaneous users with less than 1 second delay.",
      technologies: ["Flask", "Socket.IO", "SQLite", "JavaScript"],
      github: "#",
    },
    {
      title: "Local Store E-Commerce Platform",
      period: "Mar 2025 – May 2025",
      description:
        "Flask-based e-commerce platform with product listings, shopping cart functionality, and comprehensive REST APIs for seamless user experience.",
      technologies: ["Flask", "Python", "REST API", "SQLite"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-xl hover-lift border border-border group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:text-primary/80"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project on GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
              </div>

              <p className="text-sm text-primary/80 mb-4">{project.period}</p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm border border-secondary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
