import { Star } from "lucide-react"
import { ReactNode } from "react"

interface TestimonyCardProps {
  foto: ReactNode
  nome: string
  nota: number
  periodo: string
  depoimento: string
}

export function TestimonyCard({
  foto,
  nome,
  nota,
  periodo,
  depoimento,
}: TestimonyCardProps) {
  return (
    <div className="bg-gray flex flex-col p-6 rounded-2xl w-full h-[100%]">
      <div className="flex space-x-1 space-y-2">
        {foto}
        <div>
          <p className="font-bold font-gray-600">{nome}</p>
          <div className="flex space-x-1">
            <div className="flex">
              {Array.from({ length: nota }).map((_, index) => (
                <Star
                  key={index}
                  className="w-4 h-4 fill-yellow stroke-yellow"
                />
              ))}
            </div>

            <span className="text-[12px] text-gray-400">{periodo}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 font-medium leading-6">
        {depoimento}
      </p>
    </div>
  )
}
