import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();
  const t = translations.nav[lang];

  const links = [
    { label: t.what, href: "#co-robie" },
    { label: t.approach, href: "#jak-mysle" },
    { label: t.contact, href: "#kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        <a href="#" className="text-sm font-medium tracking-wide text-foreground">
          Anna Kowal
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="text-xs tracking-widest uppercase border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            {lang === "pl" ? "EN" : "PL"}
          </button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggle}
            className="text-xs tracking-widest uppercase border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === "pl" ? "EN" : "PL"}
          </button>
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
