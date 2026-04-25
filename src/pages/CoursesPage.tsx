import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { BarChart3, Briefcase, Laptop, Wallet, FlaskConical, GraduationCap, ChevronRight, X, Clock, Users, BookOpen } from "lucide-react";

const departments = [
  { id: "management", label: "Management" },
  { id: "science", label: "Science & Tech" },
  { id: "commerce", label: "Commerce" },
];

const allCourses = [
  { dept: "management", name: "MBA", full: "Master of Business Administration", icon: BarChart3, duration: "2 Years", eligibility: "Graduation with 50%", seats: 120, desc: "Comprehensive management program with specializations in Finance, Marketing, HR, and Operations." },
  { dept: "management", name: "BBA", full: "Bachelor of Business Administration", icon: Briefcase, duration: "3 Years", eligibility: "12th with 50%", seats: 180, desc: "Foundation in business management with emphasis on entrepreneurship and leadership." },
  { dept: "science", name: "BCA", full: "Bachelor of Computer Applications", icon: Laptop, duration: "3 Years", eligibility: "12th with Maths", seats: 120, desc: "Cutting-edge program in software development, databases, and emerging technologies." },
  { dept: "science", name: "B.Sc IT", full: "Bachelor of Science in IT", icon: Laptop, duration: "3 Years", eligibility: "12th Science", seats: 90, desc: "Focus on information technology, networking, and system administration." },
  { dept: "science", name: "M.Sc CS", full: "Master of Science in Computer Science", icon: GraduationCap, duration: "2 Years", eligibility: "B.Sc/BCA", seats: 60, desc: "Advanced study in algorithms, AI, machine learning, and data science." },
  { dept: "commerce", name: "B.Com", full: "Bachelor of Commerce", icon: Wallet, duration: "3 Years", eligibility: "12th Commerce", seats: 240, desc: "Strong foundation in accounting, taxation, finance, and business law." },
  { dept: "commerce", name: "B.Com Hons", full: "B.Com Honours", icon: Wallet, duration: "3 Years", eligibility: "12th with 60%", seats: 60, desc: "Intensive commerce program with research emphasis and industry projects." },
  { dept: "science", name: "B.Sc", full: "Bachelor of Science", icon: FlaskConical, duration: "3 Years", eligibility: "12th Science", seats: 120, desc: "Foundational sciences with practical lab experience and research opportunities." },
];

const CoursesPage = () => {
  const [activeDept, setActiveDept] = useState("management");
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
            <p className="text-muted-foreground font-body mb-6">{selectedCourse.desc}</p>
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
