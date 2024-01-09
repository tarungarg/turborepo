import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EShop Ecommerce Site',
  description: 'Deals in Clothes. Have different kind of materials to buy like Jenes, kids clothig, Women clothing etc',
}

export default function Home() {
  return (
    <main className="">
      <Link href="/login">Login</Link>
    </main>
  )
}
