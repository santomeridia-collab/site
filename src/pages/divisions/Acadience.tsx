import { useState, useRef, useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Brain, Rocket, Trophy } from "lucide-react";
import heroImg from "@/assets/slides/Data-Science-and-AI-Course-Road-to-Success.png";

const CourseDetailDialog = ({ course, isOpen, onClose }: { course: any; isOpen: boolean; onClose: () => void }) => {
  if (!course) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{course.title}</DialogTitle>
          <DialogDescription>In-depth details about the {course.title} program.</DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <p className="text-lg font-semibold">Program Summary</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Level</p>
              <p className="font-medium text-primary">{course.level}</p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium text-primary">{course.duration}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground italic">
            This comprehensive program covers fundamental concepts, practical real-world projects,
            and prepares you for industry certification in this domain.
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
            <li>Expert-led live sessions</li>
            <li>Dedicated project mentorship</li>
            <li>Lifetime access to course materials</li>
          </ul>
        </div>
        <Button className="w-full">Enroll Now</Button>
      </DialogContent>
    </Dialog>
  );
};

const Acadience = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsHeroVisible(true); },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLearnMoreClick = (course: any) => { setSelectedCourse(course); setIsModalOpen(true); };
  const handleCloseModal = () => { setIsModalOpen(false); setSelectedCourse(null); };

  const courses = [
    { title: "AI & Machine Learning", level: "Advanced", duration: "6 months" },
    { title: "Full Stack Development", level: "Intermediate", duration: "4 months" },
    { title: "Cybersecurity Fundamentals", level: "Beginner", duration: "3 months" },
    { title: "Data Science & Analytics", level: "Intermediate", duration: "5 months" },
    { title: "Cloud Computing", level: "Advanced", duration: "4 months" },
    { title: "UI/UX Design", level: "Beginner", duration: "3 months" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section ref={heroRef} className="min-h-[92vh] flex items-center bg-[#141e26] overflow-hidden">
          <div className="w-full flex flex-col md:flex-row items-center px-5 md:px-8 lg:px-14 py-12 md:py-16 gap-8 md:gap-12">

            {/* Left — text */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.0] transition-all duration-1000 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                SantoMeridia<br />
                <span className="text-[#159ab7]">Institute</span><br />
                of Technology
              </h1>
              <p className={`text-white/70 text-lg font-semibold max-w-sm leading-snug transition-all duration-1000 delay-200 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Empowering Future Technologists with Industry-Ready Skills
              </p>
              <div className={`transition-all duration-1000 delay-400 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <button
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#159ab7] hover:bg-[#1e5067] text-white px-8 py-3 text-sm font-bold rounded-full transition-colors duration-300"
                >
                  Explore Courses
                </button>
              </div>
            </div>

            {/* Right — contained image */}
            <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <img
                src={heroImg}
                alt="SMIT"
                className="w-full min-h-[40vh] md:min-h-full h-[460px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Brain, title: "Industry-Ready Skills", desc: "Curriculum designed with input from leading tech companies" },
                { icon: Rocket, title: "Career Support", desc: "Placement assistance and mentorship programs" },
                { icon: Trophy, title: "Recognized Certifications", desc: "Industry-recognized certificates upon completion" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-8 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#159ab7]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-[#159ab7]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#141e26]">{title}</h3>
                  <p className="text-[#1e5067]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#141e26]">Popular Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {courses.map((course, index) => (
                <div key={index} className="p-6 rounded-xl bg-white border border-[#159ab7] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-3 text-[#141e26]">{course.title}</h3>
                  <div className="flex gap-3 text-sm mb-4">
                    <span className={`px-3 py-1 rounded-full font-medium ${
                      course.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                      course.level === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                      'bg-green-100 text-green-700'
                    }`}>{course.level}</span>
                    <span className="text-[#1e5067]">{course.duration}</span>
                  </div>
                  <Button className="w-full bg-[#159ab7] hover:bg-[#1e5067]" onClick={() => handleLearnMoreClick(course)}>
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <CourseDetailDialog course={selectedCourse} isOpen={isModalOpen} onClose={handleCloseModal} />
      <Footer />
    </div>
  );
};

export default Acadience;
