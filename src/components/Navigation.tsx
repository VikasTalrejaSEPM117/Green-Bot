import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener (simplified for this example)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg shadow-nature border-b border-border/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gradient-forest rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold bg-gradient-forest bg-clip-text text-transparent">
              Greenbot
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-foreground hover:text-accent transition-colors">
              Process
            </a>
            <a href="#design" className="text-foreground hover:text-accent transition-colors">
              Design
            </a>
            <a href="#impact" className="text-foreground hover:text-accent transition-colors">
              Impact
            </a>
            <a href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="hero" className="rounded-full">
            Support Greenbot
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};