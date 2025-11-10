import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import DivisionsGateway from "@/components/home/DivisionsGateway";
import ImpactMetrics from "@/components/home/ImpactMetrics";
import VisionFlow from "@/components/home/VisionFlow";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DivisionsGateway />
        <ImpactMetrics />
        <VisionFlow />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
