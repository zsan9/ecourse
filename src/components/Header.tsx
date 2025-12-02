import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Youtube, Instagram, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b-2 border-gray-800 bg-gray-950/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/" className="text-lg sm:text-2xl font-black text-white hover:text-gray-300 transition-colors tracking-tight">
            Stevie Emerson
          </Link>
          <div className="flex gap-1.5 sm:gap-2">
            <a href="https://www.youtube.com/@stevie_emerson" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="https://www.instagram.com/stevie_emerson/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="/#course" className="text-gray-400 hover:text-white transition-colors font-medium">Course</a>
          <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors font-medium">Pricing</Link>
          <a href="/#reviews" className="text-gray-400 hover:text-white transition-colors font-medium">Reviews</a>
          <a href="/#about" className="text-gray-400 hover:text-white transition-colors font-medium">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button size="lg" className="hidden md:flex bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-sm" asChild>
            <Link to="/pricing">Enroll Now</Link>
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-gray-800">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-gray-950 border-gray-800">
              <nav className="flex flex-col gap-6 mt-8">
                <a 
                  href="/#course" 
                  className="text-gray-400 hover:text-white transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Course
                </a>
                <Link 
                  to="/pricing" 
                  className="text-gray-400 hover:text-white transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <a 
                  href="/#reviews" 
                  className="text-gray-400 hover:text-white transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reviews
                </a>
                <a 
                  href="/#about" 
                  className="text-gray-400 hover:text-white transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-sm mt-4" 
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/pricing">Enroll Now</Link>
                </Button>
                <div className="flex gap-4 pt-4 border-t border-gray-800">
                  <a 
                    href="https://www.youtube.com/@stevie_emerson" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/stevie_emerson/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
