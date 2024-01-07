import { Metadata } from 'next'
import Link from 'next/link'
import { colors, spacing } from '@myshop/core/variable.stylex'
import * as stylex from '@stylexjs/stylex'

export const metadata: Metadata = {
  title: 'EShop Ecommerce Site',
  description: 'Deals in Clothes. Have different kind of materials to buy like Jenes, kids clothig, Women clothing etc',
}

const styles = stylex.create({
  container: {
    color: colors['e-black'],
    backgroundColor: colors['e-white2'],
    padding: spacing[1],
  },
})

export default function Home() {
  return (
    <main {...stylex.props(styles.container)}>
      <div className="e-f32-w500-lh12 text-e-grey2 text-wrap">adlfjadlsfjkdjsf</div>
      <Link href="/login">ABC</Link>
    </main>
  )
}
