import ScrollReveal from "@/components/ui/ScrollReveal";
import { BookOpen, Laptop, Mic, Coffee, Bus, Monitor, HeartPulse, TrendingUp, Users, Briefcase, Award, DollarSign, Globe, Zap } from "lucide-react";

const facilities = [
  { icon: Monitor, title: "Smart Classrooms", desc: "Tech-enabled classrooms with projectors and interactive learning tools for modern education.", img: "Smart+Classrooms" },
  { icon: BookOpen, title: "Library", desc: "A well-stocked library with books, journals, and quiet study zones for focused learning.", img: "Library" },
  { icon: Laptop, title: "Computer Labs", desc: "Modern computer labs with high-speed internet and updated software for practical training.", img: "Computer+Lab" },
  { icon: Mic, title: "Auditorium", desc: "Spacious auditorium for seminars, cultural events, convocations, and industry talks.", img: "Auditorium" },
  { icon: HeartPulse, title: "Sports Area", desc: "Dedicated sports facilities promoting health, teamwork, and an active campus lifestyle.", img: "Sports+Area" },
  { icon: Coffee, title: "Cafeteria", desc: "Hygienic cafeteria serving affordable and diverse meal options for students and staff.", img: "Cafeteria" },
  { icon: Bus, title: "Transport", desc: "Reliable transport service connecting major routes in Dehradun for easy commuting.", img: "Transport" },
];

const placementFeatures = [
  { icon: TrendingUp, title: "In-Campus Training & Placement Cell", desc: "A dedicated on-campus cell actively working to connect students with top employers." },
  { icon: Briefcase, title: "Internships", desc: "Structured internship programmes that give students real-world industry exposure." },
  { icon: Users, title: "Interview Training", desc: "Mock interviews, group discussions, and personality development sessions to prepare you for corporate interviews." },
];

const skillModules = [
  { icon: DollarSign, title: "Accounting", desc: "Practical accounting and finance skills aligned with industry standards." },
  { icon: Globe, title: "Digital Marketing", desc: "Social media, SEO, and digital advertising skills for the modern marketplace." },
  { icon: Mic, title: "Communication", desc: "Spoken English, presentation skills, and professional communication training." },
  { icon: Coffee, title: "Hospitality", desc: "Front-office, food service, and guest relations training for the hospitality sector." },
  { icon: Zap, title: "Entrepreneurship", desc: "Business planning, startup mindset, and entrepreneurship development modules." },
];

const FacilitiesPage = () => (
  <div className="pt-24">
    <section className="navy-gradient py-20 geo-pattern">
      <div className="container mx-auto px-4 text-center">
        <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Campus Life</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-3">Facilities & Training</h1>
        <p className="text-primary-foreground/70 font-body mt-4 max-w-xl mx-auto">Everything you need to learn, grow, and succeed — all within the AIMS campus.</p>
      </div>
    </section>

    {/* Facilities */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-accent text-secondary text-[10px] tracking-[0.3em] uppercase">Infrastructure</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Campus <span className="text-secondary italic">Facilities</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 card-gold-border h-full">
                <img src={`https://placehold.co/400x250/0A1628/C9A84C?text=${f.img}`} alt={f.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <f.icon className="text-secondary" size={20} />
                    <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-body">{f.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Placement & Training */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-accent text-secondary text-[10px] tracking-[0.3em] uppercase">Careers</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Placement <span className="text-secondary italic">&amp; Training</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {placementFeatures.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="navy-gradient rounded-2xl p-8 h-full flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <p.icon className="text-secondary" size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{p.title}</h3>
                <p className="text-primary-foreground/60 text-sm font-body">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Udaan Skill Academy */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-accent text-secondary text-[10px] tracking-[0.3em] uppercase">In-Campus</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Udaan <span className="text-secondary italic">Skill Academy</span></h2>
          <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">Industry-relevant skill development programmes running alongside your degree — free for all AIMS students.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {skillModules.map((s, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-card rounded-xl p-6 border border-border hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 group text-center h-full flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <s.icon className="text-secondary" size={22} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-xs font-body">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default FacilitiesPage;
