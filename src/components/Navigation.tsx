import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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

          {/* Desktop Navigation Links */}
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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="hero" className="rounded-full">
              Support Greenbot
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm">
                <nav className="mt-8 space-y-4">
                  <SheetClose asChild>
                    <a href="#process" className="block text-lg text-foreground hover:text-accent transition-colors">Process</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#design" className="block text-lg text-foreground hover:text-accent transition-colors">Design</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#impact" className="block text-lg text-foreground hover:text-accent transition-colors">Impact</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="/contact" className="block text-lg text-foreground hover:text-accent transition-colors">Contact</a>
                  </SheetClose>
                </nav>
                <div className="mt-8">
                  <SheetClose asChild>
                    <Button variant="hero" className="w-full rounded-full">Support Greenbot</Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};