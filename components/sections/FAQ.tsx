import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "What exactly do I get?",
    answer: "You get access to swing trade alerts, daily education content, trading tools and calculators, and an active Discord community. Everything is designed around a math-driven process focused on big winners and small losers."
  },
  {
    question: "How do I join?",
    answer: "Simply click 'Join on Whop' to checkout, then link your Discord account. You'll be automatically added to the community within minutes."
  },
  {
    question: "Are there refunds?",
    answer: "No refunds are offered. However, you can cancel anytime through your Whop account with no questions asked."
  },
  {
    question: "I'm new to swing trading—is this okay for me?",
    answer: "Yes! The rules and education are designed to be beginner-friendly. We focus on process over complexity, making it accessible for traders at all experience levels."
  },
  {
    question: "Do you guarantee profits?",
    answer: "No. Trading involves risk and can result in loss of capital. Past results are not indicative of future results. We provide education and tools, but success depends on your execution and market conditions."
  },
  {
    question: "What if I have a day job?",
    answer: "Perfect! Swing trading is designed for people with day jobs. The strategy uses clear levels and planning, so you don't need to stare at screens all day. Most management happens before or after market hours."
  }
]

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect text-cyan-100 border-cyan-400/50 cyan-glow">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Frequently asked questions
          </h2>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-cyan-400/50 rounded-lg px-6 glass-effect bg-black/40 cyan-glow fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <AccordionTrigger className="text-left hover:no-underline text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-cyan-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

