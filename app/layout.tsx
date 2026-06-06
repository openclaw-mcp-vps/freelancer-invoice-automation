import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceFlow — Auto-generate invoices from time tracking',
  description: 'Connect Toggl or Harvest and automatically create branded invoices with payment links and tax calculations. Built for freelance developers and consultants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cca752c3-f202-4aca-ab6e-ae0c5caf62ff"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
