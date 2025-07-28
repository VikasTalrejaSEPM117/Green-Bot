import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { DesignSection } from "@/components/DesignSection";
import { ImpactSection } from "@/components/ImpactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProcessSection />
      <DesignSection />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
