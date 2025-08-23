import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Code, BookOpen, Trophy } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in technology and community development
            </p>
          </div>

          {/* Main Experience */}
          <Card className="p-8 mb-8 hover-lift">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Experience Header */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Software Development Facilitator</h3>
                <h4 className="text-xl text-accent font-semibold mb-4">Joe Express Tech Hub</h4>
                
                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
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
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent text-accent-foreground mt-1">
                      <Users size={16} />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Student Mentoring</h5>
                      <p className="text-sm text-muted-foreground">
                        Providing one-on-one guidance and career counseling to aspiring developers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent text-accent-foreground mt-1">
                      <BookOpen size={16} />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Curriculum Development</h5>
                      <p className="text-sm text-muted-foreground">
                        Designing and updating course materials for modern web development
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent text-accent-foreground mt-1">
                      <Code size={16} />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Technical Training</h5>
                      <p className="text-sm text-muted-foreground">
                        Teaching React, JavaScript, HTML/CSS, and modern development practices
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent text-accent-foreground mt-1">
                      <Trophy size={16} />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Community Building</h5>
                      <p className="text-sm text-muted-foreground">
                        Organizing workshops, hackathons, and networking events
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <h4 className="font-semibold mb-1">Students Mentored</h4>
              <p className="text-sm text-muted-foreground">
                Guided students from beginner to job-ready level
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-accent mb-2">20+</div>
              <h4 className="font-semibold mb-1">Workshops Organized</h4>
              <p className="text-sm text-muted-foreground">
                Technical workshops and community events
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <h4 className="font-semibold mb-1">Job Placement Rate</h4>
              <p className="text-sm text-muted-foreground">
                For students completing our programs
              </p>
            </Card>
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
            <Card className="p-6 hover-lift">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Bachelor of Science in Sociology and Anthropology</h4>
                  <p className="text-accent font-medium">University of Abuja</p>
                  <p className="text-muted-foreground">
                    Foundation in human behavior, social systems, and cultural understanding
                  </p>
                </div>
                <div className="text-muted-foreground mt-4 md:mt-0">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Graduated 2022</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;