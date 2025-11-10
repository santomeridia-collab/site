import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-subtle">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Innovation. Research.{" "}
           <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent font-bold">
  Transformation.
</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Bridging Learning, Software, and Science.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="#divisions">
              <Button variant="hero" size="lg" className="group">
                Explore the Ecosystem
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Optional: Add a video or animation placeholder */}
          <div className="mt-12 relative">
            <div className="aspect-video rounded-2xl shadow-elegant overflow-hidden border border-border bg-card">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/10 to-transparent">
                <div className="text-center space-y-2">
                  <div className="text-6xl">🧬</div>
                  <p className="text-muted-foreground">Innovation in Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
