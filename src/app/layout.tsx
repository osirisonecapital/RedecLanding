import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'REDEC - Electrical Engineering for Naval & Maritime Projects',
  description: 'Your reliable electrical engineering partner for naval & maritime projects, specializing in dredging, offshore, yachts, and cranes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-white`}>
        {children}
      </body>
    </html>
  )
}
