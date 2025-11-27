import React from 'react'

export default function Project(){
  return (
    <section id="project">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">About the project</div>
          <h2 className="section-title">A data science project, grounded in Afghan girls’ voices</h2>
          <p className="section-subtitle">
            This website is the human side of a data science project hosted in the MIT Emerging Talent ELO2 GitHub repository, focusing on Afghan girls studying online.
          </p>
        </div>

        <div className="two-column">
          <div className="info-card">
            <p>
              The project asks a simple but important question: when everything is stacked against Afghan girls, what makes online university actually work for them?
            </p>
            <ul className="info-list">
              <li>Anonymous bilingual survey (English and Dari / Farsi).</li>
              <li>Questions about internet, devices, family support, mental load, teaching quality, and sense of belonging.</li>
              <li>Inspired by learning theories like Community of Inquiry, Self-Determination Theory, Tinto’s model, and technology acceptance models.</li>
              <li>Designed with care for ethics, safety, and dignity of Afghan women and girls.</li>
            </ul>
            <div className="stat-row">
              <div className="stat-pill">MIT Emerging Talent · ELO2</div>
              <div className="stat-pill">Afghan-led research</div>
              <div className="stat-pill">Online university students</div>
            </div>
          </div>

          <div className="info-card">
            <p>
              On the technical side, the GitHub repository includes the full pipeline: data cleaning, exploratory analysis, and models that try to predict which factors are most strongly linked to persistence and success in online learning.
            </p>
            <ul className="info-list">
              <li>Python notebooks for data cleaning and exploratory analysis.</li>
              <li>Visualizations of connectivity, time, mental load, and support.</li>
              <li>Early models to understand risk factors for dropping out versus staying enrolled.</li>
              <li>Clear documentation so other Afghan-led projects can build on this work later.</li>
            </ul>
            <div className="stat-row">
              <div className="stat-pill">Open-source mindset</div>
              <div className="stat-pill">Re-usable code</div>
              <div className="stat-pill">Future-friendly design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
