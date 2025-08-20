const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    welcome: "Welcome to Shinwari E-commerce LLC",
    tagline: "Your trusted partner in modern online business solutions.",
    ourServices: "Our Services",
    s1: "Custom E-commerce Website Development",
    s2: "Secure Online Payment Integration",
    s3: "Digital Marketing & SEO",
    s4: "24/7 Technical Support",
    aboutUs: "About Us",
    aboutText: "Shinwari E-commerce LLC is dedicated to empowering businesses through innovative digital solutions.",
    getInTouch: "Get in Touch",
    contactText: "Email us at: contact@shinwariecommerce.com"
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    about: "من نحن",
    contact: "اتصل بنا",
    welcome: "مرحباً بكم في شركة شنوري للتجارة الإلكترونية",
    tagline: "شريككم الموثوق في حلول الأعمال عبر الإنترنت.",
    ourServices: "خدماتنا",
    s1: "تطوير مواقع التجارة الإلكترونية المخصصة",
    s2: "دمج أنظمة الدفع الآمنة",
    s3: "التسويق الرقمي وتحسين محركات البحث",
    s4: "دعم فني متواصل 24/7",
    aboutUs: "من نحن",
    aboutText: "تسعى شركة شنوري للتجارة الإلكترونية إلى تمكين الأعمال من خلال حلول رقمية مبتكرة.",
    getInTouch: "تواصل معنا",
    contactText: "راسلنا عبر البريد: contact@shinwariecommerce.com"
  },
  fr: {
    home: "Accueil",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    welcome: "Bienvenue chez Shinwari E-commerce LLC",
    tagline: "Votre partenaire de confiance pour les solutions e-commerce modernes.",
    ourServices: "Nos Services",
    s1: "Développement de sites e-commerce sur mesure",
    s2: "Intégration de paiements en ligne sécurisés",
    s3: "Marketing digital & SEO",
    s4: "Support technique 24/7",
    aboutUs: "À propos de nous",
    aboutText: "Shinwari E-commerce LLC s'engage à renforcer les entreprises grâce à des solutions numériques innovantes.",
    getInTouch: "Contactez-nous",
    contactText: "Écrivez-nous à : contact@shinwariecommerce.com"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}
