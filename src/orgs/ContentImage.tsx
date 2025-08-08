import Image from "next/image"
import advogado from "../../public/advogado-sentado.png"
import { Button } from "@/components/Button"

export function Content() {
  return (
    <section className="px-8 py-8 md:px-16 md:py-20 grid grid-cols-12 space-y-8 md:space-x-8">
      <div className="col-span-12 md:col-span-1 flex flex-col text-center justify-center md:text-left space-y-4"></div>
      <div className="col-span-12 md:col-span-4 flex items-center justify-center left-0">
        <Image
          src={advogado}
          alt="Advogado sentado em escritorio de advocacia"
          className=""
        />
      </div>
      <div className="col-span-12 md:col-span-6 flex flex-col text-center justify-center md:text-left space-y-4 text-gray-600">
        <h2>Quem somos</h2>
        <div>
          <p>
            O Ribeiro Advocacia é um escritório jurídico focado em oferecer
            soluções personalizadas, eficientes e humanas. Atuamos com
            profundidade técnica e escuta atenta, porque acreditamos que cada
            caso carrega mais do que números e normas, carrega histórias,
            perdas, esperanças e reconstruções.
          </p>
          <br />
          <p>
            Fundado pelo advogado Dr. Eduardo Ribeiro, o escritório se destaca
            pelo atendimento direto, análise minuciosa de contratos e defesa
            estratégica contra abusos cometidos por bancos, empresas e
            instituições.
          </p>
          <br />
          <p>
            Nosso propósito é claro, fazer do Direito uma ferramenta de
            proteção, reconstrução e dignidade. Conte conosco para defender o
            que é essencial para você.
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Button outlined={false} color="#c21500">
            Entrar em contato
          </Button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-1 flex flex-col text-center justify-center md:text-left space-y-4"></div>
    </section>
  )
}
