import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Heart, Award, GraduationCap, Laptop, FlaskRound, Globe } from "lucide-react";

const About = () => {
  const timeline = [
    { year: "2025", event: "Foundation of Santomeridia Research Labs" },
  ];

  const values = [
    { icon: Target, title: "Mission", description: "Transform learning and research into global impact through innovative solutions" },
    { icon: Eye, title: "Vision", description: "Be India's most trusted R&D-driven innovation ecosystem" },
    { icon: Heart, title: "Values", description: "Curiosity, Impact, Collaboration, Integrity" },
    { icon: Award, title: "Excellence", description: "Committed to delivering world-class solutions" },
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
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Unified by Purpose. Driven by Research.
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Building the future through innovation, education, and meaningful impact.
            </p>
          </div>
        </section>

        {/* About Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong>Santomeridia Research Labs Pvt. Ltd.</strong> is a dynamic technology and innovation-driven organization under the global umbrella of <strong>Santomeridia Global</strong>. 
              Our mission is to bridge research, education, and technology through transformative solutions that empower learning, creativity, 
              and digital progress across industries.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-4xl font-bold mb-12">Our Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <Eye className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Vision</h3>
                <p className="text-muted-foreground">
                  To become a globally recognized research and innovation ecosystem that drives next-generation 
                  technological growth, sustainability, and digital empowerment.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Mission</h3>
                <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                  <li>To nurture cutting-edge research and development in emerging technologies.</li>
                  <li>To deliver world-class educational and professional programs through innovation-driven platforms.</li>
                  <li>To create sustainable digital ecosystems connecting industries, academia, and innovators globally.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Divisions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Divisions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {divisions.map((division) => (
                <div
                  key={division.title}
                  className="text-center p-6 rounded-xl bg-card border border-border shadow-card hover-lift"
                >
                  <division.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">{division.title}</h3>
                  <p className="text-muted-foreground">{division.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={item.year}
                    className="flex gap-6 items-start group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="text-2xl font-bold text-primary">{item.year}</span>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2 ring-4 ring-primary/20 group-hover:ring-8 transition-all"></div>
                    <div className="flex-1 pb-8 border-b border-border">
                      <p className="text-lg text-foreground">{item.event}</p>
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
            <h2 className="text-4xl font-bold">Our Global Identity</h2>
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              Santomeridia stands as a collective identity of <strong>Santomeridia India</strong> (under registration) 
              and <strong>Santomeridia UK</strong> (in progress) — symbolizing our growing international presence 
              and shared commitment to innovation and excellence.
            </p>
          </div>
        </section>

        {/* CSR */}
        <section id="csr" className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">CSR & Ethics</h2>
              <p className="text-lg text-muted-foreground">
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
