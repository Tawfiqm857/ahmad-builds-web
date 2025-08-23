import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
      className="min-h-screen flex items-center justify-center hero-section relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
            <MapPin size={16} />
            <span className="text-sm">Abuja, Nigeria</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Ahmad Tawfiq Muhammad</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Frontend Developer & Tech Community Facilitator
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Building web solutions with a human-centered approach, combining technical expertise with a social science foundation to create meaningful digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="text-base"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-base"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/ahmadtawfiq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-smooth shadow-soft hover:shadow-medium hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/ahmadtawfiq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-smooth shadow-soft hover:shadow-medium hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:ahmad@example.com"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-smooth shadow-soft hover:shadow-medium hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;