import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 K Deekshith Kumar | Built with 
            <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" /> 
            and Passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
