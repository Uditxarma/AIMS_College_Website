import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Calendar, ChevronRight } from "lucide-react";

const categories = ["All", "Events", "News", "Workshops"];

const events = [
  { cat: "Events", date: "Mar 15, 2025", title: "Annual Tech Fest 'Innovate 2025'", desc: "Three days of innovation, coding competitions, and industry talks.", img: "Tech+Fest" },
  { cat: "News", date: "Mar 5, 2025", title: "AIMS Signs MoU with Global Corp", desc: "New internship pipeline opens for management students.", img: "MoU+Signing" },
  { cat: "Workshops", date: "Feb 28, 2025", title: "AI & Business Workshop", desc: "Hands-on workshop on AI applications in modern business.", img: "AI+Workshop" },
  { cat: "Events", date: "Feb 20, 2025", title: "National Sports Meet", desc: "Inter-college sports championship with 30+ participating colleges.", img: "Sports+Meet" },
  { cat: "News", date: "Feb 10, 2025", title: "AIMS Ranked Top 10 in State", desc: "Recognized for academic excellence and placement record.", img: "Ranking" },
  { cat: "Events", date: "Jan 26, 2025", title: "Republic Day Celebration", desc: "Cultural performances and flag hoisting ceremony.", img: "Republic+Day" },
];

const EventsPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? events : events.filter((e) => e.cat === filter);

  return (
    <div className="pt-24">
      <section className="navy-gradient py-20 geo-pattern">
        <div className="container mx-auto px-4 text-center">
          <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Updates</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-3">Events & News</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((e, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 card-gold-border group h-full flex flex-col">
                  <div className="h-48 relative">
                    <img src={`https://placehold.co/400x200/0A1628/C9A84C?text=${e.img}`} alt={e.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-body font-semibold flex items-center gap-1">
                      <Calendar size={12} /> {e.date}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-secondary text-xs font-body font-semibold uppercase">{e.cat}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-secondary transition-colors">{e.title}</h3>
                    <p className="text-muted-foreground text-sm font-body flex-1">{e.desc}</p>
                    <button className="text-secondary text-sm font-body font-medium hover:underline flex items-center gap-1 mt-3">
                      Read More <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
