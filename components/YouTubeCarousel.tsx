"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface YouTubeCarouselProps {
  videoIds: string[]
  className?: string
}

export function YouTubeCarousel({ videoIds, className }: YouTubeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videoIds.length)
  }

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videoIds.length) % videoIds.length)
  }

  if (videoIds.length === 0) return null

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted">
        <iframe
          src={`https://www.youtube.com/embed/${videoIds[currentIndex]}?rel=0&modestbranding=1`}
          title="YouTube video"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      {videoIds.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevVideo}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextVideo}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <div className="mt-4 flex justify-center space-x-2">
            {videoIds.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-muted"
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

