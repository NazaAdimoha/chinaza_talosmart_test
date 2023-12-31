import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactQueryProvider } from './ReactQueryProvider'
import Navbar from './components/navbar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Talosmart-Test',
  description: 'Social media Web App Task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ReactQueryProvider>
          {/* <Navbar /> */}
          <body className={inter.className}>{children}</body>
      </ReactQueryProvider>
    </html>
  )
}
