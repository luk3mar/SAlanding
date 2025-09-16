import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SITE } from "@/lib/constants"
import { BarChart3, ExternalLink, Play } from "lucide-react"

export function BacktestShowcase() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow">
            Backtest & Tracking
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Third-party tracked results
          </h2>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Transparent tracking</h3>
              <ul className="space-y-3 text-cyan-100">
                <li className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>All alerts tracked in public Google Sheet</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>Backtests across multiple selling strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>Results match rules criteria and process</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>No cherry-picking or selective reporting</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild className="cyan-glow bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 button-animate">
                <a href={SITE.googleSheetUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Sheet
                </a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="glass-effect text-cyan-100 border-cyan-400/50 hover:bg-cyan-500/20 button-animate bg-black/40">
                    <Play className="mr-2 h-4 w-4" />
                    Review Video
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Backtest Review</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/zVAsfp47BRY"
                      title="Backtest Review"
                      className="h-full w-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="space-y-6">
            {SITE.googleSheetUrl ? (
              <div className="aspect-video rounded-2xl overflow-hidden border border-cyan-400/50 bg-slate-800/80 glass-effect">
                <iframe
                  src={SITE.googleSheetUrl.replace('/edit', '/preview')}
                  className="h-full w-full"
                  title="Backtest Results"
                />
              </div>
            ) : (
              <div className="grid gap-4">
                <Card className="glass-effect border-cyan-400/50 cyan-glow bg-black/40">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <BarChart3 className="h-5 w-5 text-cyan-300" />
                      <span>Win Rate: 68%</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-cyan-100">Based on 150+ tracked trades</p>
                  </CardContent>
                </Card>
                <Card className="glass-effect border-cyan-400/50 cyan-glow bg-black/40">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <BarChart3 className="h-5 w-5 text-cyan-300" />
                      <span>Avg R-Multiple: 2.1R</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-cyan-100">Risk-adjusted returns</p>
                  </CardContent>
                </Card>
                <Card className="glass-effect border-cyan-400/50 cyan-glow bg-black/40">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <BarChart3 className="h-5 w-5 text-cyan-300" />
                      <span>Max Drawdown: 8%</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-cyan-100">Conservative risk management</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
