import { TestimonyCard } from "@/components/TestimonyCard"
import Image from "next/image"

export function TestimonySection() {
  return (
    <section className="px-8 md:px-64 md:py-20 space-y-8 md:space-x-8">
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="font-bold text-5xl leading-14">
            Nisl netus et metus vulputate urna
          </h2>
          <p className="text-sm">
            Nisl netus et metus vulputate urna proin urna aliquam sapien
            interdum adipiscing eget eget cursus sagittis faucibus lectus diam
            in quam facilisis ac diam
          </p>
        </div>
        <div className="flex space-x-4">
          <TestimonyCard
            foto={<Image src="/foto.png" alt="Foto" width={48} height={48} />}
            nome="Usuário"
            nota={5}
            periodo="um mês atrás"
            depoimento="Nisl netus et metus vulputate urna proin urna aliquam sapien"
          />
        </div>
      </div>
    </section>
  )
}
