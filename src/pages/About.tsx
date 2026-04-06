import { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Target, Eye, GraduationCap, Laptop, FlaskRound, Globe } from "lucide-react";
import heroImg from "@/assets/slides/aboutus.png.png";
import heroImg2 from "@/assets/slides/jot.jpeg";
import visionImg from "@/assets/slides/7.png";
import missionImg from "@/assets/slides/7.png";

const About = () => {
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
  
  const timeline = [
    { year: "2025", event: "Foundation of Santomeridia Research Labs" },
  ];

  const divisions = [
    {
      icon: GraduationCap,
      title: "Academy Division",
      description: "Focused on Edutech, academic tutoring, and professional learning solutions."
    },
    {
      icon: Laptop,
      title: "Software Development Division",
      description: "Specializing in enterprise applications, web, mobile, and AI-driven systems."
    },
    {
      icon: FlaskRound,
      title: "R&D Division",
      description: "Driving advanced research, innovation, and intellectual property development in emerging technologies."
    },
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
                alt="About Us"
                className="w-full min-h-[40vh] md:min-h-full h-[480px] object-cover shadow-2xl"
              />
            </div>

            {/* Right — content */}
            <div className="w-full md:w-2/5 space-y-7">
              <div className={`transition-all duration-1000 delay-150 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
                  <span className="text-white">Unified by</span><br />
                  <span className="text-[#159ab7]">Purpose,</span><br />
                  <span className="text-white">Driven by Research</span>
                </h1>
              </div>

              <p className={`text-base text-white/55 max-w-md leading-relaxed transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Building the future through innovation, education, and meaningful impact.
              </p>

              <div className={`transition-all duration-1000 delay-500 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <button
                  onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-3 border border-white/25 text-white px-7 py-3 text-sm font-semibold rounded-full hover:bg-[#159ab7] hover:border-[#159ab7] transition-all duration-300"
                >
                  Learn More <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about-us" className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#141e26]">About Us</h2>
            <p className="text-lg text-[#1e5067] leading-relaxed">
              <strong>Santomeridia Research Labs Pvt. Ltd.</strong> is a dynamic technology and innovation-driven organization under the global umbrella of <strong>Santomeridia Global</strong>. 
              Our mission is to bridge research, education, and technology through transformative solutions that empower learning, creativity, 
              and digital progress across industries.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#cbd8df] to-[#9ac5d3] relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-8xl max-h-5xl mx-auto">
              
              {/* Vision Card */}
              <div className="relative group">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: `url(${visionImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#507dbc]/90 via-[#4a73b0]/85 to-[#3d5f99]/90"></div>
                </div>

                {/* Content Card Overlay */}
                <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center p-8 lg:p-12">
                  <div className="bg-white/98 backdrop-blur-sm p-8 lg:p-12 rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl w-full lg:w-[90%] ml-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#141e26] tracking-tight">
                      Our Vision
                    </h2>
                    
                    <div className="h-1 w-20 bg-[#507dbc] mb-6 rounded-full"></div>
                    
                    <p className="text-base lg:text-lg text-[#F0FFF0] leading-relaxed">
                      To build a globally respected, research-driven innovation ecosystem where frontier technologies—including{" "}
                      <span className="font-semibold text-[#141e26]">AI/ML, AR/VR, Gamification, HealthTech, ClimateTech, Quantum Computing, Blockchain & Cybersecurity</span>
                      —deliver transformative social, economic, and technological impact worldwide, aligned with UN SDGs and ESG principles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="relative group">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: `url(${missionImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#04080f]/95 via-[#0a1520]/90 to-[#1a2332]/95"></div>
                </div>

                {/* Content Card Overlay */}
                <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center p-8 lg:p-12">
                  <div className="bg-white/98 backdrop-blur-sm p-8 lg:p-12 rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl w-full lg:w-[90%] mr-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#F0FFF0] tracking-tight">
                      Our Mission
                    </h2>
                    
                    <div className="h-1 w-20 bg-[#507dbc] mb-6 rounded-full"></div>
                    
                    <p className="text-base lg:text-lg text-[#6495ED] leading-relaxed mb-8">
                      SantoMeridia is committed to leading research and innovation in{" "}
                      <span className="font-semibold text-[#F0FFF0]">AI/ML, AR/VR, Animation, and Gamification-based platforms</span>
                      , converting knowledge into IP-driven, globally scalable solutions, and delivering industry-aligned skill development and measurable societal impact.
                      Subsequent technologies will be deployed strategically as the ecosystem evolves.
                    </p>

                   
                   
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Divisions */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#141e26]">Our Core Divisions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {divisions.map((division) => (
                <div
                  key={division.title}
                  className="text-center p-6 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <division.icon className="h-12 w-12 text-[#159ab7] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2 text-[#141e26]">{division.title}</h3>
                  <p className="text-[#1e5067]">{division.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#141e26]">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={item.year}
                    className="flex gap-6 items-start group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="text-2xl font-bold text-[#159ab7]">{item.year}</span>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#159ab7] mt-2 ring-4 ring-[#159ab7]/20 group-hover:ring-8 transition-all"></div>
                    <div className="flex-1 pb-8 border-b border-[#159ab7]">
                      <p className="text-lg text-[#141e26]">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Identity */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-4xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Global Identity</h2>
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              <strong>Santomeridia Global</strong> functions as the consolidated identity for 
              Santomeridia's international offices and strategic operations worldwide.
            </p>
          </div>
        </section>

        {/* CSR */}
        <section id="csr" className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141e26]">CSR & Ethics</h2>
              <p className="text-lg text-[#1e5067]">
                We believe innovation must serve society. Our CSR initiatives focus on education access, 
                environmental sustainability, and community empowerment. Through scholarships, free training 
                programs, and sustainable practices, we're committed to creating positive change.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
