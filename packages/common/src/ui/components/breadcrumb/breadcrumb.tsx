import './Breadcrumb.css'

interface BreadcrumbProps {
    header: string
    currentRoute: string
}

const Breadcrumb = ({ header, currentRoute }: BreadcrumbProps) => {
    console.log(header)
    return (
        <div className="mds-banner-wrapper">
            <h3 className="mds-banner-title">{header}</h3>
            <p className="mds-banner-breadcrumb">{currentRoute}</p>
        </div>
    )
}

export default Breadcrumb