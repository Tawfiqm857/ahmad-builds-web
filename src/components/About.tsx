import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Code } from "lucide-react";
import ahmadCasual from "@/assets/ahmad-casual.jpg";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import LinkedInBadge from "./LinkedInBadge";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A unique journey from Sociology to Software Development, bridging human understanding with technical innovation.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Main Bio */}
            <ScrollAnimation animation="fade-right" className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Originally from <strong className="text-foreground">Dutsin-Ma LGA, Katsina State</strong>, I bring a unique perspective to frontend development through my background in <strong className="text-foreground">Sociology and Anthropology</strong> from the University of Abuja. This foundation gives me deep insights into human behavior and user experience.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Currently based in <strong className="text-foreground">Abuja, Nigeria</strong>, I serve as a <strong className="text-foreground">Software Development Facilitator</strong> at Joe Express Tech Hub in Gwagwalada, where I mentor and train the next generation of developers. My passion lies in making technology accessible and impactful for communities across Nigeria.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I believe that the best technology solutions come from understanding people first. My social science background helps me create user-centered applications that truly serve their intended purpose.
              </p>
            </ScrollAnimation>

            {/* Profile Image & LinkedIn */}
            <ScrollAnimation animation="fade-left" className="space-y-6">
              <div className="relative group">
                <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-xl mx-auto border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                  <img
                    src={ahmadCasual}
                    alt="Ahmad Tawfiq Muhammad"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl -z-10 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              
              {/* LinkedIn Badge */}
              <LinkedInBadge />
            </ScrollAnimation>
          </div>

          {/* Highlights Grid */}
          <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: GraduationCap, title: "Education", desc: "BSc Sociology & Anthropology" },
                { icon: Code, title: "Focus", desc: "Frontend Development" },
                { icon: Users, title: "Community", desc: "Tech Facilitator" },
                { icon: Heart, title: "Mission", desc: "Accessible Tech" },
              ].map((item, index) => (
                <ScrollAnimation key={item.title} animation="scale" delay={index * 100}>
                  <Card className="p-6 hover-lift border border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm group">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        <item.icon size={24} />
                      </div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Quote */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="mt-16 text-center">
              <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic max-w-3xl mx-auto border-l-4 border-primary pl-6 text-left">
                "Technology should serve humanity, not the other way around. My goal is to bridge the gap between complex technical solutions and real human needs."
              </blockquote>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;