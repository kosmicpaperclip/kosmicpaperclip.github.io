
// Simple i18n with localStorage persistence
const I18N = {
  de: {
    nav_home: "Startseite",
    nav_services: "Leistungen",
    nav_about: "Über uns",
    nav_projects: "Referenzen",
    nav_contact: "Kontakt",
    nav_impressum: "Impressum",
    nav_privacy: "Datenschutz",
    nav_cookies: "Cookie-Einstellungen",
    hero_h1: "Digitale Beratung. IT-Services. Übersetzung.",
    hero_intro: "Wir unterstützen öffentliche Verwaltung und Unternehmen bei Digitalisierung, Training und IT-Projekten – lösungsorientiert, rechtssicher und effizient.",
    cta_primary: "Leistungen ansehen",
    cta_secondary: "Kontakt aufnehmen",
    home_services_title: "Leistungen",
    home_services_1: "Projekt- & Prozessberatung",
    home_services_2: "IT-Services & Implementierung",
    home_services_3: "Technische Dokumentation & Übersetzungen (DE/EN)",
    home_services_4: "Datenschutz-Beratung (DSGVO-konform, praxisnah)",
    footer_note: "Kein Tracking ohne Einwilligung."
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_impressum: "Impressum",
    nav_privacy: "Privacy",
    nav_cookies: "Cookie Settings",
    hero_h1: "Digital consulting. IT services. Translation.",
    hero_intro: "We help public sector and companies with digitalization, training, and IT projects—solutions oriented, GDPR-compliant, and efficient.",
    cta_primary: "View services",
    cta_secondary: "Contact us",
    home_services_title: "Services",
    home_services_1: "Project & process consulting",
    home_services_2: "IT services & implementation",
    home_services_3: "Technical documentation & translation (DE/EN)",
    home_services_4: "Data & privacy guidance (GDPR-compliant)",
    footer_note: "No tracking without consent."
  }
};

const setLang = (lang) => {
  const dict = I18N[lang] || I18N.de;
  document.documentElement.lang = lang === 'en' ? 'en' : 'de';
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  }
  // Update active button
  document.querySelectorAll(".lang-toggle button").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
  localStorage.setItem("kc_lang", lang);
};

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("kc_lang") || "de";
  setLang(saved);
  document.querySelectorAll(".lang-toggle button").forEach(btn=>{
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
});
