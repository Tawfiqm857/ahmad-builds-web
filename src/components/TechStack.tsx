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
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={tech.name} 
                className="p-6 hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="text-4xl group-hover:scale-110 transition-bounce">
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
            <h3 className="text-xl font-semibold mb-6">Additional Skills</h3>
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
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-smooth"
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