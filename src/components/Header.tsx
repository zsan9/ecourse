import { Button } from "@/components/ui/button";
import { Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Stevie Emerson
          </Link>
          <div className="flex gap-2">
            <a href="https://www.youtube.com/@stevie_emerson" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/stevie_emerson/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="/#course" className="text-muted-foreground hover:text-foreground transition-colors">Course</a>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          <a href="/#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
        </nav>
        <Button size="lg" className="rounded-full" asChild>
          <Link to="/pricing">Enroll Now</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
