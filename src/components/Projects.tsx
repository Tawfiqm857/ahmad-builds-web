import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const projects = [
    {
      title: "Joe Express Tech Hub",
      description: "The official website for Joe Express Tech Hub - a technology community platform featuring programs, events, and resources for tech enthusiasts. Built with modern web technologies and optimized for performance.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      githubUrl: "https://github.com/devByTawfiq",
      liveUrl: "https://www.joexpresstechhub.com",
      featured: true
    },
    {
      title: "Test Tutor Spark",
      description: "An interactive educational platform designed to help students prepare for tests and exams. Features personalized learning paths, practice questions, and progress tracking to optimize study sessions.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/devByTawfiq",
      liveUrl: "https://test-tutor-spark.vercel.app",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-diagonal opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of my work in frontend development and community-focused applications
              </p>
            </div>
          </ScrollAnimation>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation 
                key={project.title} 
                animation={index % 2 === 0 ? "fade-right" : "fade-left"} 
                delay={index * 150}
              >
                <Card 
                  className={`overflow-hidden group bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
                    project.featured ? 'ring-1 ring-primary/10' : ''
                  }`}
                >
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110"
                      >
                        <Github size={24} className="text-white" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink size={24} className="text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                      
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 bg-primary hover:bg-primary-light transition-all duration-300"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* View More */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://github.com/devByTawfiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github size={20} />
                  View More Projects on GitHub
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Projects;
