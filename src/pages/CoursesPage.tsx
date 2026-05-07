import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { BarChart3, Briefcase, Laptop, Wallet, FlaskConical, GraduationCap, ChevronRight, X, Clock, Users, BookOpen } from "lucide-react";

const departments = [
  { id: "undergraduate", label: "Undergraduate" },
  { id: "diploma", label: "Diploma" },
];

const allCourses = [
  { dept: "undergraduate", name: "B.A", full: "Bachelor of Arts", icon: BookOpen, duration: "3 Years", eligibility: "12th Pass", seats: 120, desc: "Comprehensive program with specializations in Hindi, English, Sanskrit, Sociology, History, and Economics.", scope: ["Civil Services", "Teaching", "Media", "Higher Studies (M.A./LLB)"], specializations: ["Hindi", "English", "Sanskrit", "Sociology", "History", "Economics"] },
  { dept: "undergraduate", name: "B.Com", full: "Bachelor of Commerce", icon: Wallet, duration: "3 Years", eligibility: "12th Commerce", seats: 120, desc: "Strong foundation in accounting, taxation, finance, and business law for corporate and banking careers.", scope: ["Finance", "Banking", "Accounting", "Corporate Careers"], specializations: [] },
  { dept: "diploma", name: "Diploma in Hotel Management", full: "Diploma in Hotel Management", icon: Briefcase, duration: "1 Year", eligibility: "12th Pass", seats: 60, desc: "Core skills for the hospitality industry including food production, F&B service, and hotel operations.", scope: ["Hospitality Operations", "Hotels & Events", "Entrepreneurship"], specializations: [] },
  { dept: "diploma", name: "Diploma in Fashion Designing", full: "Diploma in Fashion Designing", icon: Laptop, duration: "1 Year", eligibility: "12th Pass", seats: 60, desc: "Creativity training in garment construction, fashion illustration, textile science, and personal styling.", scope: ["Designer Job", "Boutique / Own Brand", "Styling & Garment Industry", "Further Fashion Studies"], specializations: [] },
];

const CoursesPage = () => {
  const [activeDept, setActiveDept] = useState("undergraduate");
  const [selectedCourse, setSelectedCourse] = useState<typeof allCourses[0] | null>(null);

  const filtered = allCourses.filter((c) => c.dept === activeDept);

  return (
    <div className="pt-24">
      <section className="navy-gradient py-20 geo-pattern">
        <div className="container mx-auto px-4 text-center">
          <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Academics</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-3">Courses & Departments</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDept(d.id)}
                className={`px-6 py-3 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeDept === d.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-secondary/10"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <ScrollReveal key={course.name} delay={i * 100}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 card-gold-border h-full flex flex-col">
                  <course.icon className="text-secondary mb-3" size={28} />
                  <h3 className="font-display text-xl font-bold text-foreground">{course.name}</h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">{course.full}</p>
                  <div className="flex flex-wrap gap-3 text-xs font-body text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock size={12} />{course.duration}</span>
                    <span className="flex items-center gap-1"><Users size={12} />{course.seats} Seats</span>
                  </div>
                  <div className="mt-auto flex gap-2">
                    <button onClick={() => setSelectedCourse(course)} className="text-secondary text-sm font-body font-medium hover:underline flex items-center gap-1">
                      Details <ChevronRight size={14} />
                    </button>
                    <Link to="/admissions" className="ml-auto">
                      <Button variant="gold" size="sm">Apply</Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedCourse(null)}>
          <div className="relative w-full max-w-lg mx-4 bg-card rounded-2xl p-8 shadow-2xl border border-secondary/20" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedCourse(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            <selectedCourse.icon className="text-secondary mb-4" size={36} />
            <h3 className="font-display text-2xl font-bold text-foreground mb-1">{selectedCourse.name}</h3>
            <p className="text-secondary font-body text-sm mb-4">{selectedCourse.full}</p>
            <p className="text-muted-foreground font-body mb-4">{selectedCourse.desc}</p>
            {selectedCourse.specializations && selectedCourse.specializations.length > 0 && (
              <div className="mb-4">
                <p className="font-body text-xs font-semibold text-secondary uppercase tracking-wide mb-2">Specializations</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.specializations.map((s) => (
                    <span key={s} className="bg-secondary/10 text-secondary text-xs font-body px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            )}
            {selectedCourse.scope && selectedCourse.scope.length > 0 && (
              <div className="mb-4">
                <p className="font-body text-xs font-semibold text-secondary uppercase tracking-wide mb-2">Career Scope</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.scope.map((sc) => (
                    <span key={sc} className="bg-muted text-foreground text-xs font-body px-3 py-1 rounded-full border border-border">{sc}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-muted rounded-lg">
                <Clock className="text-secondary mx-auto mb-1" size={18} />
                <p className="text-xs font-body text-muted-foreground">Duration</p>
                <p className="font-body font-semibold text-foreground text-sm">{selectedCourse.duration}</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <BookOpen className="text-secondary mx-auto mb-1" size={18} />
                <p className="text-xs font-body text-muted-foreground">Eligibility</p>
                <p className="font-body font-semibold text-foreground text-sm">{selectedCourse.eligibility}</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <Users className="text-secondary mx-auto mb-1" size={18} />
                <p className="text-xs font-body text-muted-foreground">Seats</p>
                <p className="font-body font-semibold text-foreground text-sm">{selectedCourse.seats}</p>
              </div>
            </div>
            <Link to="/admissions">
              <Button variant="gold" className="w-full" size="lg">Apply Now</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
