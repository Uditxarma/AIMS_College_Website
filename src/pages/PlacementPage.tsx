import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionDivider from "@/components/ui/SectionDivider";
import { TrendingUp, Building, Users, Award } from "lucide-react";

const placementStats = [
  { value: 95, suffix: "%", label: "Placement Rate" },
  { value: 150, suffix: "+", label: "Recruiting Companies" },
  { value: 8, suffix: "LPA", label: "Highest Package" },
  { value: 4.5, suffix: "LPA", label: "Average Package" },
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




  </div>
);

export default PlacementPage;
