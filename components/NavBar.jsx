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
        <FaMagnifyingGlass className='icon icon-search' />
        <FaBars className='icon' />
      </div>
    </nav>
  )
}
