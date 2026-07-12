"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Projects() {
  // language değişkenini de context'ten çekiyoruz ('en' veya 'tr' döndürdüğünü varsayıyoruz)
  const { t, language } = useLanguage()

  const projects = [
    {
      title: { en: "Steel Manufacturing Facility", tr: "Çelik ve Boru Hattı Mükemmelliği" },
      category: { en: "Steel & Iron", tr: "Demir & Çelik" },
      image: "/123.jpg",
      desc: {
        en: "Advanced steel production complex with cutting-edge technology and sustainable practices.",
        tr: "Son teknoloji ve sürdürülebilir uygulamalarla gelişmiş çelik üretim kompleksi.",
      },
    },
    {
      title: { en: "Solar Energy Power Plant", tr: "Hassas Teknik Hizmetler" },
      category: { en: "Energy", tr: "Enerji" },
      image: "/123456789.jpg",
      desc: {
        en: "Large-scale renewable energy facility providing clean power to thousands of homes.",
        tr: "Binlerce eve temiz enerji sağlayan büyük ölçekli yenilenebilir enerji tesisi.",
      },
    },
    {
      title: { en: "Industrial Park Development", tr: "Küresel Etki ve Ortaklar" },
      category: { en: "Investment", tr: "Yatırım" },
      image: "/12345.jpg",
      desc: {
        en: "Comprehensive industrial zone project supporting regional economic growth.",
        tr: "Bölgesel ekonomik büyümeyi destekleyen kapsamlı sanayi bölgesi projesi.",
      },
    },
    {
      title: { en: "Heavy Machinery Manufacturing", tr: "Avrupa" },
      category: { en: "Heavy Industry", tr: "Ağır Sanayi" },
      image: "/123456.jpg",
      desc: {
        en: "State-of-the-art facility for producing industrial equipment and machinery.",
        tr: "Endüstriyel ekipman ve makine üretimi için son teknoloji tesis.",
      },
    },
    {
      title: { en: "Energy Storage System", tr: "Orta Doğu" },
      category: { en: "Energy", tr: "Enerji" },
      image: "/1234567.jpg",
      desc: {
        en: "Innovative battery storage solution for grid stabilization and renewable integration.",
        tr: "Şebeke stabilizasyonu ve yenilenebilir entegrasyon için yenilikçi batarya depolama çözümü.",
      },
    },
    {
      title: { en: "Steel Bridge Construction", tr: "Türkiye ve Bölgesel " },
      category: { en: "Steel & Iron", tr: "Demir & Çelik" },
      image: "/12345678.jpg",
      desc: {
        en: "Major infrastructure project connecting communities with modern engineering solutions.",
        tr: "Modern mühendislik çözümleriyle toplulukları birbirine bağlayan büyük altyapı projesi.",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
          {/* Dil 'tr' ise Türkçe, değilse İngilizce göster */}
          {language === "tr" ? "Öne Çıkan Projeler" : "Featured Projects"}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {/* Dil 'tr' ise Türkçe, değilse İngilizce göster */}
          {language === "tr" 
            ? "Çeşitli endüstriyel sektörlerdeki tamamlanmış projelerimizi keşfedin" 
            : "Discover our portfolio of completed projects across various industrial sectors"}
        </p>
      </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            // Dil anahtarına göre veriyi seçiyoruz (Güvenli yöntem)
            const currentTitle = language === 'tr' ? project.title.tr : project.title.en;
            const currentCategory = language === 'tr' ? project.category.tr : project.category.en;
            const currentDesc = language === 'tr' ? project.desc.tr : project.desc.en;

            return (
              <div
                key={index}
                className="group bg-card border border-border overflow-hidden hover:border-secondary transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={currentTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {currentCategory}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{currentTitle}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{currentDesc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}