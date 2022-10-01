import './sidebar.css'

import { useState } from 'react'

import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

import { links } from '../../data'
import { useCartContext } from '../../global/CartContext'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useCartContext()
  const [sidebarLinks, setSidebarLinks] = useState(links)

  return (
    <>
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='sidebar-header'>
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
          <Link to='/'>
            <h2>Tom Express</h2>
          </Link>
        </div>

        <ul className='sidebar-links'>
          {sidebarLinks.map((navlink) => {
            const { id, url, text } = navlink

            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  <p>{text}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
