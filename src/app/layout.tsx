import type { Metadata } from "next"
import {
  Inter,
  Cormorant_Garamond,
  Playfair_Display,
  Libre_Baskerville,
  Plus_Jakarta_Sans,
} from "next/font/google"
import "./globals.css"

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
    url: "https://www.seusite.com",
    siteName: "Ribeiro Advocacia",
    images: [
      {
        url: "https://www.seusite.com/imagem-compartilhamento.jpg",
        width: 1200,
        height: 630,
        alt: "Ribeiro Advocacia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${fontTitle.variable}`}>
        {children}
      </body>
    </html>
  )
}
