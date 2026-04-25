import { site } from "@/config/site";

const AnnouncementBar = () => (
  <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden">
    <div className="animate-marquee whitespace-nowrap flex gap-16">
      {[...Array(2)].map((_, i) => (
        <span key={i} className="flex gap-16 text-sm font-body font-medium">
          <span>📢 {site.announcement}</span>
          <span>🎓 Building Careers. Shaping Futures.</span>
          <span>📞 Enquiry: {site.phone}</span>
          <span>🏛️ AIMS — Sahaspur, Dehradun</span>
          <span>💼 Practical Education • Global Outlook • Ethical Leadership</span>
        </span>
      ))}
    </div>
  </div>
);

export default AnnouncementBar;
