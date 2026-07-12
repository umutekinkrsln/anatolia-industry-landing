"use client"

import { useLanguage } from "@/lib/language-context"

export function AboutBrief() {
  const { language } = useLanguage()

  const highlights = [
    { title: { en: "150+ Projects", tr: "150+ Proje" }, image: "/123.jpg" },
    { title: { en: "Global Export", tr: "Global İhracat" }, image: "/12345.jpg" },
    { title: { en: "High Technology", tr: "Yüksek Teknoloji" }, image: "/123456.jpg" },
    { title: { en: "Sustainability", tr: "Sürdürülebilirlik" }, image: "/1234567.jpg" },
    { title: { en: "Expert Team", tr: "Uzman Kadro" }, image: "/12345678.jpg" },
    { title: { en: "Industrial Power", tr: "Endüstriyel Güç" }, image: "/123456789.jpg" },
    { title: { en: "Innovation", tr: "İnovasyon" }, image: "/123.jpg" },
    { title: { en: "Quality Assurance", tr: "Kalite Güvencesi" }, image: "/12345.jpg" },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {language === "tr" ? "Neler Yaptık?" : "What Have We Done"}
          </h2>
          <div className="max-w-4xl mx-auto text-slate-700 leading-relaxed space-y-8">
            <p className="text-xl font-medium text-slate-800">
              {language === "tr" 
                ? "Çelik & Boru Hattı Mükemmelliği: Uzmanlığımız, konseptten tamamlanmaya kadar ağır sanayi ihtiyaçlarının tüm yelpazesini kapsar. Vizyonları dayanıklı yapılara dönüştürüyoruz." 
                : "Steel & Pipeline Excellence: Our expertise covers the full spectrum of heavy industry needs, from concept to completion. We turn visions into durable structures."}
            </p>
            
            <div className="text-left space-y-6 mt-12">
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  {language === "tr" ? "1. Avrupa:" : "1. Europe:"}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {language === "tr" 
                    ? "Avrupa pazarı sıfır hata toleransı ve EN/ASME standartlarına sıkı sıkıya bağlılık gerektirir. Anadolu Endüstri olarak bu yüksek standartları karşılıyor ve kıtanın önde gelen enerji şirketlerine güvenilir saha çözümleri sunuyoruz." 
                    : "The European market requires zero error tolerance and strict adherence to EN/ASME standards. As Anadolu Endüstri, we meet these high standards and provide reliable field solutions to the continent's leading energy companies."}
                </p>
              </div>

              <div className="border-l-4 border-amber-600 pl-6 py-2">
                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  {language === "tr" ? "2. Orta Doğu:" : "2. Middle East:"}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {language === "tr" 
                    ? "Orta Doğu, dünyanın en büyük rafineri ve boru hattı projelerine ev sahipliği yapmaktadır. Zorlu saha koşullarında bile mutlak güvenilirlik ve operasyonel mükemmellik sağlamak için bölgenin en önemli enerji devleriyle birlikte çalışıyoruz." 
                    : "The Middle East hosts the world's largest refinery and pipeline projects. We work with the region's most important energy giants to ensure absolute reliability and operational excellence even in challenging field conditions."}
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6 py-2">
                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  {language === "tr" ? "3. Türkiye ve Bölge:" : "3. Turkey and Region:"}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {language === "tr" 
                    ? "Yerel pazar bilgimiz ve uluslararası standartlardaki uzmanlığımızla, Türkiye ve çevresindeki bölgelerin enerji altyapısının inşasında kritik bir rol oynuyoruz. Ulusal enerji güvenliğine ve endüstriyel gelişime katkıda bulunmaktan gurur duyuyoruz." 
                    : "With our local market knowledge and expertise in international standards, we play a critical role in building the energy infrastructure of Turkey and surrounding regions. We are proud to contribute to national energy security and industrial development."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={language === "tr" ? item.title.tr : item.title.en}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-5">
                <h3 className="text-white font-semibold text-lg tracking-wide">
                  {language === "tr" ? item.title.tr : item.title.en}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-24 bg-slate-50 rounded-3xl p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center tracking-tight">
            {language === "tr" ? "Hizmetlerimiz" : "Our Services"}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                <span className="text-white text-3xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {language === "tr" ? "Çelik İmalatı" : "Steel Manufacturing"}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === "tr" 
                  ? "Dünya çapında dayanıklı yapılar sunan montaj ve imalat hizmetleri." 
                  : "Assembly and manufacturing services offering durable structures worldwide."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {language === "tr" ? "Boru Hattı Kaynağı" : "Pipeline Welding"}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === "tr" 
                  ? "M300, P600 ve P625 otomatik sistemlerini kullanan 80'den fazla profesyonel." 
                  : "Over 80 professionals using M300, P600 and P625 automated systems."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                <span className="text-white text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {language === "tr" ? "Rafineri Projeleri" : "Refinery Projects"}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === "tr" 
                  ? "Yeni tesis inşaatından bakım amaçlı duruşlara kadar kapsamlı hizmetler." 
                  : "Comprehensive services from new facility construction to maintenance shutdowns."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                <span className="text-white text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {language === "tr" ? "Altyapı" : "Infrastructure"}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === "tr" 
                  ? "Hassasiyet üzerine kurulu petrol, gaz ve enerji sektörü çözümleri." 
                  : "Oil, gas and energy sector solutions built on precision."}
              </p>
            </div>
          </div>

          {/* Technical Services */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              {language === "tr" ? "Hassas Teknik Hizmetler" : "Precision Technical Services"}
            </h3>
            <p className="text-slate-600 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
              {language === "tr" 
                ? "Ağır inşaatın ötesinde, verimlilik, sürdürülebilirlik ve operasyonel sürekliliği sağlayan özel teknik hizmetler sunuyoruz." 
                : "Beyond heavy construction, we offer specialized technical services ensuring efficiency, sustainability and operational continuity."}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🛡️</span>
                  {language === "tr" ? "Yalıtım Çözümleri" : "Insulation Solutions"}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {language === "tr" 
                    ? "Endüstriyel tesisler, borular ve sıcak/soğuk hatlar için termal, akustik ve su yalıtımı. Enerji verimliliğine odaklanmıştır." 
                    : "Thermal, acoustic and water insulation for industrial facilities, pipes and hot/cold lines. Focused on energy efficiency."}
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">⚙️</span>
                  {language === "tr" ? "Türbin Hizmetleri" : "Turbine Services"}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {language === "tr" 
                    ? "Gaz ve buhar türbinleri için mekanik montaj, lazer hizalama ve devreye alma. Tam başlatma işlemleri." 
                    : "Mechanical assembly, laser alignment and commissioning for gas and steam turbines. Complete startup operations."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center tracking-tight">
            {language === "tr" ? "Küresel Etki ve Ortaklar" : "Global Impact and Partners"}
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16">
            {language === "tr" ? "Faaliyet Gösterdiğimiz Bölgeler" : "Regions We Operate"}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Europe */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-10 border border-slate-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-white text-3xl">🇪🇺</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {language === "tr" ? "Avrupa" : "Europe"}
              </h3>
              <div className="space-y-3 text-slate-700">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Shell, BP, TotalEnergies
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  TechnipFMC, Worley
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Petrofac, Equinor
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Saipem, CRC Evans
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Tecnicas Reunidas, SLB
                </p>
              </div>
            </div>

            {/* Middle East */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-10 border border-slate-200">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-white text-3xl">🕌</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {language === "tr" ? "Orta Doğu" : "Middle East"}
              </h3>
              <div className="space-y-3 text-slate-700">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                  SATORP, QatarEnergy
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                  ADNOC Group, TRAGS
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                  Kuwait Oil Company
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                  PDO (Petroleum Dev. Oman)
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                  Emirates National Oil, Masdar
                </p>
              </div>
            </div>

            {/* Turkey & Region */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-10 border border-slate-200">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-white text-3xl">🇹🇷</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {language === "tr" ? "Türkiye ve Bölge" : "Turkey & Region"}
              </h3>
              <div className="space-y-3 text-slate-700">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  BOTAŞ, Tüpraş
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  SOCAR Türkiye, Petkim
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  Limak Şirketler Grubu
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  Rönesans Holding
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  Tekfen Holding, ENKA
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
                <span className="text-white text-4xl">🤝</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                {language === "tr" 
                  ? '"Amacımız sadece hizmet vermek değil, en güvenilir proje ortağınız olmaktır."' 
                  : '"Our goal is not just to provide service, but to be your most reliable project partner."'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}