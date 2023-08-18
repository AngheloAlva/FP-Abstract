/* eslint-disable no-unused-vars */
import { NavBar } from '../components/NavBar'
import { FaArrowRight } from 'react-icons/fa6'
import { useState } from 'react'
import data from '../data/items-data.json'
import './App.css'
import { Item } from '../components/Item'
import { Footer } from '../components/Footer'

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
      <main>
        <section className='items'>
          {
            data.map((item, i) => {
              return (
                <Item key={i} image={item.image} title={item.title} text={item.text} />
              )
            })
          }
          </section>
      </main>
      <Footer />
    </>
  )
}

export default App
