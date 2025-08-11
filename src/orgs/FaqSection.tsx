import { Question } from "@/components/Question"

export function FaqSection() {
  return (
    <section className="px-4 py-8 md:px-16 md:py-20 space-y-8 md:space-x-8 bg-[#fafafa]">
      <div className="space-y-6">
        <div className="">
          <h2 className="font-bold text-5xl leading-14 text-gray-600">
            Perguntas frequentes
          </h2>
        </div>
        <div className="flex flex-col space-y-6">
          <Question
            open={true}
            pergunta="Fiz uma compra, me arrependi e a loja recusou o cancelamento. Isso é permitido?"
            resposta="Nem sempre o arrependimento dá direito automático ao cancelamento. Mas se a compra foi feita fora do estabelecimento físico — como por telefone, internet ou catálogo — o Código de Defesa do Consumidor garante um prazo de 7 dias para desistência, mesmo sem justificar o motivo.
            Se a empresa não respeitou esse direito, você pode exigir o cancelamento e a devolução integral dos valores. E mais: se houve cobrança indevida ou má-fé, é possível buscar indenização por danos morais."
          />
          <Question
            pergunta="Estão me cobrando por um serviço que nunca usei ou não reconheço. Sou obrigado a pagar?"
            resposta="Nenhum consumidor é obrigado a pagar por algo que não contratou ou que foi ativado sem consentimento. Se isso aconteceu, você tem direito à imediata suspensão da cobrança, à exclusão do débito do seu nome e, em muitos casos, à reparação por danos morais.
O importante é não aceitar o abuso como “normal”. Cobrança indevida é uma infração grave, e você não precisa enfrentar isso sozinho."
          />

          <Question
            pergunta="Descobri que tenho empréstimos no meu nome que nunca autorizei. O banco pode fazer isso?"
            resposta="Não. Isso é grave e infelizmente comum. Nenhum banco pode incluir contratos ou descontos sem sua autorização expressa. Isso inclui empréstimos, cartões de crédito, seguros e consignados.
Nesses casos, a responsabilidade do banco é objetiva — ou seja, ele responde independentemente de culpa. Você pode exigir a suspensão imediata dos descontos, o cancelamento dos contratos e a devolução em dobro do que foi pago. Além disso, é possível buscar reparação por danos morais."
          />

          <Question
            pergunta="Os juros do meu financiamento parecem abusivos. É possível revisar o contrato?"
            resposta="Sim. Embora os bancos tenham certa liberdade para fixar juros, essa liberdade tem limites. Quando as taxas são excessivamente altas ou o contrato contém cláusulas que desequilibram a relação, é possível pedir a revisão judicial dos termos.
A ação revisional serve para adequar o contrato ao que é justo e legal, com base na boa-fé e no princípio do equilíbrio contratual. E, enquanto a ação estiver em curso, também é possível pedir tutela para suspender cobranças abusivas."
          />

          <Question
            pergunta="Minha conta foi invadida ou suspensa sem motivo claro. A plataforma pode fazer isso?"
            resposta="As plataformas digitais têm regras, mas essas regras não estão acima da lei. Quando você tem sua conta suspensa, invadida ou bloqueada injustamente, especialmente se isso te prejudica financeiramente ou pessoalmente, é possível acionar a Justiça para reverter a situação.
Além da recuperação da conta, é possível pleitear indenização por eventuais danos — especialmente em casos envolvendo influenciadores, vendas online ou perda de dados importantes."
          />

          <Question
            pergunta="Fui vítima de um golpe pela internet ou pelo celular. Tenho algum direito contra o banco ou empresa envolvida?"
            resposta="Sim. Se o golpe ocorreu por falha de segurança de um banco, empresa ou plataforma (como links falsos enviados por SMS oficial, WhatsApp clonado, e-mails de phishing que passaram sem alerta), a responsabilidade recai sobre quem deveria oferecer proteção.
Você não está desamparado. Existe jurisprudência firme no sentido de que consumidores vítimas de fraudes têm direito à reparação integral dos danos sofridos, inclusive morais. A recomendação é buscar orientação jurídica o quanto antes — o tempo pode fazer diferença na preservação de provas."
          />

          <Question
            pergunta="Quero me divorciar. Preciso do consentimento do meu ex-cônjuge?"
            resposta="Não. O divórcio é um direito individual e não depende de concordância da outra parte. Se houver acordo sobre filhos, bens e pensão, o processo pode ser feito de forma extrajudicial, em cartório, com mais agilidade.
Mas se houver discordância, o divórcio será judicial. Isso não significa que será demorado ou traumático — com orientação adequada, é possível conduzir o processo com respeito e eficiência, protegendo seus direitos e sua saúde emocional."
          />

          <Question
            pergunta="Tenho um filho que completou 18 anos. Posso parar de pagar pensão?"
            resposta="Não automaticamente. A maioridade não encerra, por si só, a obrigação alimentar. O ideal é ingressar com uma ação de exoneração de alimentos, demonstrando que o(a) filho(a) já possui meios próprios de subsistência ou não estuda mais.
A exoneração só vale após decisão judicial. Interromper o pagamento por conta própria pode gerar execução da dívida e até prisão civil. Se a situação mudou, a via correta é a revisão com base nos novos fatos."
          />

          <Question
            pergunta="Trabalhei sem carteira assinada e fui dispensado sem receber nada. Ainda tenho algum direito?"
            resposta="Sim. A informalidade não retira os direitos básicos do trabalhador. Mesmo sem registro, é possível exigir judicialmente tudo o que a lei garante: salário, férias, 13º, FGTS, verbas rescisórias e até reconhecimento de vínculo.
Você não precisa aceitar calado. Há como comprovar o vínculo por meio de testemunhas, mensagens, recibos e outros documentos."
          />

          <Question
            pergunta="Trabalho em ambiente insalubre, mas não recebo adicional. Isso é legal?"
            resposta="Não. Se você está exposto a agentes nocivos (como ruído excessivo, calor, produtos químicos, agentes biológicos etc.), tem direito ao adicional de insalubridade, que varia de 10% a 40% sobre o salário-mínimo.
O não pagamento configura infração trabalhista e, se persistente, pode justificar até uma rescisão indireta. É possível ingressar com ação trabalhista para exigir o pagamento retroativo do adicional, com reflexos em férias, 13º, FGTS e horas extras."
          />
        </div>
      </div>
    </section>
  )
}
