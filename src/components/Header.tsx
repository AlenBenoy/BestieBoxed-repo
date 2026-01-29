import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';
import { Image } from '@/components/ui/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-secondary/10">
      <div className="max-w-[100rem] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-accent-mint to-accent-pink group-hover:shadow-lg transition-shadow">
              <Image 
                src="https://static.wixstatic.com/media/8ba94d_2985cc0efe1040d39b17a440f957c618~mv2.jpeg"
                alt="BestieBoxed Logo"
                className="w-10 h-10 object-contain"
                width={40}
              />
            </div>
            <span className="font-heading text-2xl text-foreground">BestieBoxed</span>
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
              to="#hampers" 
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
