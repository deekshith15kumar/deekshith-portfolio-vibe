import { ExternalLink, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      company: "Arithmatrix Technologies",
      role: "Full Stack Web Developer Intern",
      period: "Sep 2025 – Oct 2025",
      description:
        "Worked on Flask, Socket.IO, SQL, and frontend frameworks to develop real-time web applications and enhance user experiences.",
      certificateLink: "#",
    },
    {
      company: "Amazon Web Services",
      role: "AIML Virtual Intern",
      period: "Sep 2023 – Nov 2023",
      description:
        "Built ML models on AWS SageMaker, S3, and Rekognition. Gained hands-on experience with cloud-based machine learning workflows.",
      certificateLink: "#",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-xl hover-lift border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {exp.description}
              </p>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Experience Certificate
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
