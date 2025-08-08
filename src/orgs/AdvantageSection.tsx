import { Scale } from "lucide-react"
import { AdvantageCard } from "@/components/AdvantageCard"

export function AdvantageSection() {
  return (
    <section className="px-8 py-8 md:px-16 md:py-20 space-y-8 md:space-x-8">
      <div className="space-y-4">
        <div className="text-center space-y-2 text-gray-600">
          <h2 className="font-bold">Áreas de atuação</h2>
          <p className="text-lg">
            Atendemos pessoas físicas e pequenas empresas em conflitos jurídicos
            que exigem ação rápida, orientação precisa e domínio técnico.
            {<br />}
            Confira algumas das nossas principais frentes de atuação:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito Cível"
            descricao="Atuamos em responsabilidade civil, danos pessoais e patrimoniais, entre outras demandas que envolvem seus direitos."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito de Família"
            descricao="Oferecemos suporte em questões como divórcio, guarda de filhos, pensão alimentícia, sempre com sensibilidade e respeito às necessidades familiares."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito Imobiliário"
            descricao="Representamos nossos clientes em litígios de locações, compra e venda de imóveis, além de outras disputas relacionadas ao mercado imobiliário."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito do Consumidor"
            descricao="Defendemos seus direitos em casos de defeitos em produtos ou serviços, cobranças abusivas, negativação indevida, entre outras situações de consumo."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito Bancário"
            descricao="Revisão de contratos de empréstimo pessoal e/ou consignado e financiamentos de automóvel, questionamento de juros abusivos, ajudamos em casos de fraudes, golpes e renegociações bancárias."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito Digital"
            descricao="Protegemos seus interesses em crimes cibernéticos, recuperação de contas hackeadas ou banidas, e questões sobre litígios em plataformas digitais, além das relacionadas à LGPD (Lei Geral de Proteção de Dados)."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito Contratual"
            descricao="Especialistas na análise e elaboração de contratos para prestadores de serviços e pessoas físicas, garantindo que seus direitos sejam preservados."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito Trabalhista"
            descricao="Ações de verbas rescisórias, reconhecimento de vínculo, horas extras, adicional de insalubridade ou periculosidade, acidentes de trabalho e assédio moral."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito Tributário"
            descricao="Defesa contra cobranças indevidas, execuções fiscais, planejamento tributário, compensações e regularização de débitos para pessoas físicas e empresas."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito Criminal"
            descricao="Defesa em inquéritos e ações penais, crimes patrimoniais, estelionato, lesões, audiências de custódia, tráfico, violência doméstica e crimes cibernéticos."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito de Trânsito"
            descricao="Defesa em infrações, suspensão ou cassação de CNH, acidentes com vítimas, crimes de trânsito e regularização documental de veículos."
          />
          <AdvantageCard
            icon={<Scale />}
            titulo="Direito Previdenciário"
            descricao="Aposentadorias (por idade, tempo de contribuição, especial), pensões, auxílios por incapacidade, revisões de benefícios, BPC/LOAS e planejamento previdenciário."
          />
        </div>
      </div>
    </section>
  )
}
