import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Wrench } from "lucide-react"

const steps = [
  {
    icon: Users,
    title: "Join on Whop",
    description: "Connect your Discord account and get instant access to the community."
  },
  {
    icon: BookOpen,
    title: "Plug into alerts & daily education",
    description: "Receive swing trade alerts and learn the rules through daily education content."
  },
  {
    icon: Wrench,
    title: "Use the tools & rules to execute with discipline",
    description: "Apply the math-driven process with included tools to maintain consistent execution."
  }
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Get started in 3 simple steps
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="text-center glass-effect border-cyan-400/50 cyan-glow fade-in-up floating-animation bg-black/40" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-600/30 cyan-glow">
                  <step.icon className="h-8 w-8 text-cyan-300" />
                </div>
                <CardTitle className="text-xl text-white">
                  Step {index + 1}: {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-100">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

