import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import designImage from "@/assets/greenbot-design.jpg";

interface DesignFeature {
  title: string;
  description: string;
  icon: string;
  advantage: string;
}

const designFeatures: DesignFeature[] = [
  {
    title: "All-Terrain Treads",
    description: "Specialized tank-like treads with adaptive grip technology for navigating slopes up to 45 degrees on unstable burned terrain.",
    icon: "🔧",
    advantage: "Reaches inaccessible areas"
  },
  {
    title: "Fire-Resistant Shell",
    description: "Heat-resistant titanium alloy construction protects against residual heat and harsh environmental conditions in burned landscapes.",
    icon: "🛡️",
    advantage: "Operates in extreme conditions"
  },
  {
    title: "Precision Drilling System",
    description: "Advanced soil penetration technology creates optimal planting holes while preserving remaining soil structure and nutrients.",
    icon: "⚡",
    advantage: "Maximizes sapling survival"
  },
  {
    title: "AI Navigation",
    description: "Computer vision and LiDAR sensors enable autonomous navigation and obstacle avoidance on challenging terrains.",
    icon: "🧠",
    advantage: "Autonomous operation"
  },
  {
    title: "Solar Power System",
    description: "High-efficiency solar panels with backup battery systems ensure continuous operation in remote locations.",
    icon: "☀️",
    advantage: "Sustainable energy"
  },
  {
    title: "Sapling Protection",
    description: "Climate-controlled storage compartment maintains optimal conditions for saplings during transport and planting.",
    icon: "🌱",
    advantage: "Preserves plant health"
  }
];

export const DesignSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
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
            <span className="bg-gradient-earth bg-clip-text text-transparent">
              Engineering Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Greenbot's revolutionary design enables reforestation in the most challenging environments where traditional methods fail.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-16">
          {/* Design Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="overflow-hidden shadow-nature">
              <div 
                className="aspect-[4/3] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${designImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-2xl mb-2">
                    Advanced Engineering
                  </h3>
                  <p className="text-white/80">
                    Every component designed for extreme terrain reforestation
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Floating technical specs */}
            <motion.div
              className="absolute -top-4 -right-4 bg-accent/90 backdrop-blur-sm rounded-lg p-4 text-white shadow-glow"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-xs font-medium mb-1">Max Slope</div>
              <div className="text-2xl font-bold">45°</div>
            </motion.div>
            
            <motion.div
              className="absolute bottom-4 -left-4 bg-earth/90 backdrop-blur-sm rounded-lg p-4 text-white shadow-nature"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="text-xs font-medium mb-1">Planting Rate</div>
              <div className="text-xl font-bold">200/day</div>
            </motion.div>
          </motion.div>

          {/* Feature Overview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Built for the Impossible</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional reforestation fails on steep, burned terrain. Greenbot's innovative design overcomes these challenges with cutting-edge technology and sustainable engineering.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Sapling Survival Rate</div>
                </div>
                <div className="text-center p-4 bg-earth/10 rounded-lg">
                  <div className="text-2xl font-bold text-earth mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Autonomous Operation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {designFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-nature transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {feature.advantage}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};