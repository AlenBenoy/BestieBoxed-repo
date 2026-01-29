import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
                <Heart className="w-5 h-5 text-primary" fill="currentColor" />
              </div>
              <span className="font-heading text-2xl text-background">BestieBoxed</span>
            </Link>
            <p className="font-paragraph text-sm text-background/70 leading-relaxed">
              Romanticizing life, one cozy corner at a time. Discover gifts and essentials that spark joy.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl text-background mb-6">Shop</h3>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/store" 
                className="font-paragraph text-sm text-background/70 hover:text-primary transition-colors"
              >
                All Products
              </Link>
              <Link 
                to="/store" 
                className="font-paragraph text-sm text-background/70 hover:text-primary transition-colors"
              >
                Gifts
              </Link>
            </nav>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl text-background mb-6">About</h3>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/about" 
                className="font-paragraph text-sm text-background/70 hover:text-primary transition-colors"
              >
                Our Story
              </Link>
              <Link 
                to="/contact" 
                className="font-paragraph text-sm text-background/70 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/shipping" 
                className="font-paragraph text-sm text-background/70 hover:text-primary transition-colors"
              >
                Shipping & Returns
              </Link>
              <Link 
                to="/faq" 
                className="font-paragraph text-sm text-background/70 hover:text-primary transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl text-background mb-6">Connect</h3>
            <p className="font-paragraph text-sm text-background/70 mb-4">
              Follow us for daily inspiration and soft living ideas
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-background" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-background" />
              </a>
              <a 
                href="mailto:hello@bestieboxed.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-background/50">
              © 2026 BestieBoxed. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/privacy" 
                className="font-paragraph text-sm text-background/50 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="font-paragraph text-sm text-background/50 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
