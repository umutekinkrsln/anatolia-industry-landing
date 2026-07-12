"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to "Neler Yaptık?" section
  const scrollToAbout = () => {
    const allH2 = document.querySelectorAll('h2')
    let targetElement: HTMLElement | null = null
    
    allH2.forEach((h2) => {
      if (h2.textContent?.includes('Neler Yaptık') || h2.textContent?.includes('What Have We Done')) {
        targetElement = h2 as HTMLElement
      }
    })

    if (targetElement) {
      const headerOffset = 100
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const getNavText = (key: string, fallbackTr: string, fallbackEn: string) => {
    const translated = t(key)
    if (translated === key) {
      return language === "tr" ? fallbackTr : fallbackEn
    }
    return translated
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-md p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                  language === "en"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("tr")}
                className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                  language === "tr"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                TR
              </button>
            </div>
          </div>

          <div className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">
            ANATOLİA<span className="text-secondary"> INDUSTRY</span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              {getNavText("nav.services", "Hizmetler", "Services")}
            </a>

            <a href="#projects" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              {getNavText("nav.projects", "Projeler", "Projects")}
            </a>

            <button
              onClick={scrollToAbout}
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              {getNavText("nav.about", "Hakkımızda", "About")}
            </button>

            <a href="#contact">
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {getNavText("nav.contact", "İletişim", "Contact")}
              </Button>
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {getNavText("nav.services", "Hizmetler", "Services")}
              </a>

              <a
                href="#projects"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {getNavText("nav.projects", "Projeler", "Projects")}
              </a>

              <button
                onClick={() => {
                  scrollToAbout()
                  setIsMobileMenuOpen(false)
                }}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors text-left"
              >
                {getNavText("nav.about", "Hakkımızda", "About")}
              </button>

              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="default" size="sm" className="w-full bg-primary text-primary-foreground">
                  {getNavText("nav.contact", "İletişim", "Contact")}
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}