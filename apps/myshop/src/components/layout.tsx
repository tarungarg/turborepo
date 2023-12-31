import { Footer, Header } from '@myshop/common'
import React from 'react'
import { getCMSDetails } from '@myshop/common'
import { CmsMetaModel } from '@myshop/common'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const cmsData: CmsMetaModel = await getCMSData()

  return (
    <>
      <Header cmsData={cmsData} />
      <div className="bg-red text-red w-100 vvv"> adlfjadlsfjkdjsf</div>
      {children}
      <Footer cmsData={cmsData} />
    </>
  )
}

export async function getCMSData(): Promise<Awaited<CmsMetaModel>> {
  return await getCMSDetails<CmsMetaModel>({})
}
