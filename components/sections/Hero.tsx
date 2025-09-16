import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/GradientText"
import { SITE, COPY } from "@/lib/constants"
import { Play } from "lucide-react"

interface HeroProps {
  onWatchOverview: () => void
}

export function Hero({ onWatchOverview }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Full background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-600/30 to-purple-600/40" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-cyan-400/40 to-indigo-600/30" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4 fade-in-up">
            <Badge className="px-3 py-1 sm:px-4 sm:py-2 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow text-xs sm:text-sm">
              Math-driven process
            </Badge>
            <Badge className="px-3 py-1 sm:px-4 sm:py-2 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow text-xs sm:text-sm">
              Tools included
            </Badge>
            <Badge className="px-3 py-1 sm:px-4 sm:py-2 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow text-xs sm:text-sm">
              Cancel anytime via Whop
            </Badge>
          </div>
          
          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white fade-in-up px-4">
            <GradientText className="chromatic-glow">{COPY.hero.headline}</GradientText>
          </h1>
          
          <p className="mb-8 text-lg sm:text-xl lg:text-2xl text-cyan-100 fade-in-up px-4">
            {COPY.hero.subhead}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center fade-in-up px-4">
            <Button size="lg" asChild className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 cyan-glow bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 button-animate w-full sm:w-auto">
              <a href={SITE.whopUrl} target="_blank" rel="noopener noreferrer">
                {COPY.hero.ctaPrimary}
              </a>
            </Button>
            <Button size="lg" variant="outline" onClick={onWatchOverview} className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 glass-effect text-cyan-100 border-cyan-400/50 hover:bg-cyan-500/20 button-animate bg-black/60 cyan-glow w-full sm:w-auto">
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {COPY.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

