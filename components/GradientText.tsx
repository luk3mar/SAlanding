import { cn } from "@/lib/utils"
import { BRAND } from "@/lib/constants"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to right, ${BRAND.gradientFrom}, ${BRAND.gradientTo})`,
      }}
    >
      {children}
    </span>
  )
}

