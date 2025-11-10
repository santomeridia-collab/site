import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Lightbulb, Users, Shield } from "lucide-react";

const Careers = () => {
  // const jobs = [
  //   { title: "Senior Software Engineer", division: "AZYRA", location: "Kerala, India" },
  //   { title: "Educational Content Developer", division: "ACADIENCE", location: "Remote" },
  //   { title: "Tutor Coordinator", division: "CENTORA", location: "Kerala, India" },
  //   { title: "Research Scientist", division: "CATALYSTA", location: "Kerala, India" },
  //   { title: "UI/UX Designer", division: "AZYRA", location: "Hybrid" },
  //   { title: "Marketing Manager", division: "Corporate", location: "Kerala, India" },
  // ];

  const values = [
    { icon: Lightbulb, title: "Curiosity", description: "We question, explore, and never stop learning" },
    { icon: Heart, title: "Impact", description: "Every project serves a greater purpose" },
    { icon: Users, title: "Collaboration", description: "Together, we achieve the extraordinary" },
    { icon: Shield, title: "Integrity", description: "Ethics and transparency guide our actions" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Shape Tomorrow, With Us.
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Innovation starts with people who care
            </p>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Culture & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group p-6 rounded-xl bg-card border border-border shadow-card hover-lift text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        {/* <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">Open Positions</h2>
              <p className="text-center text-muted-foreground mb-8">
                Find your perfect role across our divisions
              </p>

              <div className="mb-6">
                <Select>
                  <SelectTrigger className="w-full md:w-64">
                    <SelectValue placeholder="Filter by Division" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Divisions</SelectItem>
                    <SelectItem value="acadience">ACADIENCE</SelectItem>
                    <SelectItem value="centora">CENTORA</SelectItem>
                    <SelectItem value="azyra">AZYRA</SelectItem>
                    <SelectItem value="catalysta">CATALYSTA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                      <div className="flex gap-3 text-sm text-muted-foreground">
                        <span className="font-medium text-primary">{job.division}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <Button variant="cta">Apply Now</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* General Application */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Didn't Find Your Role?</h2>
              <p className="text-center text-muted-foreground mb-8">
                Submit your resume and we'll keep you in mind for future opportunities
              </p>

              <form className="space-y-4">
                <Input placeholder="Full Name" />
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Phone Number" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Area of Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="research">Research</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Tell us about yourself and why you'd like to join Santomeridia" rows={5} />
                <Button variant="hero" className="w-full" size="lg">
                  Submit Application
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

export default Careers;
