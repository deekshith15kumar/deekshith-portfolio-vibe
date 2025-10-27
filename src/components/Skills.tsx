import { Code2, Laptop, Database, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "Java", "JavaScript"],
    },
    {
      icon: Laptop,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Flask", "Django"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "SQLite"],
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "AWS", "AutoCAD"],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem Solving", "Analytical Thinking", "Communication", "Teamwork"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover-lift border border-border scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/5 text-foreground rounded-full text-sm border border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
