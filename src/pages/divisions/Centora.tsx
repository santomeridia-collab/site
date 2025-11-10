import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Star, Award } from "lucide-react";

const Centora = () => {
  const subjects = [
    { name: "Mathematics", grades: "1-12" },
    { name: "Science", grades: "1-12" },
    { name: "English", grades: "1-12" },
    { name: "Social Studies", grades: "6-12" },
    { name: "Computer Science", grades: "6-12" },
    { name: "Languages", grades: "1-12" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block p-4 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm mb-6">
              <BookOpen className="h-16 w-16 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              CENTORA
            </h1>
            <p className="text-2xl text-primary-foreground/90 mb-4">
              Nurturing Bright Minds
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Personalized tutoring and academic support to help students from grades 1-12 
              achieve their full potential
            </p>
            <Button variant="hero" size="lg">
              Book a Trial Session
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Tutors</h3>
                <p className="text-muted-foreground">
                  Qualified educators passionate about student success
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Learning</h3>
                <p className="text-muted-foreground">
                  Customized study plans based on individual needs
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">
                  Consistent improvement in grades and confidence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Subjects We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift text-center"
                >
                  <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
                  <p className="text-muted-foreground">Grades {subject.grades}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parent Dashboard CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-12 rounded-2xl gradient-hero text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Track Your Child's Progress
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Access our parent dashboard to monitor attendance, assignments, and improvements
              </p>
              <Button variant="hero" size="lg">
                Access Dashboard
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <div className="text-muted-foreground">Students</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-muted-foreground">Tutors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">92%</div>
                <div className="text-muted-foreground">Improvement Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Parent Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Centora;
