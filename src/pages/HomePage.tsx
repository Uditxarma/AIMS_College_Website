import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";
import { site } from "@/config/site";
import {
  GraduationCap, Users, Award, BookOpen, Building2, Globe,
  Briefcase, Star, Calendar, ArrowRight, ChevronRight, Play,
  Laptop, FlaskConical, BarChart3, Wallet, Quote, CheckCircle2
} from "lucide-react";

const stats = [
  { value: 4, suffix: "+", label: "Courses Offered", icon: BookOpen },
  { value: 100, suffix: "%", label: "Practical Learning", icon: Briefcase },
  { value: 25, suffix: "%", label: "Scholarship Available", icon: Award },
  { value: 10, suffix: "+", label: "Modern Facilities", icon: Building2 },
];

const courses = [
  { name: "BBA", desc: "Bachelor of Business Administration", icon: Briefcase, duration: "3 Years" },
  { name: "BCA", desc: "Bachelor of Computer Applications", icon: Laptop, duration: "3 Years" },
  { name: "B.Com", desc: "Bachelor of Commerce", icon: Wallet, duration: "3 Years" },
  { name: "B.Sc", desc: "Bachelor of Science", icon: FlaskConical, duration: "3 Years" },
];

const whyChoose = [
  { icon: Users, title: "Practical Education", desc: "Skill-based learning focused on real-world employability." },
  { icon: Building2, title: "Modern Campus", desc: "Well-equipped labs, library, and smart classrooms in Dehradun." },
  { icon: Globe, title: "Global Outlook", desc: "Curriculum designed to prepare you for global opportunities." },
  { icon: Award, title: "Scholarships", desc: "Up to 25% tuition fee waiver for eligible students." },
];

const testimonials = [
  { name: "Priya Sharma", course: "MBA 2023", text: "AIMS transformed my career trajectory. The industry exposure and faculty mentorship were unmatched.", rating: 5 },
  { name: "Rahul Verma", course: "BCA 2022", text: "The tech labs and placement cell helped me land my dream job at a top MNC before graduation.", rating: 5 },
  { name: "Anjali Patel", course: "B.Com 2024", text: "From the campus culture to placement support, AIMS exceeded all my expectations.", rating: 5 },
];

