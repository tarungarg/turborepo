// import { Inter } from 'next/font/google'

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
