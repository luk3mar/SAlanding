import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, GraduationCap, Calculator, Target } from "lucide-react"

const tools = [
  {
    icon: Bell,
    title: "Alerts",
    description: "Swing entries and management alerts with clear entry, stop, and target levels."
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Rules, setups, and live breakdowns to help you understand the process."
  },
  {
    icon: Calculator,
    title: "Tools",
    description: "Calculators, sell logic (9/20), VCP/tightness analysis, and pivot/breakout tools."
  }
]

export function Tools() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow">
            Tools & Process
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Everything you need to trade with discipline
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {tools.map((tool, index) => (
            <Card key={index} className="glass-effect border-cyan-400/50 cyan-glow fade-in-up floating-animation bg-black/40" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500/30 to-blue-600/30 cyan-glow">
                    <tool.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <CardTitle className="text-xl text-white">{tool.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-100">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mx-auto max-w-2xl text-center fade-in-up">
          <Card className="glass-effect border-cyan-400/50 cyan-glow bg-black/40">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Target className="h-6 w-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">Why it's different</h3>
              </div>
              <p className="text-lg text-cyan-100">
                Process over hype. Big winners / small losers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

