import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tawfiqm857@gmail.com",
      href: "mailto:tawfiqm857@gmail.com"
    },
    {
      icon: Phone,
      label: "WhatsApp & Calls",
      value: "+234 906 651 4138",
      href: "https://wa.me/2349066514138"
    },
    {
      icon: Phone,
      label: "Secondary Line",
      value: "+234 907 093 1418",
      href: "tel:+2349070931418"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abuja, Nigeria",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/devByTawfiq/",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ahmadtawfiq",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:tawfiqm857@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your project, collaborate on something amazing, or explore opportunities to work together.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation animation="fade-right">
              <Card className="p-8 hover:shadow-lg transition-all duration-300 bg-card border border-border/50 hover:border-primary/30">
                <h3 className="text-2xl font-semibold gradient-text mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how we can work together..."
                    rows={6}
                    required
                    className="transition-all duration-300 focus:scale-105 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-light shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
              </Card>
            </ScrollAnimation>

            {/* Contact Information */}
            <ScrollAnimation animation="fade-left">
              <div className="space-y-8">
                {/* Contact Details */}
                <div>
                  <h3 className="text-2xl font-semibold gradient-text mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <ScrollAnimation key={info.label} animation="fade-up" delay={index * 100}>
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all duration-300">
                          <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                            <info.icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-medium">{info.label}</h4>
                            {info.href !== "#" ? (
                              <a
                                href={info.href}
                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-semibold gradient-text mb-6">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-primary text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-2 hover:scale-110"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <Card className="p-6 bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300 border-0">
                  <h4 className="text-lg font-semibold mb-2">Open to Opportunities</h4>
                  <p className="mb-4 opacity-90">
                    I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>
                  <a href="/Ahmad_Tawfiq_Muhammad_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                    <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90 transition-all duration-300">
                      Download Resume
                    </Button>
                  </a>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;