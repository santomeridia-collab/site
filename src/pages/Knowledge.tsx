import { useState, useRef, useEffect, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, FileText, Newspaper } from "lucide-react";
import heroImg from "@/assets/slides/Knowledge.png";
import heroImg2 from "@/assets/slides/research.jpeg";

const Knowledge = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
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

  const featured = [
    {
      title: "The Future of AI in Education",
      category: "SMIT",
      date: "March 15, 2025",
      description: "Exploring how artificial intelligence is transforming the learning experience",
      type: "Research",
    },
    {
      title: "Sustainable Software Development Practices",
      category: "SMS²",
      date: "March 10, 2025",
      description: "Best practices for building environmentally conscious software solutions",
      type: "Case Study",
    },
    {
      title: "Personalized Learning: A Data-Driven Approach",
      category: "SMILE",
      date: "March 5, 2025",
      description: "How adaptive learning systems improve student outcomes",
      type: "Whitepaper",
    },
  ];

  const recent = [
    { title: "Quantum Computing Applications in Research", division: "SMRD", date: "March 1, 2025", type: "Research" },
    { title: "Building Scalable Cloud Infrastructure", division: "SMS²", date: "February 28, 2025", type: "Case Study" },
    { title: "EdTech Trends 2025", division: "SMIT", date: "February 25, 2025", type: "Research" },
    { title: "Early Childhood STEM Education", division: "SMILE", date: "February 20, 2025", type: "Whitepaper" },
    { title: "Ethics in AI Research", division: "SMRD", date: "February 15, 2025", type: "Research" },
    { title: "Mobile-First Learning Platforms", division: "SMIT", date: "February 10, 2025", type: "Case Study" },
  ];

  const normalize = (text: string) => text.toLowerCase();

  const filteredFeatured = useMemo(() => {
    return featured.filter((item) => {
      const matchesSearch =
        normalize(item.title).includes(search) ||
        normalize(item.description).includes(search) ||
        normalize(item.category).includes(search);
      const matchesFilter =
        activeFilter === "All" || item.category === activeFilter || item.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  const filteredRecent = useMemo(() => {
    return recent.filter((item) => {
      const matchesSearch =
        normalize(item.title).includes(search) || normalize(item.division).includes(search);
      const matchesFilter =
        activeFilter === "All" || item.division === activeFilter || item.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

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
                alt="Knowledge Hub"
                className="w-full min-h-[40vh] md:min-h-full h-[480px] object-cover shadow-2xl"
              />
            </div>

            {/* Right — content */}
            <div className="w-full md:w-2/5 space-y-7">

              <div className={`transition-all duration-1000 delay-150 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
                  <span className="text-white">Knowledge</span><br />
                  <span className="text-[#159ab7]">Hub</span>
                </h1>
              </div>

              <p className={`text-base text-white/55 max-w-md leading-relaxed transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Insights, research, and thought leadership from across our divisions
              </p>

              {/* Search */}
              <div className={`transition-all duration-1000 delay-400 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="relative max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search articles, research papers, and case studies..."
                    className="pl-12 h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/25 rounded-none focus:border-[#159ab7] transition-all"
                  />
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-500 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="flex items-center gap-3 border border-white/25 text-white px-7 py-3 text-sm font-semibold rounded-full hover:bg-[#159ab7] hover:border-[#159ab7] transition-all duration-300"
                >
                  Explore All <span>→</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-[#141e26]">Featured Research</h2>
            {filteredFeatured.length === 0 && <p className="text-[#1e5067]">No matching content found.</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredFeatured.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#159ab7]/20 to-[#9ac5d3]/20 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-[#159ab7]" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-3 py-1 rounded-full bg-[#159ab7]/10 text-[#159ab7] font-medium">
                        {item.category}
                      </span>
                      <span className="text-[#1e5067]">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#141e26] group-hover:text-[#159ab7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#1e5067]">{item.description}</p>
                    <button className="text-[#159ab7] font-semibold hover:text-[#1e5067] transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters + Recent */}
        <section className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-wrap gap-2 mb-10">
              {["All", "SMIT", "SMS²", "SMILE", "SMRD", "Whitepaper", "Case Study", "Research"].map((filter) => (
                <Button
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "bg-[#159ab7] text-white hover:bg-[#1e5067]"
                      : "bg-white text-[#159ab7] border border-[#159ab7] hover:bg-[#159ab7] hover:text-white"
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-[#141e26]">Recent Publications</h2>
            {filteredRecent.length === 0 && <p className="text-[#1e5067]">No matching content found.</p>}
            <div className="space-y-4">
              {filteredRecent.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border border-[#159ab7] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-[#159ab7]/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-[#159ab7]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#141e26]">{item.title}</h3>
                      <div className="flex gap-3 text-sm text-[#1e5067]">
                        <span className="text-[#159ab7] font-medium">{item.division}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-transparent text-[#159ab7] hover:bg-[#159ab7] hover:text-white border border-[#159ab7]">
                    View Article
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">
            <Newspaper className="h-16 w-16 text-[#159ab7] mx-auto" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141e26]">Stay Informed</h2>
            <p className="text-lg text-[#1e5067]">
              Subscribe to our newsletter for the latest research, insights, and innovations
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-[#9ac5d3] focus:border-[#159ab7]"
              />
              <Button className="bg-[#159ab7] hover:bg-[#1e5067] text-white">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Knowledge;
