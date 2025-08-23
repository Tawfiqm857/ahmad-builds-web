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
      className="min-h-screen flex items-center justify-center bg-hero-bg text-primary-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-accent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-primary-foreground/80">
                <MapPin size={16} />
                <span className="text-sm">Abuja, Nigeria</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-white">Ahmad Tawfiq Muhammad</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
                Frontend Developer & Tech Community Facilitator
              </p>

              {/* Description */}
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Building web solutions with a human-centered approach, combining technical expertise with a social science foundation to create meaningful digital experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="text-base bg-white text-primary hover:bg-white/90"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-base border-white/30 text-white hover:bg-white/10"
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6">
                <a 
                  href="https://github.com/ahmadtawfiq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth backdrop-blur-sm hover:-translate-y-1"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/ahmadtawfiq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth backdrop-blur-sm hover:-translate-y-1"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a 
                  href="mailto:ahmad@example.com"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth backdrop-blur-sm hover:-translate-y-1"
                >
                  <Mail size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={ahmadProfessional}
                    alt="Ahmad Tawfiq Muhammad - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;