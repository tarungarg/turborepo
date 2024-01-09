'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { CmsMetaModel } from '../../../sdk/services/models'
import { usePathname } from 'next/navigation'
import './Header.css'
import SeachBar from '../autocomplete/searchBar'
import SideBar from '../sideBar'
import { BREADCRUMB, NAVBARDATA } from '../../../sdk/constants'
import Breadcrumb from '../breadcrumb/breadcrumb'
import NavBar from '../navBar/navBar'

const categoriesOption = [
  { value: 'all', text: 'All Categroies' },
  { value: 'tv', text: 'TV' },
  { value: 'mobile', text: 'Mobile' },
  { value: 'laptops', text: 'Laptops' },
]

function Header({ cmsData }: { readonly cmsData: CmsMetaModel }) {
  const [open, setOpen] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [currentRoute, setCurrentRoute] = useState('HOME')
  const [currentHeader, setCurrentHeader] = useState('HOME')
  const [filter, setFilter] = useState('')
  const pathName = usePathname()

  // hook to get current path on load
  useEffect(() => {
    if (pathName) {
      setCurrentRoute((BREADCRUMB as any)[pathName])
    } else {
      setCurrentRoute('HOME')
    }
  }, [pathName])

  //Function to render the different Categories
  const renderSearchFilterOption = () => {
    return categoriesOption.map((option, index) => {
      return (
        <option value={option.value} key={`filteroption-${index}`}>
          {option.text}
        </option>
      )
    })
  }

  return (
    <header className="mds-header">
      <div className="mds-header-row">
        <div className="mds-menu-left-details">
          <div className="navbar d-block d-xl-none">
            <a href="#" id="toggle-sidebar-res">
              <div className="bar-style">
                <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i>
              </div>
            </a>
          </div>
          <div className="brand-logo">
            <a href="#">
              <Image src="/images/eSHOP.svg" className="logo-img" alt="logo" width={144} height={50} />
            </a>
          </div>
        </div>
        <div className="mds-header-middle-wrapper">
          <SeachBar suggestions={suggestions} setFilter={setFilter} placeholder="Search Products" />
          <div className="mds-all-categroies-data">
            <select defaultValue="all" className="w-full text-black-900 bg-white">
              {renderSearchFilterOption()}
            </select>
          </div>
          <div className="mds-search-icon-btn">
            <button className="mdc-button mdc-button--raised mds-btn-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mds-right-details">
          <div className="mds-loginRegister-details ">
            <a href="#">Login</a>
            <span className="mds-separtor">|</span>
            <a href="#">Signup</a>
          </div>
          <div className="mds-addtocard-and-wishlist">
            <div className="mds-search-wrapper mr-10">
              <img src="/images/search-icon.webp" alt="search" />
            </div>
            <div className="mds-profile-wrapper mr-10">
              <img src="/images/profile.webp" alt="profile" />
            </div>
            <div className="mds-wishlist-wrapper mr-10">
              <img src="/images/heart.webp" alt="wishlist" />
            </div>
            <div className="mds-cart-wrapper">
              <a href="#">
                <img src="/images/cart.webp" alt="cart icon" />
                {/* <div className="mds-badge">{cartCount}</div> */}
              </a>
            </div>
            <div className="mds-humburger-wrapper">
              <img onClick={() => setOpen(true)} src="/images/menu-icon.webp" width={24} height={24} alt="menu icon" />
              <SideBar
                setCurrentHeader={setCurrentHeader}
                placement={'right'}
                list={NAVBARDATA}
                open={open}
                setOpen={setOpen}
              />
            </div>
          </div>
        </div>
      </div>
      <NavBar setCurrentHeader={setCurrentHeader} />
      <Breadcrumb currentRoute={currentRoute} header={currentHeader} />
    </header>
  )
}

export default Header
