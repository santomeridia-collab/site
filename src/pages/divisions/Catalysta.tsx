import { useState, useRef, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FlaskConical, Microscope, Lightbulb, FileText } from "lucide-react";
import ResearchProposalModal from "@/components/ResearchProposalModal";
import heroImg from "@/assets/slides/research.png";

const Catalysta = () => {
  const [openProposal, setOpenProposal] = useState(false);
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

  const publications = [
    "Advanced Materials for Energy Storage (Nature, 2024)",
    "Machine Learning in Healthcare (IEEE, 2024)",
    "Climate Change Mitigation Strategies (Science, 2023)",
    "Quantum Algorithm Optimization (ACM, 2023)",
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
                <span className="text-[#159ab7]">Research</span><br />
                & Development
              </h1>
              <p className={`text-white/70 text-lg font-semibold max-w-sm leading-snug transition-all duration-1000 delay-200 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Inventing New Realities
              </p>
              <p className={`text-white/50 text-base max-w-md leading-relaxed transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Pushing the boundaries of human knowledge through groundbreaking research and innovation across multiple scientific disciplines
              </p>
              <div className={`transition-all duration-1000 delay-400 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <button
                  onClick={() => setOpenProposal(true)}
                  className="bg-[#159ab7] hover:bg-[#1e5067] text-white px-8 py-3 text-sm font-bold rounded-full transition-colors duration-300"
                >
                  Submit Research Proposal
                </button>
              </div>
            </div>
            <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <img src={heroImg} alt="SMRD" className="w-full min-h-[40vh] md:min-h-full h-[460px] object-cover" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#141e26]">Research Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-[#159ab7]/10 flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-[#159ab7]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#141e26]">Life Sciences</h3>
                <p className="text-[#1e5067]">
                  Biotechnology, healthcare, and pharmaceutical research
                </p>
              </div>
              <div className="text-center p-8 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-[#159ab7]/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-[#159ab7]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#141e26]">Emerging Tech</h3>
                <p className="text-[#1e5067]">
                  AI, quantum computing, and advanced materials
                </p>
              </div>
              <div className="text-center p-8 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-[#159ab7]/10 flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="h-8 w-8 text-[#159ab7]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#141e26]">Sustainability</h3>
                <p className="text-[#1e5067]">
                  Clean energy, climate science, and environmental solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4 text-[#141e26]">Recent Publications</h2>
              <p className="text-center text-[#1e5067] mb-12">
                Our research published in leading scientific journals
              </p>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white border border-[#159ab7] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#159ab7]/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-[#159ab7]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#141e26]">{pub}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#159ab7]">View</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-12 rounded-2xl bg-gradient-to-br from-[#141e26] to-[#159ab7] text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Collaborate With Us
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Partner with Catalysta on groundbreaking research projects
              </p>
              <Button
                size="lg"
                className="bg-white text-[#159ab7] hover:bg-[#cbd8df]"
                onClick={() => setOpenProposal(true)}
              >
                Submit Research Proposal
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {openProposal && (
        <ResearchProposalModal onClose={() => setOpenProposal(false)} />
      )}
    </div>
  );
};

export default Catalysta;
