import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";
import { site } from "@/config/site";
import {
  GraduationCap, Users, Award, BookOpen, Building2, Globe,
  Briefcase, Calendar, ArrowRight, ChevronRight, Play,
  Laptop, FlaskConical, BarChart3, Wallet, CheckCircle2
} from "lucide-react";

const stats = [
  { value: 4, suffix: "+", label: "Courses Offered", icon: BookOpen },
  { value: 100, suffix: "%", label: "Practical Learning", icon: Briefcase },
  { value: 25, suffix: "%", label: "Scholarship Available", icon: Award },
  { value: 10, suffix: "+", label: "Modern Facilities", icon: Building2 },
];

const courses = [
  { name: "B.A", desc: "Bachelor of Arts", icon: Briefcase, duration: "3 Years" },
  { name: "Hotel Management", desc: "Diploma in Hotel Management", icon: Laptop, duration: "1 Year" },
  { name: "B.Com", desc: "Bachelor of Commerce", icon: Wallet, duration: "3 Years" },
  { name: "Fashion Designing", desc: "Diploma in Fashion Designing", icon: FlaskConical, duration: "1 Year" },
];

const whyChoose = [
  { icon: BookOpen, title: "Industry-guided Curriculum", desc: "Programs designed in consultation with industry experts to ensure career-ready skills." },
  { icon: Users, title: "Small Class Sizes", desc: "Personal attention and mentorship with small batch sizes for focused learning." },
  { icon: Briefcase, title: "Live Projects & Internship Exposure", desc: "Hands-on experience through live projects and internships with top organisations." },
  { icon: Award, title: "Ethics-driven Education", desc: "Career mentoring rooted in values, integrity, and responsible leadership." },
];



import udaan1 from "@/assets/fest_collection/Udaan_ (121).jpeg";

const news = [
  { date: "Mar 10", title: "Annual Fest 'Udaan'", desc: "Three days of innovation, competitions, and cultural celebrations.", img: udaan1 },
  { date: "Feb 28", title: "AIMS Signs MoU with Global Corp", desc: "New internship pipeline for management students.", img: "https://placehold.co/100x100/0A1628/C9A84C?text=2" },
  { date: "Feb 15", title: "National Seminar on AI & Business", desc: "Leading researchers and industry experts in attendance.", img: "https://placehold.co/100x100/0A1628/C9A84C?text=3" },
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



      {/* ADMISSION CTA - Asymmetric */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="navy-gradient rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 geo-pattern opacity-20" />
                <div className="relative z-10">
                  <span className="font-accent text-secondary text-[10px] tracking-[0.3em] uppercase">Admissions 2026–27</span>
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
                  "Industry-guided curriculum & small class sizes",
                  "In-campus Training & Placement Cell",
                  "Udaan Skill Academy — Accounting, Digital Marketing & more",
                  "Smart classrooms, Library, Computer Labs & Auditorium",
                  "Transport, Cafeteria & Sports Area on campus",
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
                  <img src={news[0].img} alt={news[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
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
