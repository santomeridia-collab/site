import { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImg from "@/assets/slides/Investor 1.png";
import heroImg2 from "@/assets/slides/investors.jpeg";

const Investors = () => {
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
  const highlights = [
    { icon: TrendingUp, label: "Year-over-Year Growth", value: "45%" },
    { icon: Users, label: "Active Users", value: "10K+" },
    { icon: DollarSign, label: "R&D Investment", value: "₹2.5Cr" },
    { icon: Target, label: "Client Retention", value: "92%" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section ref={heroRef} className="min-h-[90vh] flex items-center bg-[#141e26]">
          <div className="w-full flex flex-col md:flex-row items-center px-5 md:px-8 lg:px-16 py-12 md:py-16 gap-12 md:gap-20">

            {/* Left — image */}
            <div className={`w-full md:w-3/5 transition-all duration-1000 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <img
                src={heroImg}
                alt="Investors"
                className="w-full min-h-[40vh] md:min-h-full h-[480px] object-cover shadow-2xl"
              />
            </div>

            {/* Right — content */}
            <div className="w-full md:w-2/5 space-y-7">

              <div className={`transition-all duration-1000 delay-150 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
                  <span className="text-white">Trust Through</span><br />
                  <span className="text-[#159ab7]">Transparency</span>
                </h1>
              </div>

              <p className={`text-base text-white/55 max-w-md leading-relaxed transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Building value through innovation, integrity, and sustainable growth
              </p>

              <div className={`transition-all duration-1000 delay-500 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <button
                  onClick={() => document.getElementById('reports')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-3 border border-white/25 text-white px-7 py-3 text-sm font-semibold rounded-full hover:bg-[#159ab7] hover:border-[#159ab7] transition-all duration-300"
                >
                  View Reports <span>→</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Financial Highlights */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#141e26]">Financial Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-8 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#159ab7]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-[#159ab7]" />
                  </div>
                  <div className="text-4xl font-bold text-[#159ab7] mb-2">{item.value}</div>
                  <div className="text-[#1e5067]">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-[#159ab7] hover:bg-[#1e5067] text-white" size="lg">
                Request Annual Report 
              </Button>
            </div>
          </div>
        </section>

        {/* Governance Structure */}
        <section className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-[#141e26]">Governance Overview</h2>
              <div className="p-8 rounded-xl bg-white border border-[#159ab7] shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#141e26]">Board of Directors</h3>
                    <p className="text-[#1e5067]">
                      Led by experienced professionals with backgrounds in technology, education, and finance, 
                      our board ensures strategic oversight and ethical governance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#141e26]">Management Structure</h3>
                    <p className="text-[#1e5067]">
                      Four autonomous divisions (SMIT, SMILE, SMS², SMRD) each with dedicated 
                      leadership, unified under corporate governance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section id="reports" className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#141e26]">Legal & Policy Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Annual Report 2024",
                  "CSR Policy",
                  "ESG Framework",
                  "Compliance Certificate",
                  "Audit Report 2024",
                  "Code of Conduct",
                ].map((doc) => (
                  <div
                    key={doc}
                    className="p-6 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex justify-between items-center"
                  >
                    <span className="font-medium text-[#141e26]">{doc}</span>
                    <Button variant="ghost" size="sm" className="text-[#159ab7] hover:bg-[#159ab7] hover:text-white">Request</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-[#141e26]">Investor Relations</h2>
              <p className="text-center text-[#1e5067] mb-8">
                Get in touch with our investor relations desk
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Name" className="border-[#159ab7] focus:border-[#1e5067] bg-white" />
                  <Input type="email" placeholder="Email" className="border-[#159ab7] focus:border-[#1e5067] bg-white" />
                </div>
                <Input placeholder="Organization" className="border-[#159ab7] focus:border-[#1e5067] bg-white" />
                <Input placeholder="Subject" className="border-[#159ab7] focus:border-[#1e5067] bg-white" />
                <Textarea placeholder="Your message" rows={5} className="border-[#159ab7] focus:border-[#1e5067] bg-white" />
                <Button className="w-full bg-[#159ab7] hover:bg-[#1e5067] text-white" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Investors;
