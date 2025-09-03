
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="apple-section apple-section-padding bg-apple-gray-50/50 border-t border-border/30">
      <div className="apple-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="apple-spacing-md">
            <h3 className="apple-title">Rishabh Raj</h3>
            <p className="apple-body max-w-sm">
              Software Engineer at Dell Technologies with a passion for building elegant, 
              user-centered applications that solve real-world problems.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 rounded-full bg-background text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 rounded-full bg-background text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 rounded-full bg-background text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:rishabh@example.com" 
                className="p-4 rounded-full bg-background text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="apple-spacing-md">
            <h3 className="apple-title">Quick Links</h3>
            <ul className="apple-spacing-sm">
              <li>
                <Link 
                  to="/" 
                  className="apple-body hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="apple-body hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/experience" 
                  className="apple-body hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="apple-body hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="apple-spacing-md">
            <h3 className="apple-title">Contact</h3>
            <div className="apple-spacing-sm">
              <p className="apple-body">
                Bengaluru, Karnataka, India
              </p>
              <p className="apple-body">
                rishabh@example.com
              </p>
            </div>
            <Link 
              to="/contact" 
              className="apple-button-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-20 pt-10 text-center">
          <p className="apple-caption">
            © {currentYear} Rishabh Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
