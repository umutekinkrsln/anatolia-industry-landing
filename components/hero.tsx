"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t, language } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <img
          src="/industrial-steel-manufacturing-facility-with-metal.jpg"
          alt="Industrial facility"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight text-balance">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Projelerimizi İnceleyin -> Öne Çıkan Projeler (#projects) kısmına gider */}
            <a href="#projects">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base w-full sm:w-auto">
                {language === "tr" ? "Projelerimizi İnceleyin" : t("hero.viewProjects")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            {/* Daha Fazla Bilgi -> Neler Yaptık (#about-summary) kısmına gider */}
            <a href="#about-summary">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base bg-transparent w-full sm:w-auto"
              >
                {language === "tr" ? "Daha Fazla Bilgi" : t("hero.learnMore")}
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  )
}