import { ArrowRight } from "lucide-react"

interface ButtonProps {
  outlined: boolean
  color: string
  children: React.ReactNode
}

export function Button({ outlined, color, children }: ButtonProps) {
  return (
    <a href="https://wa.me/5519992753375" target="_blank">
      <button
        style={{
          backgroundColor: outlined ? "transparent" : color,
          color: outlined ? color : "white",
          border: outlined ? `1px solid ${color}` : undefined,
        }}
        className="flex justify-between items-center gap-2 px-5 h-12 text-white font-semibold rounded-xl cursor-pointer"
      >
        {children}
      </button>
    </a>
  )
}
