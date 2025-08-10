import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ImpactStat {
  value: string;
  label: string;
  description: string;
  color: string;
}

const impactStats: ImpactStat[] = [
  {
    value: "2.1B",
    label: "Trees Needed Annually",
    description: "Global reforestation gap that Greenbot can help address",
    color: "accent"
  },
  {
    value: "10x",
    label: "Higher Survival Rate",
    description: "Compared to traditional aerial seeding methods",
    color: "earth"
  },
  {
    value: "45°",
    label: "Maximum Slope",
    description: "Inaccessible terrain that Greenbot can reforest",
    color: "primary"
  },
  {
    value: "24/7",
    label: "Autonomous Operation",
    description: "Continuous planting in remote, harsh environments",
    color: "accent"
  }
];

export const ImpactSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-life bg-clip-text text-transparent">
              The Global Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every Greenbot deployed addresses critical environmental challenges and brings us closer to a reforested planet.
          </p>
        </motion.div>

        {/* Impact Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className={`text-4xl font-bold mb-2 bg-gradient-${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </motion.div>
                <h4 className="font-semibold text-lg mb-2">{stat.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">The Challenge We Face</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-l-destructive pl-4">
                <h4 className="font-semibold text-destructive mb-1">Steep Terrain</h4>
                <p className="text-muted-foreground">Traditional reforestation methods fail on slopes over 30°, leaving millions of acres unplantable.</p>
              </div>
              <div className="border-l-4 border-l-destructive pl-4">
                <h4 className="font-semibold text-destructive mb-1">Low Survival Rates</h4>
                <p className="text-muted-foreground">Aerial seeding achieves only 10-15% survival rates, wasting resources and time.</p>
              </div>
              <div className="border-l-4 border-l-destructive pl-4">
                <h4 className="font-semibold text-destructive mb-1">Scale Gap</h4>
                <p className="text-muted-foreground">Current methods cannot match the scale of deforestation and climate needs.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-forest bg-clip-text text-transparent">
                The Greenbot Solution
              </span>
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-l-accent pl-4">
                <h4 className="font-semibold text-accent mb-1">Precision Planting</h4>
                <p className="text-muted-foreground">Advanced drilling and placement technology achieves 95% survival rates.</p>
              </div>
              <div className="border-l-4 border-l-accent pl-4">
                <h4 className="font-semibold text-accent mb-1">Extreme Terrain</h4>
                <p className="text-muted-foreground">Navigates slopes up to 45° that are impossible for humans or traditional machinery.</p>
              </div>
              <div className="border-l-4 border-l-accent pl-4">
                <h4 className="font-semibold text-accent mb-1">Massive Scale</h4>
                <p className="text-muted-foreground">24/7 autonomous operation with fleets capable of reforesting entire regions.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Crowdfunding Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-earth/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of This Revolution
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of supporters helping bring Greenbot to life. Your contribution directly funds the development and deployment of reforestation robots that will help heal our planet.
          </p>

          {/* Progress indicator */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span>Campaign Progress</span>
              <span className="font-semibold">67% Complete</span>
            </div>
            <Progress value={67} className="h-3" />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>$2.1M Raised</span>
              <span>$3.2M Goal</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full font-semibold animate-glow-pulse"
            >
              Fund the Future of Reforestation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full"
            >
              Share This Mission
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              <span>5,847 Supporters</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-earth rounded-full animate-glow-pulse" />
              <span>23 Days Remaining</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-glow-pulse" />
              <span>100% Transparent Funding</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};