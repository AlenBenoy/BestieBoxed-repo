import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-secondary/10">
      <div className="max-w-[100rem] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            </div>
            <span className="font-heading text-3xl text-foreground">BestieBoxed</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/store" 
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <MiniCart cartIconClassName="text-foreground hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
}
