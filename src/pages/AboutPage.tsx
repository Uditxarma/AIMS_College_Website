import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";
import { Target, Eye, Award } from "lucide-react";
import chairmanImg from "@/assets/chairman.jpeg";
import mdImg from "@/assets/managing-director.jpeg";

const leaders = [
  { name: "Pushpendra Tyagi", role: "Chairman", img: chairmanImg },
  { name: "Krishnanand Shah", role: "Managing Director", img: mdImg },
];

const AboutPage = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="navy-gradient py-20 geo-pattern relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">About Us</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-3">Our Story & Vision</h1>
        <p className="text-primary-foreground/60 font-body mt-4 max-w-2xl mx-auto">Established in 2026, AIMS is committed to empowering youth with practical education, a global outlook, and ethical leadership.</p>
      </div>
    </section>

    {/* History */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-6">Our <span className="text-secondary">Journey</span></h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Established in 2026 in Sahaspur, Dehradun, Achiever's Institute of Management and Science (AIMS) was founded with a bold vision: to bridge the gap between traditional learning and the real-world skills today's economy demands.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                AIMS focuses on skill-based, employment-ready education — nurturing students into confident professionals, innovative thinkers, and responsible leaders who can build their own future and contribute meaningfully to society.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border-4 border-secondary/20 shadow-2xl">
              <img src="https://placehold.co/600x400/0A1628/C9A84C?text=AIMS+Campus" alt="AIMS Campus" className="w-full h-80 object-cover" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <SectionDivider />

    {/* Vision Mission */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border h-full">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Eye className="text-secondary" size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To build an institution that creates capable, confident, and self-reliant individuals — equipped with practical skills, a global outlook, and ethical leadership values to succeed in the real world.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border h-full">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Target className="text-secondary" size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To empower youth with practical, industry-oriented education that focuses on employability and entrepreneurship — creating not just job seekers, but job creators.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Accreditations */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Recognition</span>
          <h2 className="section-heading mt-3 mb-8 gold-underline">Accreditations & Affiliations</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {["UGC", "AICTE", "Govt. of Uttarakhand", "ISO 9001"].map((name) => (
              <div key={name} className="w-32 h-28 rounded-xl bg-muted flex items-center justify-center border border-border px-3">
                <div className="text-center">
                  <Award className="text-secondary mx-auto mb-1" size={24} />
                  <span className="font-accent text-xs text-foreground">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    <SectionDivider />

    {/* Leadership */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Leadership</span>
            <h2 className="section-heading mt-3 gold-underline">Our Visionaries</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="bg-card rounded-xl overflow-hidden shadow-sm border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-300 text-center">
                <img src={leader.img} alt={leader.name} className="w-full h-80 object-cover object-top" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground">{leader.name}</h3>
                  <p className="text-secondary text-sm font-body mt-1">{leader.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
