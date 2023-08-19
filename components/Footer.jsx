/* eslint-disable no-unused-vars */
import React from 'react'
import { Logo } from './assets/Logo'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className='footer-section'>
        <ul>
          <li><h3>Abstract</h3></li>
          <li><a href='#'>Start Trial</a></li>
          <li><a href='#'>Pricing</a></li>
          <li><a href='#'>Download</a></li>
        </ul>
        <ul>
          <li><h3>Resources</h3></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Help Center</a></li>
          <li><a href='#'>Release Notes</a></li>
          <li><a href='#'>Status</a></li>
        </ul>
        <ul>
          <li><h3>Community</h3></li>
          <li><a href='#'>Twitter</a></li>
          <li><a href='#'>LinkedIn</a></li>
          <li><a href='#'>Facebook</a></li>
          <li><a href='#'>Dribble</a></li>
          <li><a href='#'>Podcast</a></li>
        </ul>
        <ul>
          <li><h3>Company</h3></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Careers</a></li>
          <li><a href='#'>Legal</a></li>
          <li><a href='#'>Status</a></li>

          <li style={{ marginTop: '1.8rem' }}><strong>Contact Us</strong></li>
          <li><a href='#'>info@abstract.com</a></li>
        </ul>
      </div>

      <div className='static-info'>
        <Logo />
        <div>
          <h4>© Copyright 2023</h4>
          <p>Abstract Studio Desingn, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
