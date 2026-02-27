import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oumar Sogodogo | Expert Cybersécurité & Cloud',
  description: 'Portfolio professionnel - Expert en Cybersécurité Cloud System & Network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-300">© 2026 Oumar Sogodogo. Tous droits réservés.</p>
            <p className="text-gray-400 text-sm mt-2">oumarsogodogo775@gmail.com | +33 6 77 36 73 84</p>
          </div>
        </footer>
      </body>
    </html>
  )
}