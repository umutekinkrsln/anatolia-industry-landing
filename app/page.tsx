"use client"

import { AboutBrief } from "@/components/about-brief"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Statistics } from "@/components/statistics"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Statistics />
        
        {/* Yeni eklediğimiz bölüm: İstatistiklerden sonra, projelerden önce */}
        <AboutBrief /> 
        
        <Projects />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}