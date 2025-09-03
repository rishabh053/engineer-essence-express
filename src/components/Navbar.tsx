
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-out",
        scrolled 
          ? "bg-background/80 backdrop-blur-apple border-b border-border/50 py-3" 
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
            Rishabh Raj
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary relative py-2",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary",
                  "after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
                  "hover:after:scale-x-100",
                  isActive(item.path) 
                    ? "text-primary after:scale-x-100" 
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={cn(
              "md:hidden p-2 rounded-xl transition-all duration-300",
              "hover:bg-muted/50 active:scale-95"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={cn(
                "absolute block h-0.5 w-6 bg-current transform transition-all duration-300",
                mobileMenuOpen ? "rotate-45 top-3" : "top-2"
              )} />
              <span className={cn(
                "absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3",
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              )} />
              <span className={cn(
                "absolute block h-0.5 w-6 bg-current transform transition-all duration-300",
                mobileMenuOpen ? "-rotate-45 top-3" : "top-4"
              )} />
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-6 pb-4">
            <div className="apple-card p-6 animate-scale-in">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300",
                      "hover:bg-muted/50 active:scale-95",
                      isActive(item.path) 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
