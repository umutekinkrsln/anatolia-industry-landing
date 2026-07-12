  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={item.image}
                  alt={language === "tr" ? item.title.tr : item.title.en}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {language === "tr" ? item.title.tr : item.title.en}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {language === "tr" ? "Hizmetlerimiz" : "Our Services"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === "tr" ? "Çelik İmalatı" : "Steel Manufacturing"}
                </h3>
                <p className="text-gray-700">
                  {language === "tr" 
                    ? "Dünya çapında dayanıklı yapılar sunan montaj ve imalat hizmetleri." 
                    : "Assembly and manufacturing services offering durable structures worldwide."}
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === "tr" ? "Boru Hattı Kaynağı" : "Pipeline Welding"}
                </h3>
                <p className="text-gray-700">
                  {language === "tr" 
                    ? "M300, P600 ve P625 otomatik sistemlerini kullanan 80'den fazla profesyonel." 
                    : "Over 80 professionals using M300, P600 and P625 automated systems."}
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">🏭</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === "tr" ? "Rafineri Projeleri" : "Refinery Projects"}
                </h3>
                <p className="text-gray-700">
                  {language === "tr" 
                    ? "Yeni tesis inşaatından bakım amaçlı duruşlara kadar kapsamlı hizmetler." 
                    : "Comprehensive services from new facility construction to maintenance shutdowns."}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === "tr" ? "Altyapı" : "Infrastructure"}
                </h3>
                <p className="text-gray-700">
                  {language === "tr" 
                    ? "Hassasiyet üzerine kurulu petrol, gaz ve enerji sektörü çözümleri." 
                    : "Oil, gas and energy sector solutions built on precision."}
                </p>
              </div>
            </div>

            {/* Technical Services */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {language === "tr" ? "Hassas Teknik Hizmetler" : "Precision Technical Services"}
              </h3>
              <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
                {language === "tr" 
                  ? "Ağır inşaatın ötesinde, verimlilik, sürdürülebilirlik ve operasyonel sürekliliği sağlayan özel teknik hizmetler sunuyoruz." 
                  : "Beyond heavy construction, we offer specialized technical services ensuring efficiency, sustainability and operational continuity."}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>
                    {language === "tr" ? "Yalıtım Çözümleri" : "Insulation Solutions"}
                  </h4>
                  <p className="text-gray-700">
                    {language === "tr" 
                      ? "Endüstriyel tesisler, borular ve sıcak/soğuk hatlar için termal, akustik ve su yalıtımı. Enerji verimliliğine odaklanmıştır." 
                      : "Thermal, acoustic and water insulation for industrial facilities, pipes and hot/cold lines. Focused on energy efficiency."}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    {language === "tr" ? "Türbin Hizmetleri" : "Turbine Services"}
                  </h4>
                  <p className="text-gray-700">
                    {language === "tr" 
                      ? "Gaz ve buhar türbinleri için mekanik montaj, lazer hizalama ve devreye alma. Tam başlatma işlemleri." 
                      : "Mechanical assembly, laser alignment and commissioning for gas and steam turbines. Complete startup operations."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Impact Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {language === "tr" ? "Küresel Etki ve Ortaklar" : "Global Impact and Partners"}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              {language === "tr" ? "Faaliyet Gösterdiğimiz Bölgeler" : "Regions We Operate"}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Europe */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-3xl">🇪🇺</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {language === "tr" ? "Avrupa" : "Europe"}
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>• Shell, BP, TotalEnergies</p>
                  <p>• TechnipFMC, Worley</p>
                  <p>• Petrofac, Equinor</p>
                  <p>• Saipem, CRC Evans</p>
                  <p>• Tecnicas Reunidas, SLB</p>
                </div>
              </div>

              {/* Middle East */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-3xl">🕌</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {language === "tr" ? "Orta Doğu" : "Middle East"}
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>• SATORP, QatarEnergy</p>
                  <p>• ADNOC Group, TRAGS</p>
                  <p>• Kuwait Oil Company</p>
                  <p>• PDO (Petroleum Dev. Oman)</p>
                  <p>• Emirates National Oil, Masdar</p>
                </div>
              </div>

              {/* Turkey & Region */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-3xl">🇹🇷</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {language === "tr" ? "Türkiye ve Bölge" : "Turkey & Region"}
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>• BOTAŞ, Tüpraş</p>
                  <p>• SOCAR Türkiye, Petkim</p>
                  <p>• Limak Şirketler Grubu</p>
                  <p>• Rönesans Holding</p>
                  <p>• Tekfen Holding, ENKA</p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center shadow-2xl">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
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