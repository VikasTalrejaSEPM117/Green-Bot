import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Greenbot3D } from "./Greenbot3D";
import heroImage from "@/assets/greenbot-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-forest bg-clip-text text-transparent">
              Want to help
            </span>
            <br />
            <span className="text-foreground">reforest the Earth?</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Help build the robot that reforests steep, burned land and restores nature at scale.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full font-semibold"
            >
              Join Our Crowdfunding Campaign
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full"
            >
              Learn How It Works
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              <span>Revolutionary Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-earth rounded-full animate-glow-pulse" />
              <span>Global Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-glow-pulse" />
              <span>Nature Restoration</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* 3D Model */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <Greenbot3D className="h-[280px] sm:h-[360px] md:h-[480px] lg:h-[600px] mb-4 rounded-2xl" />
          
          {/* Floating elements */}
          {/* <motion.div
            className="absolute top-4 right-4  backdrop-blur-sm rounded-full p-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }  }
          >
            <div className="w-3 h-3 bg-accent rounded-full animate-glow-pulse" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-8 left-8 bg-earth/20 backdrop-blur-sm rounded-full p-2"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="w-2 h-2 bg-earth rounded-full" />
          </motion.div> */}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Discover the Process</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};