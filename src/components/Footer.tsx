import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 py-16 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-forest rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-forest bg-clip-text text-transparent">
                Greenbot
              </span>
            </div>
            <p className="text-muted-foreground">
              Revolutionary reforestation technology for a sustainable future.
            </p>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              <div className="w-2 h-2 bg-earth rounded-full animate-glow-pulse" />
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-glow-pulse" />
            </div>
          </div>

          {/* Mission */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Mission</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Reforestation Technology</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Environmental Impact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sustainability Goals</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Global Deployment</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Crowdfunding</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partnership</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Research Collaboration</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Media Kit</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">info@greenbot.earth</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press Inquiries</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Investor Relations</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Greenbot Earth Restoration. Building the future of reforestation.
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="rounded-full">
                Privacy Policy
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};