"use client"

  import { useLanguage } from "@/lib/language-context"

  export function Footer() {
    const { t } = useLanguage()

    return (
      <footer className="bg-primary py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-xl lg:text-2xl font-bold tracking-tight text-primary-foreground mb-4">
                 ANATOLİA  <span className="text-secondary"> INDUSTRY</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">{t("footer.tagline")}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
                {t("nav.services")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                    {t("services.steel.title")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                    {t("services.energy.title")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                    {t("services.investment.title")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                    {t("services.heavy.title")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              
              <ul className="space-y-2">
                <li>
                  
                </li>
                <li>
                  
                </li>
                <li>
                  
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/60 text-sm">© 2025 IndustrialTech. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
