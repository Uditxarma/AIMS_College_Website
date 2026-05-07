import { useState, useEffect } from "react";
import { X, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

const AdmissionPopup = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "General Admission",
    message: "Requested callback via popup",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("admission-popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("admission-popup-dismissed", "true");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePhone = (phone: string) => {
    return /^[6-9]\d{9}$/.test(phone.replace(/[\s\-\(\)]/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      setStatus("error");
      setErrorMessage("Enter a valid 10-digit Indian number.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage(null);

    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));

      await fetch(site.googleSheetsUrl, {
        method: "POST",
        mode: "no-cors",
        body: body,
      });

      setStatus("success");
      setTimeout(() => {
        close();
      }, 2000);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage("Network error.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md mx-4 navy-gradient rounded-2xl p-8 shadow-2xl border border-secondary/20">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Limited Seats</span>
          <h3 className="font-display text-2xl font-bold text-primary-foreground mt-2">Admissions Open 2026–27</h3>
          <p className="text-primary-foreground/60 text-sm font-body mt-2">
            {site.announcement}. Apply before {site.admissions.lastDate}.
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-secondary/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body text-sm focus:outline-none focus:border-secondary transition-colors"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-secondary/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body text-sm focus:outline-none focus:border-secondary transition-colors"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-secondary/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body text-sm focus:outline-none focus:border-secondary transition-colors"
          />

          {status === "error" && (
            <p className="text-red-400 text-xs font-body text-center">{errorMessage}</p>
          )}

          <Button
            variant="gold"
            className="w-full"
            size="lg"
            type="submit"
            disabled={loading || status === "success"}
          >
            {loading && <Loader2 className="mr-2 animate-spin" size={16} />}
            {status === "success" && <Check className="mr-2" size={16} />}
            {status === "success" ? "Applied Successfully!" : loading ? "Applying..." : "Apply Now"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionPopup;
