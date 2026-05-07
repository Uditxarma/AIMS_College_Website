import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionDivider from "@/components/ui/SectionDivider";
import { TrendingUp, Building, Users, Award, Quote } from "lucide-react";

const placementStats = [
  { value: 95, suffix: "%", label: "Placement Rate" },
  { value: 150, suffix: "+", label: "Recruiting Companies" },
  { value: 8, suffix: "LPA", label: "Highest Package" },
  { value: 4.5, suffix: "LPA", label: "Average Package" },
];

const stories = [
  { name: "Arun Mehta", course: "Diploma in HOTEL MANAGEMENT 2026", company: "Regenta Hotel", text: "Best college for hotel management.", img: "Student+1" },
  { name: "Sneha Gupta", course: "B.A 2026", company: "Delloite", text: "Mock interviews and industry visits prepared me for the real world.", img: "Student+2" },
  { name: "Vikram Singh", course: "B.Com 2026", company: "KPMG", text: "AIMS gave me the confidence and skills to compete at the highest level.", img: "Student+3" },
];

const PlacementPage = () => (
  <div className="pt-24">
    <section className="navy-gradient py-20 geo-pattern">
      <div className="container mx-auto px-4 text-center">
        <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Careers</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-3">Placements & Careers</h1>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {placementStats.map((s, i) => (
            <div key={i}>
              <AnimatedCounter end={s.value} suffix={s.suffix} />
              <p className="text-primary-foreground/60 text-sm font-body mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Recruiter Marquee */}
    <section className="py-12 bg-muted overflow-hidden">
      <h3 className="text-center font-display text-xl font-semibold text-foreground mb-8">Our Recruiters</h3>
      <div className="animate-marquee flex gap-12 whitespace-nowrap">
        {[...Array(2)].map((_, j) => (
          <div key={j} className="flex gap-12">
            {["TCS", "Infosys", "Wipro", "Deloitte", "KPMG", "Accenture", "IBM", "Amazon", "Capgemini", "HCL"].map((name) => (
              <div key={name} className="w-32 h-16 bg-card rounded-lg border border-border flex items-center justify-center shrink-0">
                <span className="font-body text-sm font-semibold text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>

    <SectionDivider />

    {/* Success Stories */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-heading gold-underline">Success Stories</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm h-full flex flex-col">
                <Quote className="text-secondary/30 mb-3" size={24} />
                <p className="text-muted-foreground font-body text-sm flex-1 mb-4">{s.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img src={`https://placehold.co/48x48/0A1628/C9A84C?text=${s.img}`} alt={s.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-display font-semibold text-foreground">{s.name}</p>
                    <p className="text-secondary text-xs font-body">{s.course} • {s.company}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default PlacementPage;
