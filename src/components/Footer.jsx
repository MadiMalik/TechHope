import React from 'react'
import './Footer.css'

export default function Footer(){
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-inner">

          <div className="footer-brand">
            © {new Date().getFullYear()} TechHope · Afghan Girls Online Learning
          </div>

          <nav className="footer-links">
            <a href="#home">Home</a>
            <a href="#background">Background</a>
            <a href="#project">Project</a>
            <a href="#findings">Findings</a>
            <a href="#team">Team</a>
            <a href="#action">Take action</a>
          </nav>

        </div>
      </div>
    </footer>
  )
}