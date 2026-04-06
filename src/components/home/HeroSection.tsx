import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/slides/7.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#141e26]">
      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-momo text-[#cbd8df] leading-tight">
              Innovation
              <br />
              <span className="bg-gradient-to-r from-[#159ab7] to-[#9ac5d3] bg-clip-text text-transparent">
                Research
              </span>
              <br />
              Transformation
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#9ac5d3] max-w-2xl font-light leading-relaxed">
              Bridging Learning, Software, and Science through cutting-edge research and innovative solutions that shape tomorrow's world.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="group border border-gray-400 bg-transparent text-[#cbd8df] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1e5067] hover:to-[#159ab7] hover:scale-105 shadow-lg"
                onClick={() => {
                  const divisionsSection = document.querySelector('#divisions');
                  if (divisionsSection) {
                    divisionsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Innovation Technology"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141e26]/20 via-transparent to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#159ab7] to-[#9ac5d3] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#1e5067] to-[#159ab7] rounded-full opacity-15 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
