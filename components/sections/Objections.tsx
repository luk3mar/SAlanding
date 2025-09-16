import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp, DollarSign, Shield } from "lucide-react"

const objections = [
  {
    icon: Clock,
    objection: "I work a day job",
    reframe: "Swing cadence + clear levels; you can plan trades without staring at screens."
  },
  {
    icon: TrendingUp,
    objection: "I'm not profitable",
    reframe: "We give you the rules, education, and tools to execute more consistently."
  },
  {
    icon: DollarSign,
    objection: "Small account",
    reframe: "Risk-based sizing and small-loss discipline help you survive and learn."
  },
  {
    icon: Shield,
    objection: "I hate hype alerts",
    reframe: "Rules-first, math-driven process. No nonsense."
  }
]

export function Objections() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow">
            Common Concerns
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Addressing your concerns
          </h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {objections.map((item, index) => (
            <Card key={index} className="border-l-4 border-l-cyan-400 glass-effect border-cyan-400/50 cyan-glow bg-black/40 fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                    <item.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <CardTitle className="text-lg text-cyan-300">
                    "{item.objection}"
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-100">{item.reframe}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

