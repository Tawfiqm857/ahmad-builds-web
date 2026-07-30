import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Code, Briefcase, Building2, Users, Monitor, Server, Trophy, BookOpen } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Experience</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My journey in technology, software engineering, and community development
              </p>
            </div>
          </ScrollAnimation>

          {/* Current Role — STYAM */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="relative mb-8">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-light rounded-full hidden md:block" />
              <Card className="p-8 bg-card border border-border/50 hover:border-primary/30 shadow-soft hover:shadow-medium transition-all duration-500">
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        Current
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">Shareholder & Software Engineer</h3>
                    <h4 className="text-xl text-primary font-semibold mb-4">STYAM Integrated Services Limited</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <Calendar size={16} />
                        <span>2021 - Present</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Suite 4, Along Doma Fueling Station, Gwagwalada, Abuja</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Leading software development and IT systems at STYAM Integrated Services Limited. Responsible for 
                      building client-facing web platforms, internal business systems, and technical infrastructure that 
                      power the company's four service lines: software development, IT services, events planning, and retail.
                    </p>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: Code, title: "Product Development", desc: "Building platforms like STYAM Connect and the Akco EKano academic records system", color: "from-primary to-primary-light" },
                      { icon: Server, title: "IT Systems", desc: "Network setup, security, data migration, and ongoing infrastructure support", color: "from-primary-light to-primary" },
                      { icon: Users, title: "Team Leadership", desc: "Guiding technical decisions, code reviews, and project delivery", color: "from-primary to-primary-dark" },
                      { icon: Monitor, title: "Client Solutions", desc: "Translating business needs into reliable, scalable digital products", color: "from-primary-dark to-primary" },
                    ].map((item, index) => (
                      <ScrollAnimation key={item.title} animation="fade-up" delay={200 + index * 100}>
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} text-white mt-1 shadow-sm`}>
                            <item.icon size={16} />
                          </div>
                          <div>
                            <h5 className="font-semibold mb-1">{item.title}</h5>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </ScrollAnimation>

          {/* Previous Role — Joe Express */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <Card className="p-8 mb-8 bg-card/70 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border">
                      Previous
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Software Development Facilitator</h3>
                  <h4 className="text-lg text-primary font-semibold mb-3">Joe Express Tech Hub</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                      <Calendar size={16} />
                      <span>2023 - February 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Gwagwalada, Abuja</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Mentored aspiring developers, designed curriculum, and organized technical workshops and community events. 
                    Focused on React, JavaScript, HTML/CSS, and modern web development practices.
                  </p>
                </div>
              </div>
            </Card>
          </ScrollAnimation>

          {/* Achievements Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { value: "4+", title: "Years Building", desc: "Software and IT systems for businesses and institutions" },
              { value: "4", title: "Service Lines", desc: "Technology, IT support, events, and retail solutions" },
              { value: "100%", title: "Client Focus", desc: "End-to-end ownership from idea to delivery" },
            ].map((stat, index) => (
              <ScrollAnimation key={stat.title} animation="scale" delay={index * 150}>
                <Card className="p-6 text-center hover-lift bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <h4 className="font-semibold mb-1">{stat.title}</h4>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Education */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Education</h3>
              <Card className="p-6 hover-lift bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">Bachelor of Science in Sociology and Anthropology</h4>
                    <p className="text-primary font-medium">University of Abuja</p>
                    <p className="text-muted-foreground">
                      Foundation in human behavior, social systems, and cultural understanding
                    </p>
                  </div>
                  <div className="text-muted-foreground mt-4 md:mt-0">
                    <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-sm">
                      <Calendar size={16} />
                      <span>Graduated 2022</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Experience;
