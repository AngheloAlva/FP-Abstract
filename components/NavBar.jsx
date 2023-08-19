/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaMagnifyingGlass, FaBars } from 'react-icons/fa6'
import './NavBar.css'
import { Logo } from './assets/Logo'

export const NavBar = () => {
  return (
    <nav>
      <div className='nav-logo'>
        <Logo />
        <a href='#'>Help Center</a>
      </div>

      <div className='nav-menu'>
        <div className='nav-menu-resume'>
          <FaMagnifyingGlass className='icon icon-search' />
          <FaBars className='icon' />
        </div>

        <div className='nav-menu-complete'>
          <button className='btn-request'>
            Submit a request
          </button>
          <button className='btn-singin'>
            Sign in
          </button>
        </div>
      </div>
    </nav>
  )
}
