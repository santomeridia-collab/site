import { useState, useRef, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookOpen, Users, Star, Award } from "lucide-react";
import heroImg from "@/assets/slides/learning.jpeg";

const Centora = () => {
  const [studentName, setStudentName] = useState("");
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
        <section ref={heroRef} className="min-h-[92vh] flex items-center bg-[#141e26] overflow-hidden">
          <div className="w-full flex flex-col md:flex-row items-center px-5 md:px-8 lg:px-14 py-12 md:py-16 gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.0] transition-all duration-1000 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                SentoMeridia<br />
                <span className="text-[#159ab7]">Institute</span><br />
                of Learning
              </h1>
              <p className={`text-white/70 text-lg font-semibold max-w-sm leading-snug transition-all duration-1000 delay-200 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Nurturing Bright Minds
              </p>
              <p className={`text-white/50 text-base max-w-md leading-relaxed transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Personalized tutoring and academic support to help students from grades 1-12 achieve their full potential
              </p>
              <div className={`transition-all duration-1000 delay-400 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <button
                  onClick={() => document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#159ab7] hover:bg-[#1e5067] text-white px-8 py-3 text-sm font-bold rounded-full transition-colors duration-300"
                >
                  Explore Subjects
                </button>
              </div>
            </div>
            <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <img src={heroImg} alt="SMILE" className="w-full min-h-[40vh] md:min-h-full h-[460px] object-cover" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-[#159ab7]/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#159ab7]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#141e26]">Expert Tutors</h3>
                <p className="text-[#1e5067]">
                  Qualified educators passionate about student success
                </p>
              </div>

              <div className="text-center p-8 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-[#159ab7]/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-[#159ab7]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#141e26]">
                  Personalized Learning
                </h3>
                <p className="text-[#1e5067]">
                  Customized study plans based on individual needs
                </p>
              </div>

              <div className="text-center p-8 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-[#159ab7]/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#159ab7]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#141e26]">Proven Results</h3>
                <p className="text-[#1e5067]">
                  Consistent improvement in grades and confidence
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="subjects" className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#141e26]">
              Subjects We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border border-[#159ab7] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#141e26]">
                    {subject.name}
                  </h3>
                  <p className="text-[#1e5067]">
                    Grades {subject.grades}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parent Dashboard CTA */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-12 rounded-2xl bg-gradient-to-br from-[#141e26] to-[#159ab7] text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Track Your Child's Progress
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Access our parent dashboard to monitor attendance, assignments,
                and improvements
              </p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-[#159ab7] hover:bg-[#cbd8df]">
                    Track Progress
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-md rounded-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">
                      Track Student Progress
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6 mt-4">
                    <Input
                      placeholder="Enter student name"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="h-12 text-lg"
                    />

                    <Button
                      className="w-full h-12 text-lg"
                      disabled={!studentName.trim()}
                    >
                      View Progress
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Centora;
