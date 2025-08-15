import { Button } from "@/components/Button"

export function Hero() {
  return (
    <section className="relative px-4 md:px-16 min-h-[calc(100dvh)] grid items-center bg-cover bg-[url('/advogado-em-pe.jpg')] bg-center md:bg-[position:center_10%]">
      <div className="absolute inset-0 bg-gray-900/70"></div>

      <div className="relative grid grid-cols-12">
        <div className="col-span-12 md:col-span-7 space-y-2 text-white text-center md:text-left">
          <h1>Bem-vindo ao Ribeiro Advocacia</h1>
          <p>
            Proteção e confiança para o que mais importa.
          </p>
          <div className="w-full flex justify-center items-center md:justify-start">
            <Button outlined={false} color="#c21500">
              Entrar em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
