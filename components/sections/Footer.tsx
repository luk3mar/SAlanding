import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/constants"
import { Twitter, Youtube, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-cyan-500/20">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={SITE.logoSrc} 
                alt={SITE.brand}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">{SITE.brand}</span>
            </div>
            <p className="text-sm text-cyan-100">
              A Discord community with swing trade alerts, education, and tools designed to help traders accelerate profitability.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Community</h3>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto text-cyan-100 hover:text-cyan-300">
                <a href={SITE.twitterUrl} target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-4 w-4" />
                  Follow on X
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto text-cyan-100 hover:text-cyan-300">
                <a href={SITE.youtubeChannelUrl} target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" />
                  YouTube Channel
                </a>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Support</h3>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto text-cyan-100 hover:text-cyan-300">
                <a href={`mailto:${SITE.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </a>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Join Now</h3>
            <Button asChild className="cyan-glow bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0">
              <a href={SITE.whopUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Join on Whop
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <div className="space-y-2 text-sm text-cyan-100">
              <p>
                Educational purposes only. Nothing here is financial, investment, or tax advice. 
                Trading involves risk and can result in loss of capital. Past results are not 
                indicative of future results. No guarantee of profits.
              </p>
              <p>No refunds. Cancel anytime via Whop.</p>
            </div>
            <div className="text-sm text-cyan-100">
              <p>&copy; 2024 {SITE.brand}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

