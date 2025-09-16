import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SITE, COPY } from "@/lib/constants"
import { Check, ExternalLink } from "lucide-react"

const features = [
  "Swing trade alerts with clear levels",
  "Daily education and rule breakdowns", 
  "Trading tools and calculators",
  "Active Discord community",
  "Risk management guidance",
  "Process-driven approach"
]

export function Pricing() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow">
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Simple, transparent pricing
          </h2>
        </div>
        
        <div className="mx-auto max-w-md fade-in-up">
          <Card className="border-2 border-cyan-400 glass-effect bg-black/40 cyan-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">{SITE.brand}</CardTitle>
              <div className="text-4xl font-bold text-white">
                $49<span className="text-lg font-normal text-cyan-100">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-cyan-300" />
                    <span className="text-cyan-100">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full cyan-glow bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0" asChild>
                  <a href={SITE.whopUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Join on Whop
                  </a>
                </Button>
                
                <p className="text-sm text-cyan-100 text-center">
                  {COPY.pricing.note}
                </p>
                
                <p className="text-sm text-cyan-100 text-center">
                  {SITE.discordJoinNote}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

