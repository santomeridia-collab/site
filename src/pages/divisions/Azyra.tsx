import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Cloud, Shield } from "lucide-react";

const Azyra = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Scalable, responsive web applications using modern frameworks",
      tech: ["React", "Node.js", "TypeScript"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android",
      tech: ["Flutter", "React Native", "Swift"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud architecture design and migration services",
      tech: ["AWS", "Azure", "GCP"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security audits and penetration testing services",
      tech: ["Security", "Compliance", "Testing"],
    },
  ];

  const projects = [
    { name: "FinTech Platform", client: "Major Bank", tech: "React, Node.js, AWS" },
    { name: "EdTech Mobile App", client: "Education Startup", tech: "Flutter, Firebase" },
    { name: "E-commerce Solution", client: "Retail Chain", tech: "Next.js, Stripe" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block p-4 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm mb-6">
              <Code className="h-16 w-16 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              AZYRA
            </h1>
            <p className="text-2xl text-primary-foreground/90 mb-4">
              Engineering the Future
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Transforming ideas into digital reality through innovative software 
              engineering and cutting-edge technology solutions
            </p>
            <Button variant="hero" size="lg">
              Start Your Project
            </Button>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-card border border-border shadow-card hover-lift"
                >
                  <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
            <p className="text-center text-muted-foreground mb-12">
              Delivering excellence across diverse industries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift"
                >
                  <div className="aspect-video rounded-lg bg-primary/10 mb-4 flex items-center justify-center">
                    <Code className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.client}</p>
                  <p className="text-sm text-primary">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build Estimator CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-12 rounded-2xl gradient-hero text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Get Your Project Estimate
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Use our build estimator tool to get an instant cost and timeline estimate
              </p>
              <Button variant="hero" size="lg">
                Try Estimator Tool
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">120+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Azyra;
