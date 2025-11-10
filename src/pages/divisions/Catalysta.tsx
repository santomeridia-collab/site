import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FlaskConical, Microscope, Lightbulb, FileText } from "lucide-react";

const Catalysta = () => {
  const research = [
    {
      title: "AI-Powered Drug Discovery",
      field: "Biotechnology",
      status: "Ongoing",
      year: "2024-2025",
    },
    {
      title: "Quantum Computing Applications",
      field: "Computer Science",
      status: "Ongoing",
      year: "2023-2025",
    },
    {
      title: "Sustainable Energy Solutions",
      field: "Environmental Science",
      status: "Completed",
      year: "2023",
    },
  ];

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
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block p-4 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm mb-6">
              <FlaskConical className="h-16 w-16 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              CATALYSTA
            </h1>
            <p className="text-2xl text-primary-foreground/90 mb-4">
              Inventing New Realities
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Pushing the boundaries of human knowledge through groundbreaking research 
              and innovation across multiple scientific disciplines
            </p>
            <Button variant="hero" size="lg">
              Explore Research
            </Button>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Research Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Life Sciences</h3>
                <p className="text-muted-foreground">
                  Biotechnology, healthcare, and pharmaceutical research
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Emerging Tech</h3>
                <p className="text-muted-foreground">
                  AI, quantum computing, and advanced materials
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  Clean energy, climate science, and environmental solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Active Research */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Active Research Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {research.map((project, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift"
                >
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Ongoing" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-accent/10 text-accent"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.field}</p>
                  <p className="text-sm text-muted-foreground">{project.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">Recent Publications</h2>
              <p className="text-center text-muted-foreground mb-12">
                Our research published in leading scientific journals
              </p>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{pub}</p>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-12 rounded-2xl gradient-hero text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Collaborate With Us
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Partner with CATALYSTA on groundbreaking research projects
              </p>
              <Button variant="hero" size="lg">
                Submit Research Proposal
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">60+</div>
                <div className="text-muted-foreground">Research Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-muted-foreground">Publications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Research Partners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Patents Filed</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalysta;
