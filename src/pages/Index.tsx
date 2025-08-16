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
      {/* Add scroll margin to account for fixed navbar */}
      <div id="process" className="scroll-mt-20">
        <ProcessSection />
      </div>
      <div id="design" className="scroll-mt-20">
        <DesignSection />
      </div>
      <div id="impact" className="scroll-mt-20">
        <ImpactSection />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
