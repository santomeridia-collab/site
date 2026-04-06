import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import heroImg from "@/assets/slides/Contact Us.png";

const Contact = () => {
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
                alt="Contact"
                className="w-full min-h-[40vh] md:min-h-full h-[580px] object-cover shadow-2xl"
              />
            </div>

            {/* Right — text content */}
            <div className="w-full md:w-2/5 space-y-7">

              {/* Headline */}
              <div className={`transition-all duration-1000 delay-150 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
                  <span className="text-white">Let's Build</span><br />
                  <span className="text-[#159ab7]">the Future,</span><br />
                  <span className="text-white">Together</span>
                </h1>
              </div>

              {/* Description */}
              <p className={`text-base text-white/55 max-w-md leading-relaxed transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                We're here to answer your questions and explore collaboration opportunities
              </p>

              {/* CTA */}
              <div className={`transition-all duration-1000 delay-500 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-3 border border-white/25 text-white px-7 py-3 text-sm font-semibold rounded-full hover:bg-[#159ab7] hover:border-[#159ab7] transition-all duration-300"
                >
                  Get In Touch <span>→</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Form & Info */}
        <section id="contact-form" className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#141e26]">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="border-[#9ac5d3] focus:border-[#159ab7]" />
                    <Input placeholder="Last Name" className="border-[#9ac5d3] focus:border-[#159ab7]" />
                  </div>
                  <Input type="email" placeholder="Email Address" className="border-[#9ac5d3] focus:border-[#159ab7]" />
                  <Input placeholder="Phone Number" className="border-[#9ac5d3] focus:border-[#159ab7]" />
                  <Select>
                    <SelectTrigger className="border-[#9ac5d3] focus:border-[#159ab7]">
                      <SelectValue placeholder="Division of Interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="smit">SMIT</SelectItem>
                      <SelectItem value="smile">SMILE</SelectItem>
                      <SelectItem value="smss">SMS²</SelectItem>
                      <SelectItem value="smrd">SMRD</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="media">Media</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Your Message" rows={6} className="border-[#9ac5d3] focus:border-[#159ab7]" />
                  <Button className="w-full bg-[#159ab7] hover:bg-[#1e5067] text-white" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-[#141e26]">Get In Touch</h2>
                  <p className="text-[#1e5067] mb-8">
                    Whether you're looking to partner, invest, or simply learn more about
                    Santomeridia, we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#159ab7]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#159ab7]" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-[#141e26]">Email</div>
                      <a
                        href="mailto:infohub@santomeridia.com"
                        className="text-[#1e5067] hover:text-[#159ab7] transition-colors duration-300"
                      >
                        infohub@santomeridia.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#159ab7]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#159ab7]" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-[#141e26]">Phone</div>
                      <span className="text-[#1e5067]">+91 9745905095</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#159ab7]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#159ab7]" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-[#141e26]">Headquarters</div>
                      <p className="text-[#1e5067]">
                        Santomeridia Research Labs Pvt. Ltd,<br />
                        Second Floor, KC Arcade, Near TV Centre,<br />
                        CSEZ (P.O), Kakkanad, Ernakulam, 682037
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20 bg-[#9ac5d3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#159ab7]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.114248687514!2d76.3424687!3d10.008797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0ed9f41e77%3A0x6aef6f9e1a9e0a2b!2s10%C2%B000'31.7%22N%2076%C2%B020'32.9%22E!5e0!3m2!1sen!2sin!4v1730436500000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* 🌍 Global Communication */}
        <section className="py-20 bg-[#cbd8df]">
          <div className="container mx-auto px-4 max-w-6xl text-center space-y-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#141e26]">🌍 Global Communication</h2>
            <div className="space-y-4">
              <p className="text-lg text-[#1e5067]">
                {/* Website: <a href="https://www.santomeridia.com" className="text-[#159ab7] hover:underline">www.santomeridia.com</a><br /> */}
                General Email: <a href="mailto:infohub@santomeridia.com" className="text-[#159ab7] hover:underline">infohub@santomeridia.com</a>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 rounded-xl bg-white border border-[#9ac5d3] shadow-lg">
                <h3 className="text-2xl font-bold mb-3 text-[#141e26]">🇮🇳 India Office</h3>
                <p className="text-[#1e5067]">
                  <strong>Santomeridia Research Labs Pvt. Ltd.</strong><br />
                  Head Office: Kerala, India<br />
                  ✉ <a href="mailto:in.infohub@santomeridia.com" className="text-[#159ab7] hover:underline">in.infohub@santomeridia.com</a>
                </p>
              </div>

              {/* <div className="p-6 rounded-xl bg-white border border-[#9ac5d3] shadow-lg">
                {/* <h3 className="text-2xl font-bold mb-3 text-[#141e26]">🇬🇧 United Kingdom Office</h3> */}
              <p className="text-[#1e5067]">
                {/* <strong>Santomeridia Research Labs Ltd.</strong> (in progress)<br /> */}
                {/* International Liaison: London, United Kingdom<br /> */}
                {/* ✉ <a href="mailto:uk.infohub@santomeridia.com" className="text-[#159ab7] hover:underline">uk.infohub@santomeridia.com</a> */}
              </p>
              {/* </div> */}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4 text-[#141e26]">🔗 Connect With Us</h3>
              <div className="flex justify-center gap-6">
                <a href="#" className="text-[#1e5067] hover:text-[#159ab7] transition-colors duration-300"><Linkedin className="h-6 w-6" /></a>
                <a href="#" className="text-[#1e5067] hover:text-[#159ab7] transition-colors duration-300"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-[#1e5067] hover:text-[#159ab7] transition-colors duration-300"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="text-[#1e5067] hover:text-[#159ab7] transition-colors duration-300"><Youtube className="h-6 w-6" /></a>
              </div>
              <p className="text-sm text-[#1e5067] mt-4">Handles to be added once finalized</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
