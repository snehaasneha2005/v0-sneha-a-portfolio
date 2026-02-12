import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'Sneha A | Portfolio',
  description: 'Personal portfolio of Sneha A - Computer Science and Engineering Student passionate about Web Development & Programming.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
