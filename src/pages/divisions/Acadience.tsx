import { useState } from 'react'; // <--- Import useState
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
// Assuming you have a Dialog/Modal component
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"; 
import { GraduationCap, Brain, Rocket, Trophy, X } from "lucide-react";

// The structure for a course detail popup/modal
const CourseDetailDialog = ({ course, isOpen, onClose }) => {
  if (!course) return null;

  return (
    // 'open' controls visibility, 'onOpenChange' is used to close the dialog
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{course.title}</DialogTitle>
          <DialogDescription>
            In-depth details about the **{course.title}** program.
          </DialogDescription>
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
            {/* Placeholder for more detailed content */}
            This comprehensive program covers fundamental concepts, practical real-world projects, 
            and prepares you for industry certification in this domain. You will work with 
            cutting-edge tools and frameworks.
          </p>
          
          {/* Add more specific details for each course here (if available) */}
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
  // 1. State to hold the course data for the currently open modal
  const [selectedCourse, setSelectedCourse] = useState(null);
  // 2. State to manage the modal's open/closed status
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal and set the selected course
  const handleLearnMoreClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  // Function to close the modal and clear the selected course
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

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
        {/* ... Hero Section (Unchanged) ... */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block p-4 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm mb-6">
              <GraduationCap className="h-16 w-16 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              ACADIENCE
            </h1>
            <p className="text-2xl text-primary-foreground/90 mb-4">
              Empowering Future Technologists
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Professional training programs in cutting-edge technologies designed to upskill 
              and reskill the workforce of tomorrow
            </p>
            <Button variant="hero" size="lg">
              Browse Courses
            </Button>
          </div>
        </section>

        {/* ... Features Section (Unchanged) ... */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Industry-Ready Skills</h3>
                <p className="text-muted-foreground">
                  Curriculum designed with input from leading tech companies
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Career Support</h3>
                <p className="text-muted-foreground">
                  Placement assistance and mentorship programs
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Recognized Certifications</h3>
                <p className="text-muted-foreground">
                  Industry-recognized certificates upon completion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section (Updated) */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Popular Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift"
                >
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <div className="flex gap-3 text-sm text-muted-foreground mb-4">
                    <span className={`px-3 py-1 rounded-full font-medium ${
                        course.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                        course.level === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                      {course.level}
                    </span>
                    <span>{course.duration}</span>
                  </div>
                  {/* UPDATE: Add onClick handler to show the modal */}
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleLearnMoreClick(course)}
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ... Success Stories Section (Unchanged) ... */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Success Stories</h2>
            <p className="text-center text-muted-foreground mb-12">
              Our alumni are thriving at top companies worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Placement Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Alumni</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Partner Companies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-muted-foreground">Student Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Course Detail Modal/Dialog */}
      <CourseDetailDialog 
        course={selectedCourse} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
      
      <Footer />
    </div>
  );
};

export default Acadience;