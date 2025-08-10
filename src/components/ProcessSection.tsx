import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import planningImage from "@/assets/planning-process.jpg";
import deploymentImage from "@/assets/deployment-process.jpg";
import monitoringImage from "@/assets/monitoring-process.jpg";

interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Planning",
    subtitle: "Scientific Foundation",
    description: "Tree species, planting methods, and soil must be studied according to the site.",
    details: [
      "Advanced soil composition analysis using AI-powered sensors",
      "Species selection based on climate resilience and local ecosystem",
      "Terrain mapping for optimal planting patterns on steep slopes",
      "Predictive modeling for long-term forest sustainability"
    ],
    image: planningImage,
    color: "accent"
  },
  {
    id: 2,
    title: "Deployment",
    subtitle: "Precision Execution",
    description: "Greenbot transported to the site with the corresponding saplings and battery charger to be deployed.",
    details: [
      "All-terrain deployment via helicopter or specialized transport",
      "Autonomous navigation on slopes up to 45 degrees",
      "Precision hole drilling and sapling placement",
      "Adaptive planting techniques for challenging burned terrain"
    ],
    image: deploymentImage,
    color: "earth"
  },
  {
    id: 3,
    title: "Monitoring",
    subtitle: "Long-term Success",
    description: "The plantation monitored short and long-term, to achieve the highest plantation success.",
    details: [
      "Real-time growth tracking via satellite and drone monitoring",
      "Automated health assessments and intervention alerts",
      "Survival rate optimization through data-driven insights",
      "10-year restoration timeline with measurable milestones"
    ],
    image: monitoringImage,
    color: "primary"
  }
];

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = processSteps.find(step => step.id === activeStep)!;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20">
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
            <span className="bg-gradient-forest bg-clip-text text-transparent">
              The Greenbot Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From scientific planning to long-term monitoring, discover how Greenbot transforms burned landscapes into thriving forests.
          </p>
        </motion.div>

        {/* Process Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
          {processSteps.map((step) => (
            <Button
              key={step.id}
              variant={activeStep === step.id ? "hero" : "outline"}
              size="lg"
              onClick={() => setActiveStep(step.id)}
              className="relative overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  activeStep === step.id ? 'bg-white/20' : 'bg-muted'
                }`}>
                  {step.id}
                </span>
                {step.title}
              </span>
              {activeStep === step.id && (
                <motion.div
                  layoutId="activeStep"
                  className="absolute inset-0 bg-gradient-forest rounded-md"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Button>
          ))}
        </div>

        {/* Process Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Content */}
            <div className="space-y-8">
              <div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-2"
                >
                  <div className={`w-2 h-2 rounded-full bg-${currentStep.color}`} />
                  Step {currentStep.id}
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {currentStep.title}
                  <span className="block text-xl font-normal text-muted-foreground mt-2">
                    {currentStep.subtitle}
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-4">
                {currentStep.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${currentStep.color} mt-2 flex-shrink-0`} />
                    <span className="text-foreground">{detail}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button variant="nature" size="lg" className="rounded-full">
                  Learn More About {currentStep.title}
                </Button>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-nature">
                <div 
                  className="aspect-[4/3] bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${currentStep.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-lg mb-2">
                      {currentStep.subtitle}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className={`w-1 h-8 bg-${currentStep.color} rounded-full`} />
                      <span className="text-white/80 text-sm">Active Process</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Process Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
                      activeStep >= step.id ? 'bg-gradient-forest shadow-glow' : 'bg-muted-foreground/30'
                    }`}
                  >
                    {step.id}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                      activeStep > step.id ? 'bg-gradient-forest' : 'bg-muted-foreground/30'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};