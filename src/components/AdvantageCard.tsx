import { ReactNode } from "react"

interface AdvantageCardProps {
  icon: ReactNode
  titulo: string
  descricao: string
}

export function AdvantageCard({ icon, titulo, descricao }: AdvantageCardProps) {
  return (
    <div className="border p-4 rounded-3xl space-y-2 bg-white/80 ">
      <div className="flex items-center space-x-2">
        {icon}
        <div className="font-bold text-lg">{titulo}</div>
      </div>
      <div className="text-sm text-gray-700">{descricao}</div>
    </div>
  )
}
