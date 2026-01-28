import { Card } from "@/components/ui/card";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const TechStack = () => {
  const technologies = [
    { name: "React", description: "Frontend Framework", icon: "⚛️" },
    { name: "JavaScript", description: "Programming Language", icon: "🟨" },
    { name: "HTML5", description: "Markup Language", icon: "🔶" },
    { name: "CSS3", description: "Styling Language", icon: "🎨" },
    { name: "Git", description: "Version Control", icon: "📚" },
    { name: "GitHub", description: "Code Repository", icon: "🐙" },
    { name: "Node.js", description: "Runtime Environment", icon: "🟢" },
    { name: "Tailwind CSS", description: "CSS Framework", icon: "🎯" }
  ];

  const additionalSkills = [
    "Responsive Design",
    "User Experience (UX)",
    "Team Leadership",
    "Technical Mentoring",
    "Workshop Facilitation",
    "Community Building",
    "Agile Methodology",
    "Problem Solving"
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Tech Stack</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
          </ScrollAnimation>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <ScrollAnimation key={tech.name} animation="scale" delay={index * 75}>
                <Card className="p-6 hover-lift group cursor-pointer bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300 p-3 rounded-lg bg-primary/10">
                      {tech.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Additional Skills */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold gradient-text mb-6">Additional Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {additionalSkills.map((skill, index) => (
                  <ScrollAnimation key={skill} animation="scale" delay={300 + index * 50}>
                    <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
                      {skill}
                    </span>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
