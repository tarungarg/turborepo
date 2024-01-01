import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EShop Ecommerce Site',
  description: 'Deals in Clothes. Have different kind of materials to buy like Jenes, kids clothig, Women clothing etc',
}

export default function Home() {
  console.log('aaaa')
  return (
    <main className="">
      <div className="e-f32-w500-lh12 text-e-grey2 text-wrap">adlfjadlsfjkdjsf</div>
      <Link href="/login">ABC</Link>
    </main>
  )
}
