/* eslint-disable no-unused-vars */
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import './item.css'

export const Item = ({ image, title, text }) => {
  return (
    <div className='main-item'>
      <img src={image} alt={title} />
      <div className='item-text'>
        <h4>{title}</h4>
        <p>{text}</p>
        <a href='#'>
          Learn More
          <FaArrowRightLong style={{ marginTop: '.2rem' }} />
        </a>
      </div>
    </div>
  )
}
