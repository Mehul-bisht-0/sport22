import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Phone, Mail, Instagram, Facebook, Linkedin, Youtube,
  ChevronDown, MapPin, Calendar, ArrowRight, CheckCircle2,
  MessageCircle, Star, Users, Map, Award, Play
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

// Placeholder images from assets
import heroImg from "@/assets/hero-corporate-sports.jpg";
import badmintonImg from "@/assets/event-badminton.jpg";
import cricketImg from "@/assets/sport-cricket.jpg";
import footballImg from "@/assets/sport-football.jpg";
import padelImg from "@/assets/sport-padel.jpg";
import shuttleImg from "@/assets/detail-shuttle.jpg";
import kitImg from "@/assets/moment-kit.jpg";

export const Route = createFileRoute("/")({
  component: SportsAcademyLanding,
});

function SportsAcademyLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      
      {/* 1. TOP UTILITY BAR */}
      <div className="hidden md:flex bg-surface-2 text-muted-foreground py-2 px-6 text-xs justify-between items-center border-b border-border">
        <div className="flex gap-6">
          <a href="tel:+918527736149" className="flex items-center gap-1.5 hover:text-primary transition">
            <Phone size={14} /> +91 85277 36149
          </a>
          <a href="mailto:sportyzowork@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition">
            <Mail size={14} /> sportyzowork@gmail.com
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition"><Instagram size={14} /></a>
          <a href="#" className="hover:text-primary transition"><Facebook size={14} /></a>
          <a href="#" className="hover:text-primary transition"><Linkedin size={14} /></a>
          <a href="#" className="hover:text-primary transition"><Youtube size={14} /></a>
        </div>
      </div>

      {/* 2. STICKY MAIN NAV */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-background border-b border-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground font-black text-xl shadow-lg shadow-primary/20">S</span>
            <span className="text-2xl font-bold tracking-tight">Sportyzo</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition">About Us</a>
            
            <div className="group relative">
              <button className="flex items-center gap-1 hover:text-primary transition py-2">
                Sports <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              {/* Simple Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 rounded-2xl bg-surface border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Indoor</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="block text-sm hover:text-primary transition">Badminton</a></li>
                    <li><a href="#" className="block text-sm hover:text-primary transition">Table Tennis</a></li>
                    <li><a href="#" className="block text-sm hover:text-primary transition">Squash</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Outdoor</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="block text-sm hover:text-primary transition">Cricket</a></li>
                    <li><a href="#" className="block text-sm hover:text-primary transition">Football</a></li>
                    <li><a href="#" className="block text-sm hover:text-primary transition">Tennis</a></li>
                    <li><a href="#" className="block text-sm hover:text-primary transition">Padel</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <a href="#locations" className="hover:text-primary transition">Our Branches</a>
            <a href="#events" className="hover:text-primary transition">Events</a>
            <a href="#blogs" className="hover:text-primary transition">Blogs</a>
          </nav>

          <a href="https://wa.me/918527736149" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground hover:scale-105 transition shadow-lg shadow-primary/30">
            <MessageCircle size={18} /> Contact Us
          </a>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Sports action" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
        </div>
        
        <div className="mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Enrollments Open for 2026 Batch
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Premier Sports Academy in <span className="text-primary">Gurugram</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Elevate your game with world-class facilities. We operate across <strong className="text-foreground">12+ locations</strong>, offering training in <strong className="text-foreground">8+ sports</strong> by <strong className="text-foreground">50+ certified coaches</strong>.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#join" className="rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:scale-105 transition shadow-xl shadow-primary/30 flex items-center gap-2">
                Enroll Now <ArrowRight size={18} />
              </a>
              <button className="rounded-full border border-border bg-surface/50 px-8 py-4 text-base font-bold backdrop-blur-sm hover:bg-surface transition flex items-center gap-2">
                <Play size={18} className="text-primary" /> Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ANIMATED STATS COUNTER */}
      <section className="relative z-10 -mt-16 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Active Students", value: "2,500+", icon: Users },
            { label: "Locations", value: "12+", icon: Map },
            { label: "5-Star Reviews", value: "1.2k+", icon: Star },
            { label: "Years Experience", value: "5+", icon: Award },
          ].map((stat, i) => (
            <div key={i} className={`bg-surface border border-border rounded-2xl p-6 shadow-xl flex flex-col items-center text-center animate-fade-in-up delay-${(i+1)*100}`}>
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-black text-foreground">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT US */}
      <section id="about" className="py-24 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-border relative z-10">
              <img src={cricketImg} alt="Cricket training" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-2xl p-6 shadow-xl z-20 max-w-xs animate-fade-in-up delay-200">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-primary">10k+</div>
                <div className="text-sm text-muted-foreground font-medium leading-tight">Hours of coaching<br/>delivered yearly</div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in-up">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Who We Are</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4 mb-6 leading-tight">Shaping the future of sports in Gurugram.</h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Sportyzo is not just a facility; it's an ecosystem designed for athletes of all levels. From grassroots development to elite performance training, we provide the infrastructure and expertise to help you achieve your goals.
              </p>
              <p>
                With state-of-the-art arenas across <strong className="text-foreground">Sector 49, 65, and 72</strong>, we bring world-class sports education right to your neighborhood. Our philosophy focuses on holistic development, combining technical skills with physical fitness and mental resilience.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {['BCCI & AIFF Certified Coaches', 'Floodlit Professional Arenas', 'Performance Tracking Tech'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="text-primary" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US GRID */}
      <section className="py-24 bg-surface-2 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">The Sportyzo Advantage</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4">Why Athletes Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Certified Coaches", desc: "Train under former national players and certified experts.", icon: Award },
              { title: "Pro Facilities", desc: "BWF-approved mats, FIFA-grade turf, and premium lighting.", icon: MapPin },
              { title: "Holistic Growth", desc: "Focus on fitness, nutrition, and sports psychology.", icon: Users },
              { title: "Flexible Timings", desc: "Batches running from 6 AM to 10 PM, 7 days a week.", icon: Calendar },
            ].map((feature, i) => (
              <div key={i} className="bg-background rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 group animate-fade-in-up" style={{animationDelay: `${i*100}ms`}}>
                <div className="h-14 w-14 rounded-2xl bg-surface flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SPORTS / PROGRAMS */}
      <section id="sports" className="py-24 mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 animate-fade-in-up">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Programs</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4">Find Your Sport</h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">From beginners to advanced, we have tailored programs for every age and skill level across our network.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Cricket", img: cricketImg, cat: "Outdoor", level: "All Levels" },
            { name: "Football", img: footballImg, cat: "Outdoor", level: "All Levels" },
            { name: "Badminton", img: badmintonImg, cat: "Indoor", level: "All Levels" },
            { name: "Padel", img: padelImg, cat: "Outdoor", level: "Beginner/Pro" },
            { name: "Tennis", img: shuttleImg, cat: "Outdoor", level: "All Levels" },
            { name: "Basketball", img: footballImg, cat: "Indoor", level: "Intermediate" },
            { name: "Table Tennis", img: shuttleImg, cat: "Indoor", level: "All Levels" },
            { name: "Pickleball", img: padelImg, cat: "Outdoor", level: "Beginner" },
          ].map((sport, i) => (
            <a href="#" key={i} className="group relative h-80 rounded-3xl overflow-hidden block border border-border animate-fade-in-up" style={{animationDelay: `${(i%4)*100}ms`}}>
              <img src={sport.img} alt={sport.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex gap-2 mb-3">
                  <span className="bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded backdrop-blur-sm">{sport.cat}</span>
                  <span className="bg-surface/80 text-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded backdrop-blur-sm border border-border">{sport.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{sport.name}</h3>
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 8. PROCESS / PHILOSOPHY */}
      <section className="py-24 bg-surface text-center px-6 relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="mx-auto max-w-5xl animate-fade-in-up">
          <MessageCircle size={48} className="mx-auto text-primary/40 mb-6" />
          <h2 className="text-3xl sm:text-5xl font-display font-medium leading-tight mb-16">
            "We don't just train players; we build athletes who understand the game, respect the process, and push their limits."
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { title: "Assessment", desc: "Initial skill and fitness evaluation to baseline capabilities." },
              { title: "Foundation", desc: "Focusing on core mechanics, footwork, and basic rules." },
              { title: "Development", desc: "Advanced drills, game awareness, and match simulations." },
              { title: "Performance", desc: "Competitive matches, tournament prep, and mental conditioning." },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-primary/10 mb-4 tracking-tighter">0{i+1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOCATIONS */}
      <section id="locations" className="py-24 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Where We Are</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">12+ Locations Across Gurugram</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Sector 49 Arena", addr: "Near Golf Course Ext Rd", sports: "Cricket, Football, Padel" },
            { name: "Sector 65 Hub", addr: "M3M Urbana Vicinity", sports: "Badminton, Tennis" },
            { name: "Sector 72 Complex", addr: "SPR Road", sports: "Football, Basketball, Table Tennis" },
          ].map((loc, i) => (
            <div key={i} className="bg-surface rounded-3xl p-8 border border-border hover:border-primary/50 transition-colors animate-fade-in-up" style={{animationDelay: `${i*100}ms`}}>
              <MapPin className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">{loc.name}</h3>
              <p className="text-muted-foreground mb-6">{loc.addr}</p>
              <div className="bg-background rounded-xl p-4 border border-border">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1 block">Available Sports</span>
                <p className="font-medium text-sm">{loc.sports}</p>
              </div>
              <a href="#" className="mt-6 inline-flex items-center gap-2 text-primary font-bold hover:underline">
                View on Map <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="rounded-full border border-border bg-surface px-8 py-3 font-bold hover:bg-surface-2 transition">
            View All Locations
          </button>
        </div>
      </section>

      {/* 10. HOW TO JOIN */}
      <section id="join" className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black">Ready to step on the field?</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Join our academy in 4 simple steps and start your journey to excellence.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Choose Sport", icon: Award },
              { title: "Visit / Call", icon: Phone },
              { title: "Free Trial", icon: Calendar },
              { title: "Enroll", icon: CheckCircle2 },
            ].map((step, i) => (
              <div key={i} className="bg-background/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/20 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-background/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary-foreground text-primary flex items-center justify-center mb-6 text-2xl font-black shadow-xl">
                    <step.icon size={28} />
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70 mb-2">Step 0{i+1}</div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="https://wa.me/918527736149" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-background px-10 py-5 text-lg font-black text-primary hover:scale-105 transition shadow-2xl">
              <MessageCircle size={24} /> Book Your Free Trial on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-24 mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Got Questions?</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">Frequently Asked Questions</h2>
        </div>
        
        <Accordion.Root type="single" collapsible className="space-y-4">
          {[
            { q: "What age groups do you cater to?", a: "We offer programs for kids starting from age 5, all the way up to adults and senior corporate batches." },
            { q: "Do you provide equipment?", a: "For trial classes, we provide all necessary equipment. Once enrolled, we recommend purchasing your own personal kit, though shared equipment is available." },
            { q: "Can I take a trial class before joining?", a: "Absolutely! We offer a 1-day free trial for all our regular academy batches." },
            { q: "Are the coaches certified?", a: "Yes, all our head coaches hold national or international certifications in their respective sports." },
            { q: "What are your operating hours?", a: "Our facilities are open from 6:00 AM to 12:00 Midnight, seven days a week." },
          ].map((faq, i) => (
            <Accordion.Item key={i} value={`item-${i}`} className="bg-surface border border-border rounded-2xl overflow-hidden data-[state=open]:border-primary/50 transition-colors">
              <Accordion.Header>
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-5 px-6 font-bold text-left w-full hover:text-primary transition-colors [&[data-state=open]>svg]:rotate-180">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-300" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-5 text-muted-foreground overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                {faq.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-surface-2 border-t border-border pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground font-black text-xl">S</span>
              <span className="text-2xl font-bold tracking-tight">Sportyzo</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              The premier destination for sports training, corporate events, and pay-n-play facilities in Gurugram.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-surface border border-border flex items-center justify-center hover:text-primary hover:border-primary transition"><Instagram size={18} /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-surface border border-border flex items-center justify-center hover:text-primary hover:border-primary transition"><Facebook size={18} /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-surface border border-border flex items-center justify-center hover:text-primary hover:border-primary transition"><Youtube size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#sports" className="hover:text-primary transition">Programs</a></li>
              <li><a href="#locations" className="hover:text-primary transition">Venues</a></li>
              <li><a href="#" className="hover:text-primary transition">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Sports</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Cricket</a></li>
              <li><a href="#" className="hover:text-primary transition">Football</a></li>
              <li><a href="#" className="hover:text-primary transition">Badminton</a></li>
              <li><a href="#" className="hover:text-primary transition">Padel</a></li>
              <li><a href="#" className="hover:text-primary transition">Tennis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Sector 49, Sector 65, Sector 72<br/>Gurugram, Haryana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+918527736149" className="hover:text-primary transition">+91 85277 36149</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:sportyzowork@gmail.com" className="hover:text-primary transition">sportyzowork@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dominic Sports Private Limited. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* 13. FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="tel:+918527736149" className="h-14 w-14 bg-surface text-foreground rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition border border-border group relative">
          <Phone size={24} />
          <span className="absolute right-full mr-3 whitespace-nowrap bg-foreground text-background px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">Call Us</span>
        </a>
        <a href="https://wa.me/918527736149" target="_blank" rel="noreferrer" className="h-14 w-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition group relative">
          <MessageCircle size={28} />
          <span className="absolute right-full mr-3 whitespace-nowrap bg-foreground text-background px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
