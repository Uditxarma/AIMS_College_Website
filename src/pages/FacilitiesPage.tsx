import ScrollReveal from "@/components/ui/ScrollReveal";
import { BookOpen, Laptop, FlaskConical, Mic, Coffee, Home, Users, Wifi, HeartPulse, Bus } from "lucide-react";

const facilities = [
  { icon: BookOpen, title: "Library", desc: "A well-stocked library with books, journals, and quiet study zones.", img: "Library" },
  { icon: Laptop, title: "Computer Lab", desc: "Modern computer lab with high-speed internet and updated software.", img: "Computer+Lab" },
  { icon: FlaskConical, title: "Science / IT Lab", desc: "Fully-equipped science and IT labs for hands-on practical learning.", img: "Science+Lab" },
  { icon: Mic, title: "Seminar Hall / Auditorium", desc: "Spacious auditorium for seminars, events, and convocations.", img: "Auditorium" },
  { icon: Coffee, title: "Cafeteria", desc: "Hygienic cafeteria serving affordable, diverse meal options.", img: "Cafeteria" },
  { icon: Home, title: "Hostel (Boys)", desc: "Safe and comfortable hostel facility for boys with all essentials.", img: "Boys+Hostel" },
  { icon: Users, title: "Hostel (Girls)", desc: "Secure girls' hostel with 24/7 supervision and modern amenities.", img: "Girls+Hostel" },
  { icon: Wifi, title: "Wi-Fi Campus", desc: "High-speed Wi-Fi available across the entire campus.", img: "WiFi" },
  { icon: HeartPulse, title: "Medical Room", desc: "On-campus medical room for first-aid and healthcare support.", img: "Medical" },
  { icon: Bus, title: "Transport / Bus Service", desc: "Reliable transport service connecting major routes in Dehradun.", img: "Transport" },
];

const FacilitiesPage = () => (
  <div className="pt-24">
    <section className="navy-gradient py-20 geo-pattern">
      <div className="container mx-auto px-4 text-center">
        <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Campus Life</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-3">World-Class Facilities</h1>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
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
  </div>
);

export default FacilitiesPage;
