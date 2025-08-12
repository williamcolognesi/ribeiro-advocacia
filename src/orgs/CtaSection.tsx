import { TextButton } from "@/components/TextButton"
import Image from "next/image"
import advogado from "../../public/advogado-lendo-documentos.png"
import { Button } from "@/components/Button"

export function CtaSection() {
  return (
    <section className="px-4 py-8 md:px-16 md:py-20 space-y-8 md:space-y-0 md:space-x-8 bg-red">
      <div className="grid grid-cols-12 space-x-8 space-y-8">
        <div className="hidden lg:block lg:col-span-1"></div>
        <div className="lg:col-span-5 col-span-12 text-white space-y-6">
          <h2 className="text-3xl md:text-5xl normal-case">
            Sermos referência em advocacia resolutiva e precisa, com foco na
            construção de soluções eficazes para problemas reais.
          </h2>
          <Button color="#ffffff" outlined={true}>
            Entrar em contato
          </Button>
        </div>
        <div className="hidden lg:block lg:col-span-5">
          <Image
            src={advogado}
            alt="Advogado lendo documentos"
            className=" rounded-2xl w-full h-auto"
          />
        </div>
        <div className="hidden lg:block lg:col-span-1"></div>
      </div>
    </section>
  )
}
