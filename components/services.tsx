"use client"

import { Factory, Zap, TrendingUp, Building2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Factory,
      titleKey: "services.steel.title",
      descKey: "services.steel.desc",
    },
    {
      icon: Zap,
      titleKey: "services.energy.title",
      descKey: "services.energy.desc",
    },
    {
      icon: TrendingUp,
      titleKey: "services.investment.title",
      descKey: "services.investment.desc",
    },
    {
      icon: Building2,
      titleKey: "services.heavy.title",
      descKey: "services.heavy.desc",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="/industrial-factory-machinery-background.jpg"
          alt="Industrial background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border hover:border-secondary transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary mb-6">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
