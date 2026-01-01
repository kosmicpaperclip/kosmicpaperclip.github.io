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
    home_services_2: "Technische Dokumentation",
    home_services_3: "Übersetzungen (DE/EN)",
    home_services_4: "Datenschutz-Beratung (DSGVO-konform, praxisnah)",
    home_services_5: "IT-Services & Implementierung",
    svc_title_consulting: "Beratung",
    svc_title_techdocs: "Technische Dokumentation",
    svc_title_translations: "Übersetzungen",
    svc_title_privacy: "Datenschutz",
    svc_title_itservices: "IT-Services",
    footer_note: "Kein Tracking ohne Einwilligung.",
    privacy_title: "Datenschutzerklärung",
    privacy_last_updated: "Zuletzt aktualisiert: 01.01.2026",
    privacy_controller_title: "1. Verantwortliche Stelle",
    privacy_controller_text: "Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br>Kosmic Paperclip UG (haftungsbeschränkt)<br>Oberstr. 3, 47829 Krefeld, Deutschland<br>Email: kosmicpaperclip@gmail.com",
    privacy_general_title: "2. Allgemeine Hinweise zur Datenverarbeitung",
    privacy_general_text: "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.",
    privacy_collection_title: "3. Datenerfassung auf dieser Website",
    privacy_hosting_title: "a) Hosting über GitHub Pages",
    privacy_hosting_text: "Unsere Website wird bei GitHub Pages gehostet. Anbieter ist die GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. Wenn Sie unsere Website besuchen, erfasst GitHub Pages zur Gewährleistung der Sicherheit und zur Bereitstellung des Dienstes Daten, sogenannte Logfiles. Diese können folgende Informationen enthalten:<br>- IP-Adresse des anfragenden Rechners<br>- Datum und Uhrzeit des Zugriffs<br>- Name und URL der abgerufenen Datei<br>- Website, von der aus der Zugriff erfolgt (Referrer-URL)<br>- Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners<br>Die Verarbeitung dieser Daten erfolgt zur Gewährleistung eines reibungslosen Verbindungsaufbaus und einer komfortablen Nutzung der Website. Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung. Weitere Informationen zum Datenschutz bei GitHub finden Sie unter <a href=\"https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement\">https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement</a>.",
    privacy_contact_title: "b) Kontaktformular via Form.taxi",
    privacy_contact_text: "Auf unserer Website bieten wir Ihnen die Möglichkeit, über ein Kontaktformular mit uns in Verbindung zu treten. Die Übermittlung der Formulardaten wird durch den externen Dienstleister Form.taxi (Dienstanbieter: Informationstechnologie, Inh. Reinhard Söllradl, Eferding, Österreich) abgewickelt. Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse) an Form.taxi zur Verarbeitung und anschließenden Weiterleitung an uns per E-Mail übermittelt.<br>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage. Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    privacy_cookies_title: "c) Cookies & Tracking",
    privacy_cookies_text: "Diese Website verwendet keine Cookies für Tracking, Analyse oder Marketingzwecke. Es werden lediglich technisch notwendige Session-Cookies gesetzt, die für die grundlegende Funktionalität der Seite erforderlich sind und nach dem Schließen Ihres Browsers automatisch gelöscht werden.",
    privacy_rights_title: "4. Ihre Rechte als betroffene Person",
    privacy_rights_text: "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Weiterhin haben Sie das Recht, die Einschränkung der Verarbeitung zu verlangen sowie das Recht auf Datenübertragbarkeit.<br>Sie haben zudem das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.",
    privacy_legal_note_title: "Rechtlicher Hinweis",
    privacy_legal_note_text: "Diese englische Übersetzung dient nur der Übersicht. Rechtlich maßgeblich ist die deutsche Fassung.",

    // NEU: Übersetzungen für die "Über uns"-Seite
    about_ceo: "<strong>Geschäftsführung: Levke Derns</strong>",
    about_intro: "Als Gründerin und Geschäftsführerin der Kosmic Paperclip UG bin ich eine erfahrene Projektleiterin, technische Redakteurin und Übersetzerin mit einem internationalen Hintergrund in Technik, Recht und Sprache. Meine Stärke liegt darin, komplexe technische Prozesse und Softwaresysteme klar, strukturiert und anwenderfreundlich zu dokumentieren und auch Laien verständlich zu vermitteln. Mein Ziel ist es, als Brücke zwischen Fachexperten und Anwendern zu fungieren und so für reibungslose, verständliche und effiziente Prozesse zu sorgen.",
    about_core_title: "Meine Kernkompetenzen",
    about_core_1: "<strong>Digitalisierung & Projektleitung:</strong> Leitung und Steuerung von Digitalisierungsprojekten, insbesondere für Behörden und öffentliche Einrichtungen, inklusive der Erstellung von Budget- und Ressourcenplänen.",
    about_core_2: "<strong>Technische Redaktion & Dokumentation:</strong> Erstellung, Pflege und Weiterentwicklung von technischen und organisatorischen Dokumentationen, von der Prozessanalyse bis zur Terminologiepflege.",
    about_core_3: "<strong>Unternehmensaufbau & Management:</strong> Erfolgreicher Aufbau von Betriebsabläufen und Skalierung von agilen Teamstrukturen in Start-ups, inklusive der Optimierung von Prozessen in Kundenkommunikation, Buchhaltung und Vertragsverwaltung.",
    about_core_4: "<strong>Fachübersetzungen (DE ↔ EN):</strong> Präzise Übertragung von technischen, juristischen und softwarebezogenen Fachtexten unter Einsatz von CAT-Tools und Qualitätssicherung maschineller Übersetzungen.",
    about_values: "<em>Werte: Lösungsorientierung • Verlässlichkeit • Privacy by Design</em>"
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About Us",
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
    home_services_2: "Technical documentation",
    home_services_3: "Translations (DE/EN)",
    home_services_4: "Data & privacy guidance (GDPR-compliant)",
    home_services_5: "IT services & implementation",
    svc_title_consulting: "Consulting",
    svc_title_techdocs: "Technical Documentation",
    svc_title_translations: "Translations",
    svc_title_privacy: "Data Privacy",
    svc_title_itservices: "IT Services",
    footer_note: "No tracking without consent.",
    privacy_title: "Privacy Policy",
    privacy_last_updated: "Last updated: 01/01/2026",
    privacy_controller_title: "1. Data Controller",
    privacy_controller_text: "Responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is:<br>Kosmic Paperclip UG (limited liability)<br>Oberstr. 3, 47829 Krefeld, Germany<br>Email: kosmicpaperclip@gmail.com",
    privacy_general_title: "2. General Information on Data Processing",
    privacy_general_text: "We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy. The use of our website is generally possible without providing personal data. Insofar as personal data (e.g., name or email addresses) is collected on our pages, this is always done on a voluntary basis, where possible.",
    privacy_collection_title: "3. Data Collection on This Website",
    privacy_hosting_title: "a) Hosting via GitHub Pages",
    privacy_hosting_text: "Our website is hosted on GitHub Pages. The provider is GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. When you visit our website, GitHub Pages collects data, so-called log files, to ensure security and provide the service. This may include the following information:<br>- IP address of the requesting computer<br>- Date and time of access<br>- Name and URL of the retrieved file<br>- Website from which the access is made (Referrer URL)<br>- Browser used and, if applicable, the operating system of your computer<br>The processing of this data is carried out to ensure a smooth connection setup and comfortable use of the website. The legal basis for data processing is Art. 6 (1) (f) GDPR. Our legitimate interest follows from the purposes for data collection listed above. Further information on data protection at GitHub can be found at <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement\">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a>.",
    privacy_contact_title: "b) Contact Form via Form.taxi",
    privacy_contact_text: "On our website, we offer you the opportunity to contact us via a contact form. The submission of the form data is handled by the external service provider Form.taxi (Service provider: Informationstechnologie, Owner Reinhard Söllradl, Eferding, Austria). When you use the contact form, the data you enter (name, email address) is transmitted to Form.taxi for processing and subsequent forwarding to us by email.<br>The processing of the data entered into the contact form is carried out exclusively for the purpose of processing your request. The legal basis for the processing is Art. 6 (1) (b) GDPR, if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 (1) (f) GDPR). Your data will be deleted after the final processing of your request, provided there are no legal retention obligations to the contrary.",
    privacy_cookies_title: "c) Cookies & Tracking",
    privacy_cookies_text: "This website does not use cookies for tracking, analysis, or marketing purposes. Only technically necessary session cookies are set, which are required for the basic functionality of the site and are automatically deleted after you close your browser.",
    privacy_rights_title: "4. Your Rights as a Data Subject",
    privacy_rights_text: "Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipients, and the purpose of the data processing, and, if applicable, a right to correction, blocking, or deletion of this data. Furthermore, you have the right to request the restriction of processing and the right to data portability.<br>You also have the right to lodge a complaint with a data protection supervisory authority about the processing of your personal data by us.",
    privacy_legal_note_title: "Legal Notice",
    privacy_legal_note_text: "This English translation is provided for convenience only. The German version is legally authoritative.",

    // NEW: Translations for the "About Us" page
    about_ceo: "<strong>Management: Levke Derns</strong>",
    about_intro: "As the founder and managing director of Kosmic Paperclip UG, I am an experienced project manager, technical writer, and translator with an international background in technology, law, and language. My strength lies in documenting complex technical processes and software systems in a clear, structured, and user-friendly manner, making them understandable even to non-experts. My goal is to act as a bridge between subject matter experts and users, ensuring smooth, understandable, and efficient processes.",
    about_core_title: "My Core Competencies",
    about_core_1: "<strong>Digitalization & Project Management:</strong> Leading and managing digitalization projects, especially for public authorities and institutions, including the creation of budget and resource plans.",
    about_core_2: "<strong>Technical Writing & Documentation:</strong> Creating, maintaining, and developing technical and organizational documentation, from process analysis to terminology management.",
    about_core_3: "<strong>Business Development & Management:</strong> Successfully establishing operational procedures and scaling agile team structures in start-ups, including the optimization of processes in customer communication, accounting, and contract management.",
    about_core_4: "<strong>Specialized Translations (DE ↔ EN):</strong> Precise translation of technical, legal, and software-related texts using CAT tools and quality assurance of machine translations.",
    about_values: "<em>Values: Solution-Oriented • Reliability • Privacy by Design</em>"
  }
};

const setLang = (lang) => {
  const dict = I18N[lang] || I18N.de;
  document.documentElement.lang = lang === 'en' ? 'en' : 'de';
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.getAttribute("data-i18n");
    const mode = el.getAttribute("data-i18n-mode");
    if (dict[key]) {
      if (mode === 'html') {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  }
  // Update active button
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
  localStorage.setItem("kc_lang", lang);
};

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("kc_lang") || "de";
  setLang(saved);
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
});
