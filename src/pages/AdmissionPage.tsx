import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Award, ArrowRight, Download, FileText, Calendar, Loader2, Check } from "lucide-react";
import { site } from "@/config/site";


const steps = site.admissions.steps;

const scholarships = [
  { title: "Merit Scholarship", eligibility: "Outstanding academic performance", amount: "Up to 25% tuition waiver" },
  { title: "Early Bird Offer", eligibility: "Apply before 31 August 2026", amount: "Special concession" },
  { title: "Need-Based Aid", eligibility: "Eligible candidates from EWS", amount: "Financial support available" },
];

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePhone = (phone: string) => {
    return /^[6-9]\d{9}$/.test(phone.replace(/[\s\-\(\)]/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validatePhone(formData.phone)) {
      setStatus("error");
      setErrorMessage("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage(null);

    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));

      // Using mode: 'no-cors' and passing URLSearchParams directly.
      // We don't set headers manually as URLSearchParams does it.
      await fetch(site.googleSheetsUrl, {
        method: "POST",
        mode: "no-cors",
        body: body,
      });

      // Show success immediately for better UX with no-cors
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", course: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage(error?.message || "Network error while submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="pt-24">
    <section className="navy-gradient py-20 geo-pattern">
      <div className="container mx-auto px-4 text-center">
        <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Join AIMS</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-3">Admissions 2026</h1>
        <p className="text-secondary font-body mt-4 max-w-xl mx-auto">{site.announcement}. Begin your journey to a successful, self-reliant future.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm font-body">
          <span className="flex items-center gap-2 text-secondary"><Calendar size={14} className="text-secondary" /> Open: {site.admissions.openDate}</span>
          <span className="flex items-center gap-2 text-secondary"><Calendar size={14} className="text-secondary" /> Last Date: {site.admissions.lastDate}</span>
        </div>
      </div>
    </section>

    {/* Process Timeline */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-heading gold-underline">Admission Process</h2>
          </div>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex gap-6 items-start relative pb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-display font-bold text-lg shrink-0">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 h-full bg-secondary/20 mt-2" />}
                </div>
                <div className="pb-4">
                  <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground font-body text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <SectionDivider />

    {/* Enquiry Form */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div>
              <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Get Started</span>
              <h2 className="section-heading mt-3 mb-6">Online Enquiry</h2>
              <p className="text-muted-foreground font-body mb-8">Fill in your details and our admission counselor will get in touch within 24 hours.</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                  disabled={loading}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                  disabled={loading}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                  disabled={loading}
                />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                  disabled={loading}
                >
                  <option value="">Select Course</option>
                  <option value="B.A">B.A (Bachelor of Arts)</option>
                  <option value="B.Com">B.Com (Bachelor of Commerce)</option>
                  <option value="Diploma in Hotel Management">Diploma in Hotel Management</option>
                  <option value="Diploma in Fashion Designing">Diploma in Fashion Designing</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={3}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
                  disabled={loading}
                />
                {status === "error" && (
                  <div className="space-y-2">
                    <p className="text-red-500 text-sm font-body">Error submitting form. Please try again.</p>
                    {errorMessage && <p className="text-red-400 text-xs font-body">{errorMessage}</p>}
                  </div>
                )}
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={loading || status === "success"}
                >
                  {loading && <Loader2 className="mr-2 animate-spin" size={16} />}
                  {status === "success" && <Check className="mr-2" size={16} />}
                  {status === "success" ? "Submitted!" : loading ? "Submitting..." : "Submit Enquiry"}
                  {!loading && status !== "success" && <ArrowRight size={16} className="ml-auto" />}
                </Button>
              </form>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <div className="navy-gradient rounded-xl p-6 text-primary-foreground">
                <h3 className="font-display text-xl font-bold mb-4 text-secondary">Need Help?</h3>
                <div className="space-y-3 font-body text-sm">
                  <p className="flex items-center gap-2"><Phone size={16} className="text-secondary" /> {site.phone}</p>
                  <p className="flex items-center gap-2"><Mail size={16} className="text-secondary shrink-0" /> <span className="break-all">{site.email}</span></p>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2"><FileText size={18} className="text-secondary" /> Required Documents</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  {site.admissions.documents.map((d) => (
                    <li key={d} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {d}</li>
                  ))}
                </ul>
              </div>
              <Button variant="gold-outline" size="lg" className="w-full">
                <Download size={16} /> Download Brochure
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Scholarships */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Financial Aid</span>
            <h2 className="section-heading mt-3 gold-underline">Scholarships</h2>
            <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">{site.admissions.scholarship} available for eligible students.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {scholarships.map((s, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 text-center h-full">
                <Award className="text-secondary mx-auto mb-3" size={32} />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm font-body mb-3">{s.eligibility}</p>
                <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-body font-semibold">{s.amount}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default AdmissionPage;
