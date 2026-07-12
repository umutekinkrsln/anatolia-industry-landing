"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "tr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Building the Future with Strength and Precision",
    "hero.subtitle":
      "Anatolia Industry is built on five fundamental pillars that ensure project success, operational continuity, and global customer satisfaction. Your reliable partner for steel manufacturing, insulation, and global energy infrastructure projects.",
    "hero.viewProjects": "View Our Projects",
    "hero.learnMore": "Learn More",
    
    // Services
    "services.title": "The energy sector requires high standards and absolute reliability.",
    "services.subtitle":
      "We deliver excellence through disciplined field organization and an uncompromising safety culture.",
    "services.steel.title": "Safety and Quality",
    "services.steel.desc":
      "We adhere strictly to EN, ASME, and API standards in every project we undertake, embracing a zero-defect philosophy.",
    "services.energy.title": "Expert Teams",
    "services.energy.desc":
      "Highly qualified professionals and certified welding teams using advanced P600 and P625 automatic machines.",
    "services.investment.title": "Global Solutions",
    "services.investment.desc":
      "We offer scalable manpower and engineering solutions for international projects, from Europe to the Middle East.",
    "services.heavy.title": "Zero-Defect Philosophy",
    "services.heavy.desc":
      "We manage the entire application process, from assembly to final commissioning, with a commitment to passing inspections and uncompromising safety protocols.",
    
    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Showcasing our commitment to excellence in heavy industry and infrastructure",
    "projects.viewAll": "View All Projects",
    "projects.steel": "Steel & Pipeline Excellence",
    "projects.steel.desc": "Modern steel production complex",
    "projects.energy": "Precision Technical Services",
    "projects.energy.desc": "Renewable energy project",
    "projects.industrial": "Industrial Park Development",
    "projects.industrial.desc": "Comprehensive industry park",
    "projects.machinery": "Heavy Machinery Manufacturing",
    "projects.machinery.desc": "Custom industrial machinery",
    "projects.storage": "Energy Storage System",
    "projects.storage.desc": "Advanced energy storage technology",
    "projects.bridge": "Steel Bridge Construction",
    "projects.bridge.desc": "Large-scale infrastructure project",
    
    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Connect with us through WhatsApp or follow us on social media",
    "contact.whatsapp": "WhatsApp Direct Message",
    "contact.whatsapp.desc": "Send us a message for quick response",
    "contact.messageUs": "Message Us",
    "contact.social": "Follow Us",
    
    // Footer
    "footer.tagline": "Building tomorrow's industrial infrastructure today",
  },
  tr: {
    // Header
    "nav.services": "Hizmetler",
    "nav.projects": "Projeler",
    "nav.about": "Hakkımızda",
    "nav.contact": "İletişim",
    
    // Hero
    "hero.title": "Güç ve Hassasiyetle Geleceği İnşa Ediyoruz",
    "hero.subtitle":
      "Anatolia Industry, proje başarısını, operasyonel sürekliliği ve küresel müşteri memnuniyetini sağlayan beş temel sütun üzerine kurulmuştur. Çelik imalatı, yalıtım ve küresel enerji altyapı projeleri için güvenilir ortağınız.",
    "hero.viewProjects": "Projelerimizi İnceleyin",
    "hero.learnMore": "Daha Fazla Bilgi",
    
    // Services
    "services.title": "Enerji sektörü yüksek standartlar ve mutlak güven gerektirir.",
    "services.subtitle": "Disiplinli saha organizasyonu ve tavizsiz güvenlik kültürüyle mükemmelliği sunuyoruz.",
    "services.steel.title": "Güvenlik ve Kalite",
    "services.steel.desc": "Yürüttüğümüz her projede EN, ASME ve API standartlarına sıkı sıkıya bağlı kalarak sıfır hata felsefesini benimsiyoruz.",
    "services.energy.title": "Uzman Ekipler",
    "services.energy.desc":
      "Gelişmiş P600 ve P625 otomatik makineleri kullanan, yüksek vasıflı profesyoneller ve sertifikalı kaynak ekipleri.",
    "services.investment.title": "Küresel Çözümler",
    "services.investment.desc":
      "Avrupa'dan Orta Doğu'ya kadar, uluslararası projeler için ölçeklenebilir insan gücü ve mühendislik çözümleri sunuyoruz.",
    "services.heavy.title": "Sıfır Hata Felsefesi",
    "services.heavy.desc": "Denetimleri geçme taahhüdü ve tavizsiz güvenlik protokolleriyle montajdan nihai devreye almaya kadar tüm uygulama sürecini yönetiyoruz.",
    
    // Projects
    "projects.title": "Öne Çıkan Projeler",
    "projects.subtitle": "Ağır sanayi ve altyapıda mükemmellik taahhüdümüzü sergiliyoruz",
    "projects.viewAll": "Tüm Projeleri Görüntüle",
    "projects.steel": "Çelik ve Boru Hattı Mükemmelliği",
    "projects.steel.desc": "Modern çelik üretim kompleksi",
    "projects.energy": "Hassas Teknik Hizmetler",
    "projects.energy.desc": "Yenilenebilir enerji projesi",
    "projects.industrial": "Endüstriyel Park Geliştirmesi",
    "projects.industrial.desc": "Kapsamlı endüstri parkı",
    "projects.machinery": "Ağır Makine İmalatı",
    "projects.machinery.desc": "Özel sanayi makineleri",
    "projects.storage": "Enerji Depolama Sistemi",
    "projects.storage.desc": "İleri teknoloji enerji depolama",
    "projects.bridge": "Çelik Köprü İnşaatı",
    "projects.bridge.desc": "Büyük ölçekli altyapı projesi",
    
    // Contact
    "contact.title": "İletişime Geçin",
    "contact.subtitle": "WhatsApp üzerinden bize ulaşın veya sosyal medyada takip edin",
    "contact.whatsapp": "WhatsApp Direk Mesaj",
    "contact.whatsapp.desc": "Hızlı yanıt için bize mesaj gönderin",
    "contact.messageUs": "Mesaj Gönder",
    "contact.social": "Bizi Takip Edin",
    
    // Footer
    "footer.tagline": "Yarının endüstriyel altyapısını bugün inşa ediyoruz",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "tr")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}