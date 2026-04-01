const Footer = () => (
  <footer className="section-padding-sm bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm opacity-60">
        © {new Date().getFullYear()} Anna Kowal. Wszelkie prawa zastrzeżone.
      </p>
      <div className="flex gap-6">
        <a href="#kontakt" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
          Kontakt
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
