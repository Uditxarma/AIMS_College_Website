import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
    {/* Top CTA strip */}
    <div className="gold-gradient">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-secondary-foreground">Ready to Begin Your Journey?</h3>
          <p className="text-secondary-foreground/70 font-body text-sm">Admissions are open for 2026–27. Limited seats available.</p>
        </div>
        <Link to="/admissions">
          <Button variant="navy" size="lg" className="rounded-lg whitespace-nowrap">
            Apply Now <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>

    {/* Main footer - 3 column asymmetric */}
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Brand - wider */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="AIMS Logo" className="w-20 h-20 object-contain shrink-0" />
            <div>
              <h3 className="font-accent text-xl font-bold tracking-[0.15em]">AIMS</h3>
              <p className="text-primary-foreground/40 text-[10px] font-body tracking-widest uppercase">Achiever's Institute of Management & Science</p>
            </div>
          </div>
          <p className="text-primary-foreground/50 text-sm font-body leading-relaxed max-w-sm mb-6">
            {site.tagline} Empowering youth with practical education, a global outlook, and ethical leadership since {site.established}.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: site.social.facebook },
              { Icon: Instagram, href: site.social.instagram },
              { Icon: Youtube, href: site.social.youtube },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/40 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation - two sub-columns */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-accent text-xs tracking-[0.2em] uppercase text-secondary mb-5">Explore</h4>
            <ul className="space-y-3 font-body text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Courses", href: "/courses" },
                { label: "Admissions", href: "/admissions" },
                { label: "Facilities", href: "/facilities" },
                { label: "Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary-foreground/40 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-accent text-xs tracking-[0.2em] uppercase text-secondary mb-5">Connect</h4>
            <ul className="space-y-3 font-body text-sm">
              {[
                { label: "Placements", href: "/placements" },
                { label: "Events", href: "/events" },
                { label: "Contact", href: "/contact" },
                { label: "Chairman", href: "/chairman" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary-foreground/40 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="lg:col-span-3">
          <h4 className="font-accent text-xs tracking-[0.2em] uppercase text-secondary mb-5">Get in Touch</h4>
          <ul className="space-y-4 font-body text-sm text-primary-foreground/40">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-md bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={14} className="text-secondary" />
              </div>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">{site.address}</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone size={14} className="text-secondary" />
              </div>
              <a href={`tel:${site.phoneRaw}`} className="hover:text-secondary transition-colors">{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-secondary/10 flex items-center justify-center shrink-0">
                <Mail size={14} className="text-secondary" />
              </div>
              <a href={`mailto:${site.email}`} className="hover:text-secondary transition-colors break-all">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-primary-foreground/30 text-xs font-body">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex gap-6 text-primary-foreground/30 text-xs font-body">
          <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-secondary transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
