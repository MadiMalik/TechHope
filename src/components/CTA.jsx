import React from 'react'
import './CTA.css'
export default function CTA(){
  return (
    <section id="action">
      <div className="container">
        <div className="cta">
          <div>
            <h3 className="cta-title">Explore the full analysis and project files</h3>
            <p className="cta-text">
              This website summarizes findings from our anonymous survey of 322 Afghan girls in online university programs.
              The complete notebooks, data-cleaning pipeline, and documentation are available in the MIT Emerging Talent ELO2 repository.
            </p>
          </div>

          <div className="cta-actions">
            <a 
              className="cta-btn" 
              href="https://github.com/MIT-Emerging-Talent/elo2-afghan-girls-online-learning" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View the GitHub Repository
            </a>

            <a className="cta-btn" href="#project">
              About the project
            </a>

            <span className="cta-note">
              All content reflects the completed ELO2 project (2025).
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}