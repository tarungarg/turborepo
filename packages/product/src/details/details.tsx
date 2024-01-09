'use client'

import './details.css'
import Content from './content'
import CarouselDefault from '../carousel/carousel'
import { ProductData } from '../interfaces/product'
import CustomTab from '../tab/customTab'

export const Details = ({ product }: { product: ProductData }) => {
  return (
    <>
      <section key={'wrapper' + product.id} className="mds-products-details-wrapper">
        <CarouselDefault
          key={'carousel' + product.id}
          images={product.images}
          showStatus={false}
          title={'*LG C2 42 (106cm) 4K Smart OLED evo TV'}
          showIndicators={false}
        />
        <Content key={'content' + product.id} product={product} />
      </section>
      <CustomTab key={'customTab' + product.id} data={product.tabData} defaultValue={'0'} />
    </>
  )
}

export default Details
