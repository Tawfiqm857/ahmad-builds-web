import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ahmadProfessional from "@/assets/ahmad-professional.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/30 via-transparent to-primary/20" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-primary-foreground/80 reveal-text">
                <MapPin size={16} />
                <span className="text-sm">Abuja, Nigeria</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white/80 reveal-text delay-1">Hi, I'm{" "}</span>
                <span className="text-white gradient-text-accent reveal-text delay-2">Ahmad Tawfiq Muhammad</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium reveal-text delay-3">
                Frontend Developer & Tech Community Facilitator
              </p>

              {/* Description */}
              <p className="text-lg text-white/70 mb-8 leading-relaxed reveal-text delay-4">
                Building web solutions with a human-centered approach, combining technical expertise with a social science foundation to create meaningful digital experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 reveal-text delay-5">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="text-base bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-strong hover:shadow-colored hover:-translate-y-1"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-base border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 hover:shadow-strong hover:-translate-y-1"
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6 reveal-text delay-5">
                <a 
                  href="https://github.com/devByTawfiq/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-2 hover:scale-110 hover:shadow-strong"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/ahmadtawfiq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-2 hover:scale-110 hover:shadow-strong"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a 
                  href="mailto:tawfiqm857@gmail.com"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-2 hover:scale-110 hover:shadow-strong"
                >
                  <Mail size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-warning/30 rounded-2xl blur-3xl transform rotate-6 scale-110" />
                <div className="absolute inset-0 bg-gradient-to-l from-secondary/30 to-accent/30 rounded-2xl blur-2xl transform -rotate-3 scale-105" />
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-strong hover:shadow-colored transition-all duration-500 hover:scale-105 relative border-4 border-white/20 backdrop-blur-sm">
                  <img
                    src={ahmadProfessional}
                    alt="Ahmad Tawfiq Muhammad - Frontend Developer"
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;