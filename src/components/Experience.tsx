import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Code, BookOpen, Trophy } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Experience</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My journey in technology and community development
              </p>
            </div>
          </ScrollAnimation>

          {/* Main Experience */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <Card className="p-8 mb-8 hover-lift bg-card border border-border/50 hover:border-primary/30 shadow-soft hover:shadow-medium transition-all duration-500">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold gradient-text mb-2">Software Development Facilitator</h3>
                  <h4 className="text-xl text-primary font-semibold mb-4">Joe Express Tech Hub</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                      <Calendar size={16} />
                      <span>2023 - Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Suite 4, Along Doma Fueling Station, Gwagwalada, Abuja</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Leading software development education and community building initiatives at Joe Express Tech Hub. 
                    Responsible for designing curriculum, mentoring students, and fostering a collaborative learning environment 
                    that produces job-ready developers.
                  </p>

                  {/* Key Responsibilities */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: Users, title: "Student Mentoring", desc: "Providing one-on-one guidance and career counseling to aspiring developers", color: "from-primary to-primary-light" },
                      { icon: BookOpen, title: "Curriculum Development", desc: "Designing and updating course materials for modern web development", color: "from-primary-light to-primary" },
                      { icon: Code, title: "Technical Training", desc: "Teaching React, JavaScript, HTML/CSS, and modern development practices", color: "from-primary to-primary-dark" },
                      { icon: Trophy, title: "Community Building", desc: "Organizing workshops, hackathons, and networking events", color: "from-primary-dark to-primary" },
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
              </div>
            </Card>
          </ScrollAnimation>

          {/* Achievements Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { value: "50+", title: "Students Mentored", desc: "Guided students from beginner to job-ready level" },
              { value: "20+", title: "Workshops Organized", desc: "Technical workshops and community events" },
              { value: "100%", title: "Job Placement Rate", desc: "For students completing our programs" },
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
