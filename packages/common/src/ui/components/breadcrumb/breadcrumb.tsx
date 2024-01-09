import './Breadcrumb.css'

interface BreadcrumbProps {
  header: string
  currentRoute: string
}

const Breadcrumb = ({ header, currentRoute }: BreadcrumbProps) => {
  return (
    <div className="mds-banner-wrapper">
      <h3 className="mds-banner-title lg:f-40-fw-500-lh-14 sm:f-14-fw-500-lh-14">TV COLLECTION</h3>
      <p className="mds-banner-breadcrumb lg:f-18-fw-300-lh-32 sm:f-10-fw-300-lh-14 lg:tracking-0.36">{currentRoute}</p>
    </div>
  )
}

export default Breadcrumb
