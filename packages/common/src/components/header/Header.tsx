import { CmsMetaModel } from '../../sdk/services/models'

function Header({ cmsData }: { cmsData: CmsMetaModel }) {
  return (
    <>
      <h1 className="text-red bg-red-400">{JSON.stringify(cmsData)}</h1>
    </>
  )
}

export default Header
