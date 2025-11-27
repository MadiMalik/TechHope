import React from 'react'
import './Project.css'

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
            This project looks at one central question: when Afghan girls study online
            under bans, outages, and fragile conditions, what helps them stay enrolled
            and succeed? The study is based on an anonymous bilingual survey of 322
            online university students, capturing their realities across internet access,
            electricity, family support, mental load, teaching quality, and sense of
            belonging.
          </p>
          <ul className="info-list">
            <li>Anonymous bilingual survey (English and Dari/Farsi) completed by 322 Afghan girls in online universities.</li>
            <li>Covers connectivity, devices, affordability, safety, teaching quality, motivation, and community.</li>
            <li>Guided by CoI, Self-Determination Theory, Tinto’s model, and technology acceptance frameworks.</li>
            <li>Designed around ethics, safety, and dignity for Afghan women and girls.</li>
          </ul>
            <div className="stat-row">
              <div className="stat-pill">MIT Emerging Talent · ELO2</div>
              <div className="stat-pill">Afghan-led research</div>
              <div className="stat-pill">Online university students</div>
            </div>
          </div>

          <div className="info-card">
            <p>
              The GitHub repository contains the full data-science pipeline: from raw
              responses to cleaned datasets, exploratory analysis, and early models
              estimating which factors are most strongly linked to satisfaction,
              persistence, and continuation into the next term.
            </p>
            <ul className="info-list">
              <li>Python notebooks for data cleaning and exploratory analysis.</li>
              <li>Visualizations of connectivity, time use, mental load, belonging, and support.</li>
              <li>Initial models to identify risk factors for dropping out versus continuing.</li>
              <li>Clear documentation to support future Afghan-led research and reuse.</li>
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
