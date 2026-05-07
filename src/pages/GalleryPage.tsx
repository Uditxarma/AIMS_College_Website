import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { X } from "lucide-react";

import sports1 from "@/assets/sports/Sports_ (1).jpeg";
import sports2 from "@/assets/sports/Sports_ (2).jpeg";
import sports3 from "@/assets/sports/Sports_ (3).jpeg";
import udaan1 from "@/assets/fest_collection/Udaan_ (1).jpeg";
import udaan2 from "@/assets/fest_collection/Udaan_ (2).jpeg";
import udaan3 from "@/assets/fest_collection/Udaan_ (3).jpeg";
import achievements1 from "@/assets/fest_collection/awards_1.jpeg";
import achievements2 from "@/assets/fest_collection/awards_2.jpeg";

const categories = ["All", "Events", "Campus", "Achievements", "Sports"];

const photos = [
  { cat: "Events", label: "Annual Fest Udaan", img: udaan1 },
  { cat: "Campus", label: "Main Building", img: "https://placehold.co/400x300/0A1628/C9A84C?text=Main+Building" },
  { cat: "Achievements", label: "Award Ceremony", img: achievements1 },
  { cat: "Sports", label: "Cricket Tournament", img: sports1 },
  { cat: "Events", label: "Udaan Celebration", img: udaan2 },
  { cat: "Campus", label: "Library", img: "https://placehold.co/400x300/0A1628/C9A84C?text=Library" },
  { cat: "Achievements", label: "Topper Felicitation", img: achievements2 },
  { cat: "Sports", label: "Badminton", img: sports2 },
  { cat: "Events", label: "Udaan Night", img: udaan3 },
  { cat: "Campus", label: "Cafeteria", img: "https://placehold.co/400x300/0A1628/C9A84C?text=Cafeteria" },
  { cat: "Events", label: "Convocation", img: "https://placehold.co/400x300/0A1628/C9A84C?text=Convocation" },
  { cat: "Sports", label: "Cricket", img: sports3 },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? photos : photos.filter((p) => p.cat === filter);

  return (
    <div className="pt-24">
      <section className="navy-gradient py-20 geo-pattern">
        <div className="container mx-auto px-4 text-center">
          <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Memories</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-3">Photo Gallery</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary/10"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <ScrollReveal key={`${p.img}-${i}`} delay={i * 50}>
                <div
                  className="rounded-xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightbox(p.img)}
                >
                  <img src={p.img} alt={p.label} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-end p-4">
                    <span className="text-primary-foreground font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{p.label}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Video Section */}
          <div className="mt-16">
            <h3 className="section-heading text-center mb-8 gold-underline">Campus Videos</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {["Campus Tour", "Student Life"].map((title) => (
                <div key={title} className="rounded-xl overflow-hidden bg-muted aspect-video flex items-center justify-center border border-border">
                  <span className="font-body text-muted-foreground">▶ {title} Video</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-primary/90 backdrop-blur-sm flex items-center justify-center animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground">
            <X size={28} />
          </button>
          <img src={lightbox} alt="Gallery" className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl" />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
