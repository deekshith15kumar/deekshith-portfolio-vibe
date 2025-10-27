import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BE in Computer Science Engineering",
      institution: "Malla Reddy University",
      period: "2022 – 2026",
      percentage: "84.4%",
    },
    {
      degree: "12th MPC",
      institution: "C V Raman Junior College",
      period: "2020 – 2022",
      percentage: "95.7%",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-xl hover-lift border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-xl font-semibold text-primary">
                      {edu.percentage}
                    </span>
                  </div>
                  <p className="text-lg text-secondary font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
