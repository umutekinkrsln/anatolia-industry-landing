"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Linkedin, Facebook, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{t("contact.subtitle")}</p>

          <div className="mb-16">
            <div className="inline-flex items-center gap-4 bg-card border border-border p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-primary shrink-0">
                <MessageCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground mb-1">{t("contact.whatsapp")}</div>
                <a
                  href="https://wa.me/5511799634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary hover:underline"
                >
                  +905511799634
                </a>
              </div>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 ml-4">
                <a href="https://wa.me/5511799634" target="_blank" rel="noopener noreferrer">
                  {t("contact.messageUs")}
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">{t("contact.social")}</h3>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/fatih-aydo%C4%9Fmu%C5%9F-63878561/  "
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-card border border-border hover:bg-primary hover:border-primary transition-colors group"
              >
                <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://www.facebook.com/fatih.aydogmus.5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-card border border-border hover:bg-primary hover:border-primary transition-colors group"
              >
                <Facebook className="h-6 w-6 text-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://instagram.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-card border border-border hover:bg-primary hover:border-primary transition-colors group"
              >
                <Instagram className="h-6 w-6 text-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
