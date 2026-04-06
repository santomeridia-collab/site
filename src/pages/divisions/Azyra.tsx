import { useState, useRef, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Code, Cloud, Shield, Zap } from "lucide-react";
import EstimatorModal from "@/components/estimator";
import heroImg from "@/assets/slides/(SMS²) Banner.png";

const Azyra = () => {
  const [openEstimator, setOpenEstimator] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: Code, title: "Custom Software Development", description: "Tailored solutions built with cutting-edge technologies" },
    { icon: Cloud, title: "Cloud Architecture", description: "Scalable and resilient cloud infrastructure design" },
    { icon: Shield, title: "Cybersecurity", description: "Enterprise-grade security solutions and audits" },
    { icon: Zap, title: "Performance Optimization", description: "Speed and efficiency improvements for existing systems" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section ref={heroRef} className="min-h-[92vh] flex items-center bg-[#141e26] overflow-hidden">
          <div className="w-full flex flex-col md:flex-row items-center px-5 md:px-8 lg:px-14 py-12 md:py-16 gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.0] transition-all duration-1000 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                SantoMeridia<br />
                <span className="text-[#159ab7]">Software</span><br />
                Systems
              </h1>
              <p className={`text-white/70 text-lg font-semibold max-w-sm leading-snug transition-all duration-1000 delay-200 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Engineering Digital Excellence
              </p>
              <p className={`text-white/50 text-base max-w-md leading-relaxed transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Transforming ideas into robust, scalable software solutions
              </p>
              <div className={`transition-all duration-1000 delay-400 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <button
                  onClick={() => setOpenEstimator(true)}
                  className="bg-[#159ab7] hover:bg-[#1e5067] text-white px-8 py-3 text-sm font-bold rounded-full transition-colors duration-300"
                >
                  Get Project Estimate
                </button>
              </div>
            </div>
            <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <img src={heroImg} alt="SMS" className="w-full min-h-[40vh] md:min-h-full h-[460px] object-cover" />
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#141e26]">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center p-8 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#159ab7]/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-[#159ab7]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#141e26]">{service.title}</h3>
                  <p className="text-[#1e5067]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-12 rounded-2xl bg-gradient-to-br from-[#141e26] to-[#159ab7] text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-lg text-white/90 mb-8">Get a free project estimate and consultation</p>
              <Button size="lg" className="bg-white text-[#159ab7] hover:bg-[#cbd8df]" onClick={() => setOpenEstimator(true)}>Get Project Estimate</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {openEstimator && <EstimatorModal onClose={() => setOpenEstimator(false)} />}
    </div>
  );
};

export default Azyra;
