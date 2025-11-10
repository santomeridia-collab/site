import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, FileText, Newspaper, Search } from "lucide-react";

const Knowledge = () => {
  const featured = [
    {
      title: "The Future of AI in Education",
      category: "ACADIENCE",
      date: "March 15, 2025",
      description: "Exploring how artificial intelligence is transforming the learning experience",
      type: "Research Paper",
    },
    {
      title: "Sustainable Software Development Practices",
      category: "AZYRA",
      date: "March 10, 2025",
      description: "Best practices for building environmentally conscious software solutions",
      type: "Case Study",
    },
    {
      title: "Personalized Learning: A Data-Driven Approach",
      category: "CENTORA",
      date: "March 5, 2025",
      description: "How adaptive learning systems improve student outcomes",
      type: "Whitepaper",
    },
  ];

  const recent = [
    { title: "Quantum Computing Applications in Research", division: "CATALYSTA", date: "March 1, 2025" },
    { title: "Building Scalable Cloud Infrastructure", division: "AZYRA", date: "February 28, 2025" },
    { title: "EdTech Trends 2025", division: "ACADIENCE", date: "February 25, 2025" },
    { title: "Early Childhood STEM Education", division: "CENTORA", date: "February 20, 2025" },
    { title: "Ethics in AI Research", division: "CATALYSTA", date: "February 15, 2025" },
    { title: "Mobile-First Learning Platforms", division: "ACADIENCE", date: "February 10, 2025" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Knowledge Hub
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Insights, research, and thought leadership from across our divisions
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search articles, research papers, and case studies..." 
                  className="pl-12 h-14 text-lg bg-background"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Featured Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-card border border-border shadow-card hover-lift overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-primary" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {item.category}
                      </span>
                      <span className="text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="pt-2">
                      <Button variant="link" className="p-0 h-auto">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-8">
                <Button variant="default">All Content</Button>
                <Button variant="outline">ACADIENCE</Button>
                <Button variant="outline">CENTORA</Button>
                <Button variant="outline">AZYRA</Button>
                <Button variant="outline">CATALYSTA</Button>
                <Button variant="outline">Whitepapers</Button>
                <Button variant="outline">Case Studies</Button>
                <Button variant="outline">Research</Button>
              </div>

              <h2 className="text-3xl font-bold mb-8">Recent Publications</h2>
              <div className="space-y-4">
                {recent.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <div className="flex gap-3 text-sm text-muted-foreground">
                          <span className="font-medium text-primary">{item.division}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost">View Article</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Newspaper className="h-16 w-16 text-primary mx-auto" />
              <h2 className="text-4xl font-bold">Stay Informed</h2>
              <p className="text-lg text-muted-foreground">
                Subscribe to our newsletter for the latest research, insights, and innovations
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <Input placeholder="Enter your email" type="email" />
                <Button variant="cta">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Knowledge;
