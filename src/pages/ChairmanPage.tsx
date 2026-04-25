import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import chairmanImg from "@/assets/chairman.jpeg";
import mdImg from "@/assets/managing-director.jpeg";

const ChairmanPage = () => (
  <div className="pt-24">
    <section className="navy-gradient py-20 geo-pattern">
      <div className="container mx-auto px-4 text-center">
        <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">A Word From</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-3">Chairman's Message</h1>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden border-4 border-secondary/20 shadow-2xl sticky top-32">
                <img src={chairmanImg} alt="Pushpendra Tyagi - Chairman" className="w-full object-contain bg-muted" />
                <div className="bg-primary p-4 text-center">
                  <h3 className="font-display text-lg font-bold text-primary-foreground">Pushpendra Tyagi</h3>
                  <p className="text-secondary text-sm font-body">Chairman, AIMS</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <Quote className="text-secondary/30 mb-4" size={48} />
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-lg">
                <p>At Achiever's Institute of Management & Science (AIMS), we believe that education is not just about degrees — it is about creating capable individuals who can succeed in the real world.</p>
                <p>In today's rapidly evolving environment, traditional learning alone is not sufficient. Students need practical exposure, industry-relevant skills, and the confidence to build their own path. At AIMS, we are committed to bridging this gap by providing skill-based education that focuses on employability and entrepreneurship.</p>
                <p>Our goal is to nurture students into confident professionals, innovative thinkers, and responsible individuals who can contribute meaningfully to society. We aim to create not just job seekers, but job creators.</p>
                <p>I warmly welcome all aspiring students to be a part of AIMS and take the first step towards a successful and self-reliant future.</p>
                <p className="font-display text-foreground font-semibold italic">Warm Regards,</p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-display text-xl font-bold text-foreground">Pushpendra Tyagi</p>
                <p className="text-secondary font-body text-sm">Chairman, AIMS</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Managing Director */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 md:order-1 order-2">
              <Quote className="text-secondary/30 mb-4" size={48} />
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-lg">
                <p>At AIMS, we focus on execution, results, and real outcomes. Our approach is simple — learning should lead to earning.</p>
                <p>We have designed our programs to be practical, industry-oriented, and outcome-driven. Students at AIMS do not just study; they work on real projects, develop real skills, and build real opportunities.</p>
                <p>Our objective is to ensure that every student who joins AIMS gains the ability to either secure a job, start a business, or build a freelance career. We emphasize discipline, consistency, and performance to help students achieve measurable success.</p>
                <p>We believe that success is not given — it is built through the right guidance and consistent effort. At AIMS, we provide both.</p>
                <p>I invite you to join AIMS and become part of a system that is designed to help you grow, earn, and succeed.</p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-display text-xl font-bold text-foreground">Krishnanand Shah</p>
                <p className="text-secondary font-body text-sm">Managing Director, AIMS</p>
              </div>
            </div>
            <div className="md:col-span-2 md:order-2 order-1">
              <div className="rounded-2xl overflow-hidden border-4 border-secondary/20 shadow-2xl sticky top-32">
                <img src={mdImg} alt="Krishnanand Shah - Managing Director" className="w-full object-contain bg-muted" />
                <div className="bg-primary p-4 text-center">
                  <h3 className="font-display text-lg font-bold text-primary-foreground">Krishnanand Shah</h3>
                  <p className="text-secondary text-sm font-body">Managing Director, AIMS</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default ChairmanPage;
