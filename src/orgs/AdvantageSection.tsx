import { Scale } from "lucide-react"
import { AdvantageCard } from "@/components/AdvantageCard"

export function AdvantageSection() {
  return (
    <section className="px-8 md:px-64 md:py-20 space-y-8 md:space-x-8">
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="font-bold text-5xl leading-14">
            Ac dictum tellus blandit
          </h2>
          <p className="text-sm">
            Nisl netus et metus vulputate urna proin urna aliquam sapien
            interdum adipiscing eget eget cursus sagittis faucibus lectus diam
            in quam facilisis ac diam
          </p>
        </div>
        <div className="flex space-x-4 pt-4">
          <AdvantageCard
            icon={<Scale className="w-5 h-5 text-red-700" />}
            titulo="vulputate urna"
            descricao="Nisl netus et metus vulputate urna proin urna aliquam sapien"
          />
        </div>
      </div>
    </section>
  )
}
