import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Target, Clock } from "lucide-react"

const outcomes = [
  {
    icon: Calendar,
    timeframe: "30 days",
    title: "Foundation Building",
    description: "Know the rules, checklist, and risk sizing. Execute a few trades end-to-end with the process."
  },
  {
    icon: Target,
    timeframe: "60 days", 
    title: "Improved Selectivity",
    description: "Better trade selection and consistent pre-planning. Establish journaling habits."
  },
  {
    icon: Clock,
    timeframe: "90 days",
    title: "Process Adherence",
    description: "Strong process adherence and clear data on what's working for your specific situation."
  }
]

export function Outcomes() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow">
            Realistic Expectations
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            What to expect (no guarantees)
          </h2>
          <p className="mt-4 text-cyan-100">
            Trading involves risk. Results vary. Past performance doesn't guarantee future results.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="text-center glass-effect border-cyan-400/50 cyan-glow bg-black/40 fade-in-up floating-animation" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-600/30 cyan-glow">
                  <outcome.icon className="h-8 w-8 text-cyan-300" />
                </div>
                <Badge variant="secondary" className="mb-2 w-fit mx-auto glass-effect text-cyan-100 border-cyan-400/50">
                  {outcome.timeframe}
                </Badge>
                <CardTitle className="text-xl text-white">{outcome.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-100">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center fade-in-up">
          <Card className="mx-auto max-w-2xl glass-effect border-cyan-400/50 cyan-glow bg-black/40">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                Time Commitment
              </h3>
              <p className="text-cyan-100">
                Realistic weekly range: 3-5 hours per week for education, planning, and trade management.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

