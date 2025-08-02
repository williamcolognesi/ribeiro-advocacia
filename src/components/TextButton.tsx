import { MoveRight } from "lucide-react"

export function TextButton() {
  return (
    <a href="https://wa.me/5519994337803" target="_blank">
      <button className="flex justify-between items-center font-semibold cursor-pointer space-x-4 border-b">
        <span>Entrar em contato</span> <MoveRight />
      </button>
    </a>
  )
}
