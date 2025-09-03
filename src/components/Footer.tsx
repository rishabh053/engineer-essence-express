
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-t from-muted/20 to-background py-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Rishabh Raj</h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Software Engineer at Dell Technologies with a passion for building elegant, 
              user-centered applications that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-2xl bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-2xl bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-2xl bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:rishabh@example.com" 
                className="p-3 rounded-2xl bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/experience" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Bengaluru, Karnataka, India
              </p>
              <p className="text-muted-foreground">
                rishabh@example.com
              </p>
            </div>
            <Link 
              to="/contact" 
              className="inline-block apple-button-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-16 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Rishabh Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
