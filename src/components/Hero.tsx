import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import ahmadOutdoor from "@/assets/ahmad-outdoor.jpg";

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
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background dark:from-background dark:via-primary/20 dark:to-background" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-muted-foreground reveal-text">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm font-medium">Abuja, Nigeria</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground/80 reveal-text delay-1">Hi, I'm{" "}</span>
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent reveal-text delay-2">
                  Ahmad Tawfiq Muhammad
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-medium reveal-text delay-3">
                Frontend Developer & Tech Community Facilitator
              </p>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed reveal-text delay-4 max-w-xl">
                Building web solutions with a human-centered approach, combining technical expertise with a social science foundation to create meaningful digital experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 reveal-text delay-5">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="text-base bg-primary text-primary-foreground hover:bg-primary-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-base border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 reveal-text delay-5">
                <a 
                  href="https://github.com/devByTawfiq/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-lg group"
                >
                  <Github size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                </a>
                <a 
                  href="https://linkedin.com/in/ahmadtawfiq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-lg group"
                >
                  <Linkedin size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                </a>
                <a 
                  href="mailto:tawfiqm857@gmail.com"
                  className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-lg group"
                >
                  <Mail size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                </a>
              </div>
            </div>

            {/* Profile Image - Full Size */}
            <div className="order-1 lg:order-2 flex justify-center scale-in">
              <div className="relative group">
                {/* Glow effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-l from-primary/10 to-primary-light/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                
                {/* Image container - auto sizing */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-[1.02]">
                  <img
                    src={ahmadOutdoor}
                    alt="Ahmad Tawfiq Muhammad - Frontend Developer"
                    className="w-auto h-auto max-w-full max-h-[500px] object-contain transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full bg-card/50 border border-border/50 hover:bg-card transition-all duration-300"
        >
          <ChevronDown size={24} className="text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
