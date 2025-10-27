import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Programming in Java",
      issuer: "IIT Madras",
      link: "https://drive.google.com/file/d/11MuFyl_9_PvUGtVuFyAUf4uCiy8YaB76/view?usp=sharing",
    },
    {
      title: "Java Full Stack",
      issuer: "EduSkills",
      link: "https://drive.google.com/file/d/1fkZxyICVLQEOQ8Kie_tjfMgCCr0tEwQJ/view?usp=sharing",
    },
    {
      title: "Scalable Machine Learning with Apache Spark",
      issuer: "IBM",
      link: "https://drive.google.com/file/d/1QnzeAhtO_JkVnchX7yEo4_BSsSkf0w_F/view?usp=sharing",
    },
    {
      title: "Winner – Hackathon 2023",
      issuer: "Malla Reddy University",
      link: "https://drive.google.com/file/d/1ms__jrX-bJIGN2UK_01GUYbm9cNUklSk/view?usp=sharing",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-xl hover-lift border border-border group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{cert.issuer}</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
