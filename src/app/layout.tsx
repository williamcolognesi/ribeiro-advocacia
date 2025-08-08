import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
