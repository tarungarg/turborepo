import React from 'react'
import { getCMSDetails, CmsMetaModel, Footer, Header } from '@myshop/common'

export default async function Layout({ children }: { readonly children: React.ReactNode }) {
  const cmsData: CmsMetaModel = await getCMSData()
  console.log(cmsData)

  return (
    <div className="container">
      <Header cmsData={cmsData} />
      {children}
      <Footer cmsData={cmsData} />
    </div>
  )
}

export async function getCMSData(): Promise<CmsMetaModel> {
  let cmsData = await getCMSDetails<Promise<Response>>({})
  cmsData = await cmsData.json()
  return cmsData as Response & CmsMetaModel
}
