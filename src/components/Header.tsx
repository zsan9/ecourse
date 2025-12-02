import { Button } from "@/components/ui/button";
import { Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b-2 border-gray-800 bg-gray-950/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-2xl font-black text-white hover:text-gray-300 transition-colors tracking-tight">
            Stevie Emerson
          </Link>
          <div className="flex gap-2">
            <a href="https://www.youtube.com/@stevie_emerson" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/stevie_emerson/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="/#course" className="text-gray-400 hover:text-white transition-colors font-medium">Course</a>
          <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors font-medium">Pricing</Link>
          <a href="/#reviews" className="text-gray-400 hover:text-white transition-colors font-medium">Reviews</a>
          <a href="/#about" className="text-gray-400 hover:text-white transition-colors font-medium">About</a>
        </nav>
        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-sm" asChild>
          <Link to="/pricing">Enroll Now</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
