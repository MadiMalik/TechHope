import React from "react";
import "./Project.css";

export default function Project() {
  return (
    <section id="project">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <div className="section-kicker">About the project</div>
          <h2 className="section-title">
            A data science project, grounded in Afghan girls’ voices
          </h2>
          <p className="section-subtitle">
            This site is the human-facing companion to our MIT Emerging Talent
            ELO2 capstone. The full data-science workflow lives in the{" "}
            <strong>“Afghan Girls Online Learning”</strong> GitHub repository
            and asks a simple question: under bans, outages, and fear, what
            actually helps Afghan girls stay in online university?
          </p>
        </div>

        <div className="two-column">
          {/* LEFT CARD – what we study & why it matters */}
          <div className="info-card">
            <p>
              The project is built around one central question:{" "}
              <strong>
                when Afghan girls study online under bans, outages, and fragile
                conditions, what helps them stay enrolled and succeed?
              </strong>{" "}
              We work with survey data from{" "}
              <strong>322 Afghan women in online university programmes</strong>,
              most of them inside Afghanistan (around 87.3% of the sample).
              Online learning is one of the only remaining pathways to higher
              education after the Taliban’s bans.
            </p>

            <p>
              Most responses come from an online college programme called{" "}
              <a
                href="https://womanonlineuniversity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                Women Online University (WOU)
              </a>
              , collected via an anonymous Google Form in Farsi (with English
              translation for analysis). The survey captures their realities
              across:
            </p>

            <ul className="info-list">
              <li>
                <strong>Infrastructure</strong> – internet reliability,
                electricity, devices, data costs, and ability to study during
                shutdowns.
              </li>
              <li>
                <strong>Teaching & platform</strong> – assignment clarity,
                instructor feedback, language accessibility, materials access,
                and usability.
              </li>
              <li>
                <strong>Safety, support & motivation</strong> – ability to study
                without fear, family support, mental load, sense of belonging,
                and intentions to continue next term.
              </li>
              <li>
                <strong>Outcomes</strong> – overall satisfaction and{" "}
                <strong>persistence</strong> (whether they plan to continue).
              </li>
            </ul>

            <div className="stat-row">
              <div className="stat-pill">322 students</div>
              <div className="stat-pill">87.3% inside Afghanistan</div>
              <a
                href="https://womanonlineuniversity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="stat-pill stat-pill--link"
              >
                Data partner: Women Online University (WOU)
              </a>
            </div>
          </div>

          {/* RIGHT CARD – theory, methods, and repo contents */}
          <div className="info-card">
            <p>
              The research links Afghan girls’ lived experience to four
              well-known frameworks for online learning and persistence:{" "}
              <strong>Community of Inquiry (CoI)</strong>,{" "}
              <strong>Self-Determination Theory (SDT)</strong>,{" "}
              <strong>Tinto’s integration model</strong>, and{" "}
              <strong>technology acceptance models (TAM/UTAUT)</strong>. Each
              framework is mapped to concrete survey columns – for example,
              assignment clarity and instructor feedback for CoI, safety and
              family support for SDT and Tinto, and platform usability and video
              loading for TAM/UTAUT.
            </p>

            <ul className="info-list">
              <li>
                <strong>Design:</strong> cross-sectional, anonymous bilingual
                survey (~25 items) with no names, emails, or direct identifiers.
              </li>
              <li>
                <strong>Pipeline:</strong> raw responses → PII masking →
                Farsi–English translation → cleaning → analysis notebooks in the{" "}
                <code>results/</code> folder.
              </li>
              <li>
                <strong>Methods:</strong> descriptive statistics, correlation
                checks, logistic regression for persistence, simple clustering,
                and thematic coding of open-ended answers.
              </li>
              <li>
                <strong>Documentation:</strong> research background, theory →
                variables table, data dictionary, and reproducible notebooks for
                future Afghan-led work.
              </li>
            </ul>

            <div className="stat-row">
              <div className="stat-pill">CoI · SDT · Tinto · TAM</div>
              <div className="stat-pill">Reproducible notebooks</div>
              <div className="stat-pill">MIT-licensed repo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}