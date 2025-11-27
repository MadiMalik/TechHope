import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>© {new Date().getFullYear()} TechHope · Afghan Girls Online Learning</div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#background">Background</a>
            <a href="#project">Project</a>
            <a href="#findings">Findings</a>
            <a href="#action">Take action</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
