import React, { FC } from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="nav_wrapper">
          <div className="logo">
            <img
              src="https://i.ibb.co/KzZStJ5/removal-ai-f86f7e63-04d9-4316-abd3-d39efc84c344-julias.png"
              alt="logo"
              id="logo"
            />
          </div>
          <nav className="nav">
            <ul>
              <li><span className='nav-title'><a href='/'>Home</a></span></li>
              <li><span className='nav-title'>Services</span></li>
              <li><span className='nav-title'>Gallery</span></li>
              <li><span className='nav-title'>Contact</span></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
