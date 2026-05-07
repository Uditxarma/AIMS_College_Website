import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import logo from "@/assets/logo.png";

const mainLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Chairman's Message", href: "/chairman" },
    ],
  },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Campus",
    href: "/facilities",
    children: [
      { label: "Facilities", href: "/facilities" },
      { label: "Gallery", href: "/gallery" },
      { label: "Events", href: "/events" },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top utility bar */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-[60] bg-primary border-b border-secondary/10 transition-all duration-300",
        scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"
      )}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between text-xs font-body">
          <div className="flex items-center gap-6 text-primary-foreground/60">
            <span className="flex items-center gap-1.5"><Phone size={12} className="text-secondary" /> {site.phone}</span>
            <span className="hidden sm:flex items-center gap-1.5"><Mail size={12} className="text-secondary" /> {site.email}</span>
            <span className="hidden md:flex items-center gap-1.5"><MapPin size={12} className="text-secondary" /> {site.addressShort}</span>
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/50">
            <a href="#" className="hover:text-secondary transition-colors">Alumni</a>
            <a href="#" className="hover:text-secondary transition-colors">Student Portal</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "top-0 bg-card/95 backdrop-blur-xl shadow-xl border-b border-border py-3"
            : "top-10 bg-card/90 backdrop-blur-md py-4"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo - tightly paired with name */}
          <Link to="/" className="flex items-center gap-1.5 group ml-6">
            <img src={logo} alt="AIMS Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain shrink-0 drop-shadow-md group-hover:scale-105 transition-transform" />
            <div className="flex flex-col leading-[1.15]">
              <span className="font-accent text-foreground text-[15px] md:text-base font-bold tracking-[0.1em] uppercase">AIMS</span>
              <span className="text-muted-foreground text-[8px] md:text-[9px] font-body tracking-[0.12em] uppercase hidden sm:block">Achiever's Institute of</span>
              <span className="text-muted-foreground text-[8px] md:text-[9px] font-body tracking-[0.12em] uppercase hidden sm:block">Management & Science</span>
            </div>
          </Link>

          {/* Desktop Nav - centered */}
          <div className="hidden lg:flex items-center gap-0.5">
            {mainLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "px-3 py-2 text-[13px] font-body font-medium transition-all rounded-md flex items-center gap-1",
                    location.pathname === link.href
                      ? "text-secondary"
                      : "text-foreground/70 hover:text-secondary hover:bg-secondary/5"
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown size={12} className="opacity-50" />}
                </Link>

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-1 animate-fade-in">
                    <div className="bg-card rounded-lg shadow-xl border border-border py-2 min-w-[180px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 text-sm font-body text-foreground/70 hover:text-secondary hover:bg-secondary/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link to="/admissions" className="hidden md:block">
              <Button variant="gold" size="sm" className="rounded-lg font-body text-xs tracking-wide">
                APPLY NOW
              </Button>
            </Link>
            <button
              className="lg:hidden text-foreground p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - slide down */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-card border-t border-border",
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="container mx-auto py-4 px-4 flex flex-col gap-0.5">
            {mainLinks.map((link) => (
              <div key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "px-4 py-3 text-sm font-body font-medium rounded-md transition-colors block",
                    location.pathname === link.href
                      ? "text-secondary bg-secondary/10"
                      : "text-foreground/70 hover:text-secondary hover:bg-secondary/5"
                  )}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    className="block px-8 py-2 text-sm font-body text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link to="/admissions" className="mt-3">
              <Button variant="gold" className="w-full rounded-lg">APPLY NOW</Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
