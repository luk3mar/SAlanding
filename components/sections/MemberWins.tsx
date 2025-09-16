import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SAMPLE_WINS } from "@/lib/constants"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function MemberWins() {
  return (
    <section className="py-10">
      <div className="w-full">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <Badge variant="outline" className="mb-4 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow">
            Member Wins
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Member Wins
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {SAMPLE_WINS.map((win, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden rounded-none border-0 shadow-none bg-transparent cursor-pointer">
                  <div className="aspect-[3/4] sm:aspect-[4/5] bg-black/40">
                    <img
                      src={win.src}
                      alt={win.caption}
                      className="h-full w-full object-contain p-1.5"
                    />
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 border-0 bg-transparent shadow-none">
                <img src={win.src} alt={win.caption} className="w-full h-auto rounded-md" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
      </div>
    </section>
  )
}

