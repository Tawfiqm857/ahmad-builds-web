import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A unique journey from Sociology to Software Development, bridging human understanding with technical innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Originally from <strong>Dutsin-Ma LGA, Katsina State</strong>, I bring a unique perspective to frontend development through my background in <strong>Sociology and Anthropology</strong> from the University of Abuja. This foundation gives me deep insights into human behavior and user experience.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Currently based in <strong>Abuja, Nigeria</strong>, I serve as a <strong>Software Development Facilitator</strong> at Joe Express Tech Hub in Gwagwalada, where I mentor and train the next generation of developers. My passion lies in making technology accessible and impactful for communities across Nigeria.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I believe that the best technology solutions come from understanding people first. My social science background helps me create user-centered applications that truly serve their intended purpose.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 hover-lift">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-accent text-accent-foreground">
                    <GraduationCap size={24} />
                  </div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">BSc Sociology & Anthropology</p>
                </div>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-accent text-accent-foreground">
                    <Code size={24} />
                  </div>
                  <h4 className="font-semibold">Focus</h4>
                  <p className="text-sm text-muted-foreground">Frontend Development</p>
                </div>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-accent text-accent-foreground">
                    <Users size={24} />
                  </div>
                  <h4 className="font-semibold">Community</h4>
                  <p className="text-sm text-muted-foreground">Tech Facilitator</p>
                </div>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-accent text-accent-foreground">
                    <Heart size={24} />
                  </div>
                  <h4 className="font-semibold">Mission</h4>
                  <p className="text-sm text-muted-foreground">Accessible Tech</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Quote or Philosophy */}
          <div className="mt-16 text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic max-w-3xl mx-auto">
              "Technology should serve humanity, not the other way around. My goal is to bridge the gap between complex technical solutions and real human needs."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;