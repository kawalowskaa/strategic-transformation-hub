import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with backend later
    alert("Dziękuję za wiadomość! Odezwę się wkrótce.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Kontakt
        </p>
        <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">
          Porozmawiajmy.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
          Jeśli czujesz, że Twoja organizacja utknęła między strategią a realizacją — napisz do mnie.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Imię i nazwisko"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
          <textarea
            placeholder="Twoja wiadomość"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
          />
          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center px-10 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Wyślij wiadomość
            </button>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            anna.kowal@email.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
