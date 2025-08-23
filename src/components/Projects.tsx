import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Community Learning Platform",
      description: "A responsive web platform designed for the Joe Express Tech Hub community, featuring course management, student progress tracking, and interactive learning modules. Built with user-centered design principles.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      githubUrl: "https://github.com/ahmadtawfiq/community-platform",
      liveUrl: "https://community-platform-demo.netlify.app",
      featured: true
    },
    {
      title: "Nigerian Developer Portfolio",
      description: "A responsive portfolio template specifically designed for Nigerian developers, featuring cultural elements and optimized for local internet conditions. Includes multiple themes and easy customization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/ahmadtawfiq/ng-dev-portfolio",
      liveUrl: "https://ng-dev-portfolio.netlify.app",
      featured: true
    },
    {
      title: "Workshop Management System",
      description: "A comprehensive system for managing tech workshops and training sessions. Features include participant registration, session scheduling, resource sharing, and progress tracking for facilitators.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Node.js", "CSS3", "Git"],
      githubUrl: "https://github.com/ahmadtawfiq/workshop-system",
      liveUrl: "https://workshop-system-demo.netlify.app",
      featured: false
    },
    {
      title: "Local Business Directory",
      description: "A directory web application for local businesses in Abuja, designed with accessibility and mobile-first approach. Helps connect community members with local services and entrepreneurs.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      githubUrl: "https://github.com/ahmadtawfiq/business-directory",
      liveUrl: "https://abuja-business-directory.netlify.app",
      featured: false
    },
    {
      title: "Student Progress Tracker",
      description: "An intuitive dashboard for tracking student progress in coding bootcamps. Features milestone tracking, skill assessments, and visual progress reports that help both students and instructors.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "JavaScript", "CSS3", "Charts.js"],
      githubUrl: "https://github.com/ahmadtawfiq/progress-tracker",
      liveUrl: "https://student-progress-tracker.netlify.app",
      featured: false
    },
    {
      title: "Code Mentorship Portal",
      description: "A platform connecting experienced developers with beginners for mentorship. Includes scheduling, resource sharing, and progress tracking features designed to strengthen the tech community.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Node.js", "CSS3", "Real-time Chat"],
      githubUrl: "https://github.com/ahmadtawfiq/mentorship-portal",
      liveUrl: "https://code-mentorship-portal.netlify.app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in frontend development and community-focused applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`overflow-hidden hover-lift group ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
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
                      className="flex-1"
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
                      variant="cta"
                      size="sm"
                      asChild
                      className="flex-1"
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
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/ahmadtawfiq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github size={20} />
                View More Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;