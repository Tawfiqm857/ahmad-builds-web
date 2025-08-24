import { Card } from "@/components/ui/card";

const TechStack = () => {
  const technologies = [
    {
      name: "React",
      description: "Frontend Framework",
      icon: "⚛️",
      color: "text-blue-500"
    },
    {
      name: "JavaScript",
      description: "Programming Language",
      icon: "🟨",
      color: "text-yellow-500"
    },
    {
      name: "HTML5",
      description: "Markup Language",
      icon: "🔶",
      color: "text-orange-500"
    },
    {
      name: "CSS3",
      description: "Styling Language",
      icon: "🎨",
      color: "text-blue-600"
    },
    {
      name: "Git",
      description: "Version Control",
      icon: "📚",
      color: "text-red-500"
    },
    {
      name: "GitHub",
      description: "Code Repository",
      icon: "🐙",
      color: "text-gray-600"
    },
    {
      name: "Node.js",
      description: "Runtime Environment",
      icon: "🟢",
      color: "text-green-600"
    },
    {
      name: "Tailwind CSS",
      description: "CSS Framework",
      icon: "🎯",
      color: "text-cyan-500"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 section-tech">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text-secondary mb-4 reveal-text">Tech Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto reveal-text delay-1">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={tech.name} 
                className={`p-6 hover-lift group cursor-pointer reveal-text delay-${Math.min(index + 2, 6)} bg-gradient-to-br from-card to-secondary/20 border-0 shadow-colored hover:shadow-strong`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="text-4xl group-hover:scale-110 transition-bounce p-3 rounded-lg bg-gradient-to-br from-secondary to-accent shadow-medium">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold gradient-text mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Responsive Design",
                "User Experience (UX)",
                "Team Leadership",
                "Technical Mentoring",
                "Workshop Facilitation",
                "Community Building",
                "Agile Methodology",
                "Problem Solving"
              ].map((skill, skillIndex) => (
                <span
                  key={skill}
                  className={`px-4 py-2 text-white rounded-full text-sm font-medium hover:scale-105 transition-smooth shadow-soft hover:shadow-medium ${
                    skillIndex % 4 === 0 ? 'bg-gradient-to-r from-primary to-secondary' :
                    skillIndex % 4 === 1 ? 'bg-gradient-to-r from-secondary to-accent' :
                    skillIndex % 4 === 2 ? 'bg-gradient-to-r from-accent to-success' :
                    'bg-gradient-to-r from-success to-warning'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;