/**
 * Product page component.
 *
 * Renders a heading with a link to the home page.
 */
import React from 'react'
import type { Metadata } from 'next'
import { Details, ProductData } from '@myshop/product'
import { getProductData } from '@myshop/common'
import { ConstantsService, CoreConstantsEnum } from '@myshop/core'
import '../style.css'

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const product: ProductData = await getProducts()

  return {
    title: product.name,
    description: product.desc,
    keywords: product.meta_keywords,
  }
}

async function Product() {
  ConstantsService.setConstants(CoreConstantsEnum.APIUrl, 'http://localhost:4000')
  const product: ProductData = await getProducts()
  return <Details product={product} />
}

export default Product

export async function getProducts(): Promise<ProductData> {
  let productData = await getProductData<Promise<Response>>({})
  productData = await productData.json()
  return productData as Response & ProductData
}