const news = [
  { date: "Mar 10", title: "Annual Tech Fest 'Innovate 2025'", desc: "Three days of innovation, competitions, and industry talks." },
  { date: "Feb 28", title: "AIMS Signs MoU with Global Corp", desc: "New internship pipeline for management students." },
  { date: "Feb 15", title: "National Seminar on AI & Business", desc: "Leading researchers and industry experts in attendance." },
];

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* HERO - Split screen design */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-32 lg:py-20 bg-background relative">
          <div className="absolute top-0 left-0 w-full h-1 gold-gradient" />
          <span className="font-accent text-secondary text-[10px] tracking-[0.4em] uppercase mb-6 block animate-fade-in-up">
            EST. {site.established} — DEHRADUN, UTTARAKHAND
          </span>
          <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Shape Your
            <span className="block text-secondary italic">Future at AIMS</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg font-body max-w-md mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {site.hero.sub}
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/admissions">
              <Button variant="gold" size="lg" className="rounded-lg">Apply Now <ArrowRight size={16} /></Button>
            </Link>
            <Button variant="gold-outline" size="lg" className="rounded-lg">Download Brochure</Button>
          </div>

          {/* Mini stats inline */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {[
              { val: "4+", label: "Courses" },
              { val: "25%", label: "Scholarship" },
              { val: "100%", label: "Practical" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-display text-2xl font-bold text-secondary">{s.val}</p>
                <p className="text-muted-foreground text-xs font-body">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative hidden lg:block navy-gradient">
          <img
            src="https://placehold.co/800x900/0A1628/C9A84C?text=AIMS+Campus"
            alt="AIMS Campus"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
          {/* Floating card */}
          <div className="absolute bottom-12 left-8 right-8 glass-card rounded-xl p-6">
            <p className="text-primary-foreground/80 text-sm font-body italic mb-3">
              "AIMS gave me more than a degree — it gave me direction, purpose, and the confidence to lead."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <GraduationCap size={18} className="text-secondary" />
              </div>
              <div>
                <p className="text-primary-foreground font-body text-sm font-semibold">Priya Sharma</p>
                <p className="text-secondary text-xs font-body">MBA 2023, Now at Deloitte</p>
              </div>
            </div>
          </div>
          {/* Play button overlay */}
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-secondary/90 flex items-center justify-center hover:bg-secondary transition-colors group">
            <Play size={28} className="text-secondary-foreground ml-1 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </section>

      {/* ABOUT + WHY CHOOSE - Bento grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* About - spans 2 cols */}
              <div className="lg:col-span-2 bg-card rounded-2xl p-8 md:p-10 border border-border">
                <span className="font-accent text-secondary text-[10px] tracking-[0.3em] uppercase">About AIMS</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-5">
                  A Legacy of <span className="text-secondary italic">Excellence</span>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-4 max-w-2xl">
                  Founded in {site.established}, Achiever's Institute of Management and Science (AIMS) is committed to bridging the gap between traditional learning and the real world through skill-based, employment-ready education.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-2xl">
                  Our mission is simple — to nurture confident professionals, innovative thinkers, and responsible leaders who can build their own future and contribute meaningfully to society.
                </p>
                <Link to="/about">
                  <Button variant="navy" className="rounded-lg">
                    Discover Our Story <ChevronRight size={14} />
                  </Button>
                </Link>
              </div>

              {/* Stats card */}
              <div className="navy-gradient rounded-2xl p-8 flex flex-col justify-between">
                <span className="font-accent text-secondary text-[10px] tracking-[0.3em] uppercase">By the Numbers</span>
                <div className="space-y-6 mt-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <stat.icon size={18} className="text-secondary" />
                      </div>
                      <div>
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                        <p className="text-primary-foreground/50 text-xs font-body -mt-1">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why choose - 4 small cards across bottom */}
              {whyChoose.map((item, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="text-secondary" size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COURSES - Horizontal scroll with left heading */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <ScrollReveal>
                <span className="font-accent text-secondary text-[10px] tracking-[0.3em] uppercase">Programs</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-5">
                  Courses That <span className="text-secondary italic">Transform</span>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Industry-aligned programs designed to equip you with the skills, knowledge, and network to thrive in a competitive world.
                </p>
                <Link to="/courses">
                  <Button variant="navy" className="rounded-lg">
                    View All Programs <ArrowRight size={14} />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>

            {/* Right - course cards grid */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {courses.map((course, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="group relative navy-gradient rounded-xl p-6 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 overflow-hidden h-full">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                      <course.icon className="text-secondary mb-3 relative z-10" size={28} />
                      <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">{course.name}</h3>
                      <p className="text-primary-foreground/50 text-sm font-body mb-4">{course.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-secondary/70 text-xs font-body flex items-center gap-1">
                          <Calendar size={12} /> {course.duration}
                        </span>
                        <Link to="/courses" className="text-secondary text-sm font-body hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Details <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* TESTIMONIALS - Large featured layout */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="font-accent text-secondary text-[10px] tracking-[0.3em] uppercase">Voices</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
                What Our <span className="text-secondary italic">Students Say</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Featured testimonial */}
          <ScrollReveal>
            <div className="navy-gradient rounded-2xl p-8 md:p-12 mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Quote className="text-secondary/20 mb-4" size={48} />
              <p className="text-primary-foreground/80 font-display text-xl md:text-2xl italic leading-relaxed max-w-3xl mb-6">
                "{testimonials[0].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                  <span className="font-accent text-secondary-foreground text-sm font-bold">PS</span>
                </div>
                <div>
                  <p className="text-primary-foreground font-body font-semibold">{testimonials[0].name}</p>
                  <p className="text-secondary text-sm font-body">{testimonials[0].course}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="text-secondary fill-secondary" />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Other testimonials */}
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.slice(1).map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card rounded-xl p-6 border border-border hover:border-secondary/20 transition-all duration-300 h-full">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="font-accent text-secondary text-[10px] font-bold">{t.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-secondary text-xs font-body">{t.course}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION CTA - Asymmetric */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="navy-gradient rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 geo-pattern opacity-20" />
                <div className="relative z-10">
                  <span className="font-accent text-secondary text-[10px] tracking-[0.3em] uppercase">Admissions 2025–26</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-4">
                    Your Future <span className="text-secondary italic">Starts Here</span>
                  </h2>
                  <p className="text-primary-foreground/60 font-body mb-8">
                    {site.announcement}. Limited seats — secure your place at AIMS today.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/admissions">
                      <Button variant="gold" size="lg" className="rounded-lg">Apply Now <ArrowRight size={16} /></Button>
                    </Link>
                    <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="gold-outline" size="lg" className="rounded-lg">WhatsApp Enquiry</Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "25% tuition fee waiver scholarship",
                  "Practical, industry-oriented curriculum",
                  "Skill-based learning for employability",
                  "Modern labs, library & Wi-Fi campus",
                  "Hostel facility for boys & girls",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-secondary/20 transition-colors">
                    <CheckCircle2 size={20} className="text-secondary shrink-0" />
                    <span className="font-body text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* NEWS & EVENTS - Magazine style */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="font-accent text-secondary text-[10px] tracking-[0.3em] uppercase">Updates</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
                  News & <span className="text-secondary italic">Events</span>
                </h2>
              </div>
              <Link to="/events" className="hidden md:flex items-center gap-1 text-secondary font-body text-sm hover:underline">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-5">
            {/* Featured large */}
            <ScrollReveal className="md:col-span-7">
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/20 transition-all duration-300 group h-full">
                <div className="h-64 relative overflow-hidden">
                  <img src="https://placehold.co/700x300/0A1628/C9A84C?text=Tech+Fest+2025" alt={news[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-xs font-body font-semibold flex items-center gap-1">
                    <Calendar size={12} />
                    {news[0].date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">{news[0].title}</h3>
                  <p className="text-muted-foreground text-sm font-body mb-4">{news[0].desc}</p>
                  <Link to="/events" className="text-secondary text-sm font-body font-medium hover:underline flex items-center gap-1">
                    Read More <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Two stacked */}
            <div className="md:col-span-5 flex flex-col gap-5">
              {news.slice(1).map((item, i) => (
                <ScrollReveal key={i} delay={(i + 1) * 100}>
                  <div className="bg-card rounded-xl p-5 border border-border hover:border-secondary/20 transition-all duration-300 group flex gap-4 h-full">
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img src={`https://placehold.co/100x100/0A1628/C9A84C?text=${i + 2}`} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-secondary text-[10px] font-body font-semibold flex items-center gap-1 mb-1">
                        <Calendar size={10} /> {item.date}
                      </span>
                      <h3 className="font-display text-sm font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors line-clamp-2">{item.title}</h3>
                      <p className="text-muted-foreground text-xs font-body line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
