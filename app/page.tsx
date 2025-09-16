"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Tools } from "@/components/sections/Tools"
import { BacktestShowcase } from "@/components/sections/BacktestShowcase"
import { MemberWins } from "@/components/sections/MemberWins"
import { Objections } from "@/components/sections/Objections"
import { Outcomes } from "@/components/sections/Outcomes"
import { YouTubeCarouselSection } from "@/components/sections/YouTubeCarousel"
import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"
import { Footer } from "@/components/sections/Footer"

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleWatchOverview = () => {
    setIsVideoModalOpen(true)
  }

  return (
    <div className="min-h-screen gradient-flow">
      <Header onWatchOverview={handleWatchOverview} />
      
      <main>
        <Hero onWatchOverview={handleWatchOverview} />
        <HowItWorks />
        <Tools />
        <BacktestShowcase />
        <MemberWins />
        <Objections />
        <Outcomes />
        <YouTubeCarouselSection />
        <Pricing />
        <FAQ />
      </main>
      
      <Footer />
      
      {/* Video Overview Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Swing Accelerate Overview</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/zVAsfp47BRY"
              title="Swing Accelerate Overview"
              className="h-full w-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
