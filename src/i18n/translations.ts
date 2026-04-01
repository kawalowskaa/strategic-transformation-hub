export type Lang = "pl" | "en";

export const translations = {
  nav: {
    pl: { what: "Co robię", approach: "Podejście", contact: "Kontakt" },
    en: { what: "What I do", approach: "Approach", contact: "Contact" },
  },
  hero: {
    pl: {
      name: "Anna Kowal",
      heading: "Pomagam firmom upraszczać złożoność i zamieniać ją w skalowalne rozwiązania",
      sub: "Program Manager & Digital Transformation Lead, który przekłada strategię na realne wdrożenia, automatyzację i mierzalne efekty biznesowe.",
      cta1: "Porozmawiajmy",
      cta2: "Zobacz jak mogę pomóc",
    },
    en: {
      name: "Anna Kowal",
      heading: "I help companies simplify complexity and turn it into scalable solutions",
      sub: "Program Manager & Digital Transformation Lead who translates strategy into real implementations, automation, and measurable business outcomes.",
      cta1: "Let's talk",
      cta2: "See how I can help",
    },
  },
  values: {
    pl: {
      tag: "Co robię",
      heading: "Nie opisuję stanowisk.\nOpisuję transformację, jaką daję klientowi.",
      items: [
        "Pomagam organizacjom przejść od chaosu operacyjnego do uporządkowanego, skalowalnego modelu działania.",
        "Identyfikuję wąskie gardła i zamieniam je w zoptymalizowane procesy i automatyzacje.",
        "Łączę biznes i technologię, żeby rozwiązania naprawdę działały — a nie tylko dobrze wyglądały na slajdach.",
        "Wprowadzam podejście Citizen Development i buduję kompetencje cyfrowe w organizacjach.",
        "Projektuję modele operacyjne, które wspierają wzrost i efektywność.",
      ],
    },
    en: {
      tag: "What I do",
      heading: "I don't describe job titles.\nI describe the transformation I deliver.",
      items: [
        "I help organizations move from operational chaos to a structured, scalable operating model.",
        "I identify bottlenecks and turn them into optimized processes and automations.",
        "I bridge business and technology so solutions actually work — not just look good on slides.",
        "I introduce Citizen Development and build digital competencies within organizations.",
        "I design operating models that support growth and efficiency.",
      ],
    },
  },
  solutions: {
    pl: {
      tag: "Jak rozwiązuję problemy klienta",
      heading: "Cztery obszary, w których działam.",
      cards: [
        { title: "Transformacja i strategia", items: ["Uporządkowanie procesów", "Projektowanie modelu operacyjnego", "Wdrażanie zmian na poziomie organizacji"] },
        { title: "Automatyzacja i efektywność", items: ["Identyfikacja obszarów do automatyzacji", "Wdrażanie rozwiązań zwiększających wydajność", "Eliminacja powtarzalnej pracy"] },
        { title: "Zarządzanie projektami i delivery", items: ["Prowadzenie inicjatyw end-to-end", "Zarządzanie ryzykiem i zależnościami", "Dowożenie rezultatów, nie tylko planów"] },
        { title: "Ludzie i zmiana", items: ["Praca ze stakeholderami", "Warsztaty, facylitacja, wdrażanie zmian", "Budowanie zaangażowania i adopcji"] },
      ],
    },
    en: {
      tag: "How I solve client problems",
      heading: "Four areas where I operate.",
      cards: [
        { title: "Transformation & Strategy", items: ["Process restructuring", "Operating model design", "Implementing organization-wide change"] },
        { title: "Automation & Efficiency", items: ["Identifying automation opportunities", "Deploying productivity solutions", "Eliminating repetitive work"] },
        { title: "Project Management & Delivery", items: ["Leading end-to-end initiatives", "Risk and dependency management", "Delivering results, not just plans"] },
        { title: "People & Change", items: ["Stakeholder engagement", "Workshops, facilitation, change adoption", "Building engagement and buy-in"] },
      ],
    },
  },
  approach: {
    pl: {
      tag: "Jak myślę",
      heading: "Moje podejście.",
      items: [
        "Nie wierzę w transformację dla samej transformacji.",
        "Skupiam się na realnym wpływie na biznes.",
        "Upraszczam złożone rzeczy.",
        "Łączę analitykę z praktyką.",
        "Patrzę na organizację całościowo, nie tylko przez pryzmat jednego projektu.",
      ],
    },
    en: {
      tag: "How I think",
      heading: "My approach.",
      items: [
        "I don't believe in transformation for transformation's sake.",
        "I focus on real business impact.",
        "I simplify complex things.",
        "I combine analytics with practice.",
        "I look at the organization holistically, not just through one project.",
      ],
    },
  },
  expertise: {
    pl: {
      tag: "Obszary ekspertyzy",
      heading: "Obszary, w których mogę pomóc.",
      areas: ["Digital Transformation", "Process Optimization", "Automation Strategy", "Operating Model Design", "Project & Program Management", "Continuous Improvement"],
    },
    en: {
      tag: "Areas of expertise",
      heading: "Areas where I can help.",
      areas: ["Digital Transformation", "Process Optimization", "Automation Strategy", "Operating Model Design", "Project & Program Management", "Continuous Improvement"],
    },
  },
  blog: {
    pl: {
      tag: "Wiedza i perspektywy",
      heading: "Artykuły eksperckie.",
      articles: [
        { tag: "Transformacja", title: "Dlaczego większość transformacji cyfrowych kończy się na slajdach?", excerpt: "Strategia bez egzekucji to tylko życzenie. Sprawdź, co odróżnia firmy, które naprawdę się transformują.", date: "Marzec 2026" },
        { tag: "Automatyzacja", title: "Citizen Development — jak budować kompetencje cyfrowe bez armii programistów", excerpt: "Nie każda automatyzacja wymaga zespołu IT. Pokazuję, jak oddać narzędzia w ręce biznesu — bezpiecznie i skutecznie.", date: "Luty 2026" },
        { tag: "Zarządzanie", title: "Od chaosu do delivery — jak uporządkować portfel projektów", excerpt: "Zbyt wiele inicjatyw, za mało zasobów? Oto framework, który pomaga priorytetyzować i dowozić wyniki.", date: "Styczeń 2026" },
      ],
    },
    en: {
      tag: "Knowledge & Perspectives",
      heading: "Expert articles.",
      articles: [
        { tag: "Transformation", title: "Why most digital transformations end on slides?", excerpt: "Strategy without execution is just a wish. Discover what sets apart companies that truly transform.", date: "March 2026" },
        { tag: "Automation", title: "Citizen Development — building digital skills without an army of developers", excerpt: "Not every automation requires an IT team. I show how to put tools in business hands — safely and effectively.", date: "February 2026" },
        { tag: "Management", title: "From chaos to delivery — how to organize a project portfolio", excerpt: "Too many initiatives, too few resources? Here's a framework that helps prioritize and deliver results.", date: "January 2026" },
      ],
    },
  },
  personal: {
    pl: {
      tag: "O mnie prywatnie",
      heading: "Poza projektami.",
      text: "Poza światem projektów i transformacji jestem osobą, która ceni spokój, naturę i prostotę. Najlepiej odpoczywam na spacerach z moim psem, które często są też momentem na poukładanie myśli i nowe pomysły.",
    },
    en: {
      tag: "About me personally",
      heading: "Beyond projects.",
      text: "Beyond the world of projects and transformation, I'm someone who values peace, nature, and simplicity. I recharge best on walks with my dog, which often become moments for organizing thoughts and sparking new ideas.",
    },
  },
  contact: {
    pl: {
      tag: "Kontakt",
      heading: "Porozmawiajmy.",
      sub: "Jeśli czujesz, że Twoja organizacja utknęła między strategią a realizacją — napisz do mnie.",
      name: "Imię i nazwisko",
      email: "E-mail",
      message: "Twoja wiadomość",
      send: "Wyślij wiadomość",
      thanks: "Dziękuję za wiadomość! Odezwę się wkrótce.",
    },
    en: {
      tag: "Contact",
      heading: "Let's talk.",
      sub: "If you feel your organization is stuck between strategy and execution — reach out.",
      name: "Full name",
      email: "Email",
      message: "Your message",
      send: "Send message",
      thanks: "Thank you for your message! I'll get back to you soon.",
    },
  },
  footer: {
    pl: {
      copy: "Wszelkie prawa zastrzeżone.",
      contact: "Kontakt",
    },
    en: {
      copy: "All rights reserved.",
      contact: "Contact",
    },
  },
} as const;
