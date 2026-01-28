import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Personal Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Ahmad Tawfiq Muhammad</h3>
              <p className="text-primary-foreground/80 mb-4">
                Frontend Developer & Tech Community Facilitator based in Abuja, Nigeria. 
                Passionate about creating meaningful digital experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ahmadtawfiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/ahmadtawfiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:ahmad.tawfiq@example.com"
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { label: "About", id: "about" },
                  { label: "Projects", id: "projects" },
                  { label: "Experience", id: "experience" },
                  { label: "Contact", id: "contact" }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Abuja, Nigeria</p>
                <a
                  href="mailto:tawfiqm857@gmail.com"
                  className="block hover:text-primary-foreground transition-smooth"
                >
                  tawfiqm857@gmail.com
                </a>
                <a
                  href="https://wa.me/2349066514138"
                  className="block hover:text-primary-foreground transition-smooth"
                >
                  +234 906 651 4138
                </a>
                <p className="text-sm">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <span>© {currentYear} Ahmad Tawfiq Muhammad. Made with</span>
                <Heart size={16} className="text-red-400" />
                <span>in Nigeria</span>
              </div>

              <button
                onClick={scrollToTop}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;