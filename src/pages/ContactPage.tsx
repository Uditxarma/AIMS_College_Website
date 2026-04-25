import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Facebook, Instagram, Youtube, Loader2, Check } from "lucide-react";
import { site } from "@/config/site";

const contactInfo = [
  { icon: MapPin, title: "Address", detail: site.address, href: site.mapsUrl },
  { icon: Phone, title: "Phone", detail: site.phone, href: `tel:${site.phoneRaw}` },
  { icon: Mail, title: "Email", detail: site.email, href: `mailto:${site.email}` },
  { icon: MessageCircle, title: "WhatsApp", detail: site.whatsappDisplay, href: `https://wa.me/${site.whatsapp}` },
];

const socials = [
  { Icon: Facebook, href: site.social.facebook },
  { Icon: Instagram, href: site.social.instagram },
  { Icon: Youtube, href: site.social.youtube },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setErrorMessage("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage(null);

    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));
      body.append("course", "General Inquiry"); // Default for contact form

      await fetch(site.googleSheetsUrl, {
        method: "POST",
        mode: "no-cors",
        body: body,
      });

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
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
          <span className="font-accent text-secondary text-xs tracking-[0.3em] uppercase">Reach Out</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-3">Contact Us</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="section-heading mb-8">Get In <span className="text-secondary">Touch</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {contactInfo.map((c, i) => (
                    <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="bg-card rounded-xl p-5 border border-border shadow-sm hover:border-secondary/30 transition-colors block">
                      <c.icon className="text-secondary mb-2" size={24} />
                      <h4 className="font-display font-semibold text-foreground text-sm">{c.title}</h4>
                      <p className="text-muted-foreground text-sm font-body mt-1 break-words">{c.detail}</p>
                    </a>
                  ))}
                </div>

                <h4 className="font-display font-semibold text-foreground mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {socials.map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center text-secondary/70 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>

                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 rounded-xl overflow-hidden border border-border h-64 block">
                  <iframe
                    title="AIMS Location"
                    src="https://www.google.com/maps?q=Achiever's+Institute+of+Management+and+Science,+Sahaspur,+Chakrata+Road,+Dehradun,+Uttarakhand+248197&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="navy-gradient rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-secondary/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                    disabled={loading}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-secondary/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                    disabled={loading}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-secondary/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                    disabled={loading}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-secondary/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
                    disabled={loading}
                  />
                  
                  {status === "error" && (
                    <div className="space-y-2">
                      <p className="text-red-400 text-sm font-body">Error submitting form.</p>
                      {errorMessage && <p className="text-red-300 text-xs font-body">{errorMessage}</p>}
                    </div>
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
                    {status === "success" ? "Message Sent!" : loading ? "Sending..." : "Send Message"}
                    {!loading && status !== "success" && <ArrowRight size={16} className="ml-auto" />}
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
