import { useRef, useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Rocket, Globe, BarChart3, Zap, Search, PenTool, Cloud, Users, TrendingUp, Target, RefreshCw, CheckCircle } from "lucide-react";
import heroImg from "@/assets/slides/Dg.png";

const Digital = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsHeroVisible(true); },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const focusAreas = [
    { icon: Rocket, title: "Scaling Innovations", desc: "Transform ideas into scalable products with the right tools, technologies, and growth strategies ready for market launch." },
    { icon: Globe, title: "Market Expansion", desc: "Grow beyond your initial market by identifying new opportunities, understanding customer needs, and adapting for different regions." },
    { icon: TrendingUp, title: "Global Adoption", desc: "Reach a worldwide audience by leveraging digital platforms and scalable infrastructure designed for diverse markets." },
    { icon: BarChart3, title: "Measurable Outcomes", desc: "Track user growth, engagement, conversion rates, and revenue performance for continuous improvement." },
  ];

  const capabilities = [
    { icon: BarChart3, label: "Data-driven insights & analytics" },
    { icon: PenTool, label: "Digital marketing & branding" },
    { icon: Cloud, label: "Scalable cloud-based solutions" },
    { icon: Globe, label: "Global market access" },
    { icon: Users, label: "Strategic partnerships" },
    { icon: Zap, label: "Performance optimization" },
  ];

  const steps = [
    { icon: Search, step: "01", title: "Discover", desc: "Analyze the idea and its potential in the market landscape." },
    { icon: Target, step: "02", title: "Plan", desc: "Create a comprehensive growth and expansion strategy." },
    { icon: Zap, step: "03", title: "Execute", desc: "Implement digital and market solutions at scale." },
    { icon: RefreshCw, step: "04", title: "Optimize", desc: "Track results and improve continuously with data." },
  ];

  const benefits = [
    "Faster innovation scaling",
    "Increased global visibility",
    "Higher customer acquisition",
    "Sustainable business growth",
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
                <span className="text-[#159ab7]">Digital</span><br />
                Growth Hub
              </h1>
              <p className={`text-white/70 text-lg font-semibold max-w-sm leading-snug transition-all duration-1000 delay-200 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Scaling Innovation for Global Impact
              </p>
              <div className={`transition-all duration-1000 delay-400 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <button
                  onClick={() => document.getElementById('focus')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#159ab7] hover:bg-[#1e5067] text-white px-8 py-3 text-sm font-bold rounded-full transition-colors duration-300"
                >
                  Explore Hub
                </button>
              </div>
            </div>
            <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <img src={heroImg} alt="Digital Growth Hub" className="w-full min-h-[40vh] md:min-h-full h-[460px] object-cover" />
            </div>
          </div>
        </section>

        {/* Core Focus Areas */}
        <section id="focus" className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#141e26]">Core Focus Areas</h2>
            <p className="text-center text-[#1e5067] mb-12 max-w-xl mx-auto">
              Strategic pillars that drive innovation from concept to global scale
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-8 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-14 h-14 rounded-full bg-[#159ab7]/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-[#159ab7]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#141e26]">{title}</h3>
                  <p className="text-[#1e5067] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#141e26]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white">How It Works</h2>
            <p className="text-center text-white/50 mb-12">A proven four-step process from discovery to optimization</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {steps.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="relative p-8 border border-white/10 hover:border-[#159ab7]/50 transition-all duration-500 group">
                  <p className="text-5xl font-extrabold text-white/10 group-hover:text-[#159ab7]/20 transition-colors mb-4">{step}</p>
                  <div className="w-12 h-12 rounded-full bg-[#159ab7]/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#159ab7]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#141e26]">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {capabilities.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4 p-6 rounded-xl bg-white border border-[#159ab7] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 rounded-lg bg-[#159ab7]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-[#159ab7]" />
                  </div>
                  <p className="font-semibold text-[#141e26]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits + CTA */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-6 sm:p-10 md:p-12 rounded-2xl bg-gradient-to-br from-[#141e26] to-[#159ab7] text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">Why Digital Growth Hub?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left max-w-xl mx-auto">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#9ac5d3] flex-shrink-0" />
                    <span className="text-white/90 text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/70 italic mb-8">"Scaling Innovation for Global Impact"</p>
              <button className="bg-white text-[#159ab7] hover:bg-[#cbd8df] px-8 py-3 text-sm font-bold rounded-full transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Digital;
