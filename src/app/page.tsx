import { AdvantageSection } from "@/orgs/AdvantageSection"
import { Content } from "@/orgs/ContentImage"
import { ContentMaps } from "@/orgs/ContentMaps"
import { CtaSection } from "@/orgs/CtaSection"
import { FaqSection } from "@/orgs/FaqSection"
import { Header } from "@/orgs/Header"
import { Hero } from "@/orgs/Hero"
import { TestimonySection } from "@/orgs/TestimonySection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Content />
      <AdvantageSection />
      <TestimonySection />
      <FaqSection />
      <CtaSection />
      <ContentMaps />
    </main>
  )
}
