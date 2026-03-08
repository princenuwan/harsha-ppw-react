import { Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary/10 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="font-serif text-lg font-semibold text-foreground">
          HCK<span className="text-primary">.</span>
        </p>
        <p className="text-muted-foreground text-sm mt-1">Nutrition & Dietetics Professional</p>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Email">
          <Mail size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
          <Instagram size={18} />
        </a>
      </div>

      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} Harsha Chathurani. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
