import { YouTubeCarousel } from "@/components/YouTubeCarousel"
import { Badge } from "@/components/ui/badge"
import { SITE, SAMPLE_VIDEO_IDS } from "@/lib/constants"

export function YouTubeCarouselSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow">
            Education
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Watch breakdowns on the{" "}
            <a 
              href={SITE.youtubeChannelUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              @Lukevol
            </a>{" "}
            channel
          </h2>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <YouTubeCarousel videoIds={SAMPLE_VIDEO_IDS} />
        </div>
      </div>
    </section>
  )
}

