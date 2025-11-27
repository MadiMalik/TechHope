import React from "react";
import "./MeetTeam.css";

export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="team-header">
          <div className="team-kicker">Meet the team</div>
          <h2 className="team-title">Afghan-led, women-centered research</h2>
          <p className="team-subtitle">
            This project was created through collaboration between Afghan researchers in the MIT Emerging Talent ELO2 cohort. Each member contributed a core part of the research pipeline — from data collection and cleaning, to analysis, documentation, and building this website.
          </p>
        </div>

        <div className="team-grid">

        {/* Madiha */}
        <div className="team-card">
        <div className="team-photo"></div>
        <h3 className="team-name">Madiha Malikzada</h3>
        <p className="team-role">Research · Theory Mapping · Website</p>

        <p className="team-bio">
            Led data collection, background research, and the mapping of CoI, SDT,
            Tinto, and TAM/UTAUT to survey design. Masked identifiable information in 
            open-text responses, translated Farsi/Dari inputs, contributed to analysis 
            and documentation, and built the website.
        </p>

        <div className="team-links">
            <a href="https://github.com/MadiMalik" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/madiha-malik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        </div>

          {/* Mahdia */}
          <div className="team-card">
            <div className="team-photo"></div>
            <h3 className="team-name">Mahdia Ahmadi</h3>
            <p className="team-role">Analysis · Documentation</p>
            <p className="team-bio">
              Worked on analysis across several domains — infrastructure, 
              teaching quality, support systems, and persistence. 
              Contributed documentation and organization of research outputs.
            </p>

            <div className="team-links">
              <a href="https://github.com/MahdiaAhmadi" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/mahdiaahmadi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* Safiya */}
          <div className="team-card">
            <div className="team-photo"></div>
            <h3 className="team-name">Safiya Hashimi</h3>
            <p className="team-role">Data Cleaning · Documentation · Presentation</p>
            <p className="team-bio">
              Cleaned and prepared the dataset, contributed documentation, 
              and helped present results from the analysis.
            </p>

            <div className="team-links">
              <a href="https://github.com/Safiya-hash" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}