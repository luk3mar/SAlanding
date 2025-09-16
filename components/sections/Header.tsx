import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/constants"
import { Play } from "lucide-react"

interface HeaderProps {
  onWatchOverview: () => void
}

export function Header({ onWatchOverview }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-500/20 bg-gradient-to-r from-cyan-900/60 via-slate-900/40 to-blue-900/60 backdrop-blur supports-[backdrop-filter]:bg-transparent">
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src={SITE.logoSrc} 
            alt={SITE.brand}
            className="h-8 w-8 sm:h-12 sm:w-12"
          />
          <span className="text-lg sm:text-2xl font-bold text-white chromatic-glow">{SITE.brand}</span>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="outline" onClick={onWatchOverview} className="glass-effect text-cyan-100 border-cyan-400/50 hover:bg-cyan-500/20 button-animate bg-black/60 cyan-glow text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
            <Play className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Watch Overview</span>
            <span className="sm:hidden">Watch</span>
          </Button>
          <Button asChild className="cyan-glow bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 button-animate text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
            <a href={SITE.whopUrl} target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">Join on Whop</span>
              <span className="sm:hidden">Join</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

