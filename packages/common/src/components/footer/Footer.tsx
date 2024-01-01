import { CmsMetaModel } from '../../sdk/services/models'

function Footer({ cmsData }: { cmsData: CmsMetaModel }) {
  return (
    <>
      <h1>{JSON.stringify(cmsData)}</h1>
    </>
  )
}

export default Footer
