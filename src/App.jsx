/* eslint-disable no-unused-vars */
import { NavBar } from '../components/NavBar'
import { FaArrowRight } from 'react-icons/fa6'
import './App.css'
import { useState } from 'react'

function App () {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <>
      <NavBar />
      <header className='header'>
        <h1>How can we help?</h1>
        <form className='search-form' onFocus={() => setSearchActive(true)} onBlur={() => setSearchActive(false)}>
          <input type='text' className={searchActive ? 'active' : ''} placeholder='Search' />
          <button className='search-button' onClick={e => e.preventDefault()}>
            <FaArrowRight />
          </button>
        </form>
      </header>
    </>
  )
}

export default App
