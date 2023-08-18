/* eslint-disable no-unused-vars */
import React from 'react'
import { Logo } from './assets/Logo'

export const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li><h4>Abstract</h4></li>
          <li><a>Start Trial</a></li>
          <li><a>Pricing</a></li>
          <li><a>Download</a></li>
        </ul>
        <ul>
          <li><h4>Resources</h4></li>
          <li><a>Blog</a></li>
          <li><a>Help Center</a></li>
          <li><a>Release Notes</a></li>
          <li><a>Status</a></li>
        </ul>
      </div>

      <div>
        <ul>
          <li><h4>Community</h4></li>
          <li><a>Twitter</a></li>
          <li><a>LinkedIn</a></li>
          <li><a>Facebook</a></li>
          <li><a>Dribble</a></li>
          <li><a>Podcast</a></li>
        </ul>
        <ul>
          <li><h4>Company</h4></li>
          <li><a>About Us</a></li>
          <li><a>Careers</a></li>
          <li><a>Legal</a></li>
          <li><a>Status</a></li>

          <li><h5>Contact Us</h5></li>
          <li><a>info@abstract.com</a></li>
        </ul>
      </div>

      <div>
        <Logo />
        <h4>© Copyright 2023</h4>
        <p>Abstract Studio Desingn, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}
