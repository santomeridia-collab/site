import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Investors = () => {
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
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Trust Through Transparency
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Building value through innovation, integrity, and sustainable growth
            </p>
          </div>
        </section>

        {/* Financial Highlights */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Financial Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-8 rounded-xl bg-card border border-border shadow-card hover-lift text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg">
                Download Annual Report 2024
              </Button>
            </div>
          </div>
        </section>

        {/* Governance Structure */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8">Governance Overview</h2>
              <div className="p-8 rounded-xl bg-card border border-border shadow-card">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Board of Directors</h3>
                    <p className="text-muted-foreground">
                      Led by experienced professionals with backgrounds in technology, education, and finance, 
                      our board ensures strategic oversight and ethical governance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Management Structure</h3>
                    <p className="text-muted-foreground">
                      Four autonomous divisions (ACADIENCE, CENTORA, AZYRA, CATALYSTA) each with dedicated 
                      leadership, unified under corporate governance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section id="reports" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Legal & Policy Documents</h2>
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
                    className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift flex justify-between items-center"
                  >
                    <span className="font-medium">{doc}</span>
                    <Button variant="ghost" size="sm">Download</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Investor Relations</h2>
              <p className="text-center text-muted-foreground mb-8">
                Get in touch with our investor relations desk
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                </div>
                <Input placeholder="Organization" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your message" rows={5} />
                <Button variant="hero" className="w-full" size="lg">
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
