import React from 'react'

export default function CTA(){
  return (
    <section id="action">
      <div className="container">
        <div className="cta">
          <div>
            <h3 className="cta-title">Want to help Afghan girls study online with dignity?</h3>
            <p className="cta-text">You can contribute analysis, visualizations, or outreach to Afghan-led initiatives that support online learning under restrictions.</p>
          </div>
          <div className="cta-actions">
            <a className="cta-btn" href="https://github.com/MIT-Emerging-Talent/elo2-afghan-girls-online-learning" target="_blank" rel="noopener noreferrer">Explore the GitHub repo</a>
            <a className="cta-btn" href="#background">See the background</a>
            <span className="cta-note">Images and links can be customized later.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
