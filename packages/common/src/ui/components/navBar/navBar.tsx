'use client'
import { useState } from 'react'
import SideBar from '../sideBar'
import { NAVBARDATA } from '../../../sdk/constants/navBarConstants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = ({ setCurrentHeader }: { setCurrentHeader: Function }) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="mds-header-bottom">
      <div className="mds-container">
        <div className="mds-header-bottom-row">
          <div className="mds-header-bottom-categroies">
            <img onClick={() => setOpen(true)} src="/images/menu-icon.webp" alt="" />
            <SideBar
              list={NAVBARDATA}
              open={open}
              placement={'left'}
              setCurrentHeader={setCurrentHeader}
              setOpen={setOpen}
            />
            <span onClick={() => setOpen(true)}>All Categories</span>
            <div>
              <img src="/images/down-arrow-white.webp" alt="" />
            </div>
          </div>
          <div className="mds-header-bottom-middle">
            <nav className="mds-header-bottom-menus-center">
              <ul className="mds-header-menus-list">
                {NAVBARDATA.map((item, index) => {
                  return (
                    <li
                      key={item.name + index}
                      className={pathname === item.path ? 'mds-header-menu mds-header-menu-active' : 'mds-header-menu'}
                    >
                      <Link href={item.path} onClick={() => setCurrentHeader(item.header)}>
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
          <div className="mds-header-bottom-right"></div>
          <div className="mds-header-bottom-contact-details">
            <img src="/images/call-icon.webp" alt="" />
            <div className="mds-header-contactNumber">
              <h6 className="mds-header-contactNumber-title">Contact Us 24/7</h6>
              <p className="mds-header-contactNumber-description"> +12012987481</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
