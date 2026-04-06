"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Lightbulb, Users, Shield } from "lucide-react";
import heroImg from "@/assets/slides/careeers.png";
import heroImg2 from "@/assets/slides/pexels-shkrabaanthony-6266990.jpg.jpeg";

const Careers = () => {
  const [selectedDivision, setSelectedDivision] = useState("all");
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
  const jobs = [
    { title: "Senior Software Engineer", division: "SMS²", location: "Kerala, India" },
    { title: "Educational Content Developer", division: "SMIT", location: "Remote" },
  ];

  const values = [
    { icon: Lightbulb, title: "Curiosity", description: "We question, explore, and never stop learning" },
    { icon: Heart, title: "Impact", description: "Every project serves a greater purpose" },
    { icon: Users, title: "Collaboration", description: "Together, we achieve the extraordinary" },
    { icon: Shield, title: "Integrity", description: "Ethics and transparency guide our actions" },
  ];

  const filteredJobs =
    selectedDivision === "all"
      ? jobs
      : jobs.filter(
          (job) => job.division.toLowerCase() === selectedDivision
        );

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
                alt="Careers"
                className="w-full min-h-[40vh] md:min-h-full h-[480px] object-cover shadow-2xl"
              />
            </div>

            {/* Right — content */}
            <div className="w-full md:w-2/5 space-y-7">
              <div className={`transition-all duration-1000 delay-150 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
                  <span className="text-white">Shape</span><br />
                  <span className="text-[#159ab7]">Tomorrow,</span><br />
                  <span className="text-white">With Us</span>
                </h1>
              </div>

              <p className={`text-base text-white/55 max-w-md leading-relaxed transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Join a team where innovation meets purpose, and your work creates lasting impact
              </p>

              <div className={`transition-all duration-1000 delay-500 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <button
                  onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-3 border border-white/25 text-white px-7 py-3 text-sm font-semibold rounded-full hover:bg-[#159ab7] hover:border-[#159ab7] transition-all duration-300"
                >
                  View Open Positions <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#141e26]">Our Culture & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-xl bg-white border border-[#9ac5d3] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#159ab7]/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-[#159ab7]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#141e26]">{value.title}</h3>
                  <p className="text-[#1e5067]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section id="open-positions" className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#141e26]">Open Positions</h2>
              <p className="text-center text-[#1e5067] mb-8">
                Find your perfect role across our divisions
              </p>

              {/* FILTER */}
              <div className="mb-6">
                <Select onValueChange={setSelectedDivision}>
                  <SelectTrigger className="w-full md:w-64 border-[#159ab7] focus:border-[#1e5067]">
                    <SelectValue placeholder="Filter by Division" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Divisions</SelectItem>
                    <SelectItem value="smit">SMIT</SelectItem>
                    <SelectItem value="sms2">SMS²</SelectItem>
                    <SelectItem value="smile">SMILE</SelectItem>
                    <SelectItem value="smrd">SMRD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* JOB LIST */}
              <div className="space-y-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-white border border-[#159ab7] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-1 text-[#141e26]">{job.title}</h3>
                        <div className="flex gap-3 text-sm text-[#1e5067]">
                          <span className="font-medium text-[#159ab7]">
                            {job.division}
                          </span>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <Button className="bg-[#159ab7] hover:bg-[#1e5067] text-white">Apply Now</Button>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-[#1e5067]">
                    No jobs available for this division.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* General Application */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-[#141e26]">
                Didn't Find Your Role?
              </h2>
              <p className="text-center text-[#1e5067] mb-8">
                Submit your resume and we'll keep you in mind
              </p>

              <form className="space-y-4">
                <Input placeholder="Full Name" className="border-[#9ac5d3] focus:border-[#159ab7]" />
                <Input type="email" placeholder="Email Address" className="border-[#9ac5d3] focus:border-[#159ab7]" />
                <Input placeholder="Phone Number" className="border-[#9ac5d3] focus:border-[#159ab7]" />

                <Select>
                  <SelectTrigger className="border-[#9ac5d3] focus:border-[#159ab7]">
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

                <Textarea
                  placeholder="Tell us about yourself"
                  rows={5}
                  className="border-[#9ac5d3] focus:border-[#159ab7]"
                />

                <Button className="w-full bg-[#159ab7] hover:bg-[#1e5067] text-white" size="lg">
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
