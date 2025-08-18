import type { Metadata } from "next"
import Script from "next/script"
import {
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google"
import "./globals.css"
import { ButtonToTop } from "@/components/ButtonToTop"
import { legalService } from "@/structured-data/legalService"
import { faq } from "@/structured-data/faq"
import { GoogleTagManager } from "@next/third-parties/google"


const fontTitle = Plus_Jakarta_Sans({
  variable: "--font-title",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  openGraph: {
    title: "Ribeiro Advocacia",
    description:
      "Escritório de advocacia especializado em direito civil, trabalhista e empresarial. Atendimento personalizado, soluções jurídicas eficientes e compromisso com os melhores resultados para nossos clientes.",
    url: "https://www.ribeiroadvocacia.site",
    siteName: "Ribeiro Advocacia",
    images: [
      {
        url: "https://www.ribeiroadvocacia.site/advogado-em-pe.jpg",
        width: 1200,
        height: 630,
        alt: "Ribeiro Advocacia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  verification: {
    google: "xFuQDOyrnrk3CQiU8bL8g5zln9jzQzkPjGJDSe2P21c",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Dados Estruturados - LegalService */}
        <Script
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalService),
          }}
        />

        {/* Dados Estruturados - FAQPage */}
        <Script
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faq),
          }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-N5GW4KSH"/>
      <body className={`${inter.variable} ${fontTitle.variable}`}>
        {children}
        <ButtonToTop />
      </body>
    </html>
  )
}
