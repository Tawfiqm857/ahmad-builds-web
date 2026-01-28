import { Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LinkedInBadge = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-card to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* LinkedIn Icon */}
        <div className="p-4 rounded-full bg-[#0A66C2] text-white shadow-lg">
          <Linkedin size={32} />
        </div>
        
        {/* Profile Info */}
        <div>
          <h4 className="text-lg font-semibold mb-1">Ahmad Tawfiq Muhammad</h4>
          <p className="text-sm text-muted-foreground mb-2">
            Frontend Developer | Tech Community Facilitator
          </p>
          <p className="text-xs text-muted-foreground">
            Abuja, Nigeria
          </p>
        </div>
        
        {/* Connect Button */}
        <Button
          asChild
          className="w-full bg-[#0A66C2] hover:bg-[#004182] text-white transition-all duration-300 hover:scale-105"
        >
          <a
            href="https://www.linkedin.com/in/ahmadtawfiq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Linkedin size={18} />
            View LinkedIn Profile
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default LinkedInBadge;
