import React from 'react'
import './Findings.css'
import './Findings.overrides.css'

import sampleOverview from '../assets/figure1_sample_overview.png'
import infraReliability from '../assets/figure2_infrastructure_challenges.png'
import supportSafety from '../assets/figure4_support_safety.png'
import persistencePredictors from '../assets/figure5_persistence_predictors.png'

export default function Findings() {
  return (
    <section id="findings">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Findings</div>
          <h2 className="section-title">What the data is showing us so far</h2>
          <p className="section-subtitle">
            These are early findings from our ongoing analysis of an anonymous survey
            of 322 Afghan girls and women in online university programs. Each card
            reflects results already documented in the repository, from
            infrastructure challenges to safety, teaching quality, and the factors
            that most strongly predict persistence. We are still refining the models
            and adding new visualizations as the project develops.
          </p>
        </div>

        <div className="findings-grid">

          {/* 01: Teaching Quality + Satisfaction */}
          <article className="finding-card">
            <div className="finding-badge">1</div>
            <h3 className="finding-title">Instructor feedback matters most</h3>
            <div className="finding-tagline">Teaching quality · Satisfaction</div>

            <div className="finding-visual">
              <img
                src={persistencePredictors}
                alt="Bar chart of top predictors of student persistence, with instructor feedback showing the largest standardized coefficient."
              />
            </div>

            <p>
              Instructor feedback appears as the strongest predictor of overall
              satisfaction. This aligns with learning theory frameworks (CoI · SDT) and
              reflects the finding that clear guidance and timely responses help students
              persist even under severe constraints.
            </p>
            <div className="coming-soon-pill">More details in results notebooks</div>
          </article>

          {/* 02: Safety */}
          <article className="finding-card">
            <div className="finding-badge">2</div>
            <h3 className="finding-title">Safety shapes whether girls can continue</h3>
            <div className="finding-tagline">Safety · Emotional load</div>

            <div className="finding-visual">
              <img
                src={supportSafety}
                alt="Bar chart of percentages of students who can study without fear, feel safe online, have family support, and find learning affordable."
              />
            </div>

            <p>
              Only 42.8% of students report being able to study without fear. Safety,
              both emotional and physical, shows a strong connection to continuation,
              reflecting the daily pressures Afghan girls navigate while studying online.
            </p>
            <div className="coming-soon-pill">More details in safety notebooks</div>
          </article>

          {/* 03: Infrastructure */}
          <article className="finding-card">
            <div className="finding-badge">3</div>
            <h3 className="finding-title">Internet &amp; electricity remain fragile</h3>
            <div className="finding-tagline">Infrastructure · Access</div>

            <div className="finding-visual">
              <img
                src={infraReliability}
                alt="Chart of mean internet and electricity reliability ratings by location, showing values below neutral."
              />
            </div>

            <p>
              Internet and electricity reliability average just 2.61 out of 5.0. These
              gaps directly affect persistence, as shown in the infrastructure analysis
              notebooks in the repository. Connectivity disruptions continue to be one of
              the biggest barriers to consistent study.
            </p>
            <div className="coming-soon-pill">Infrastructure details in results</div>
          </article>

          {/* 04: Family Support */}
          <article className="finding-card">
            <div className="finding-badge">4</div>
            <h3 className="finding-title">Family support is a powerful buffer</h3>
            <div className="finding-tagline">Support systems · Persistence</div>

            <div className="finding-visual">
              <img
                src={persistencePredictors}
                alt="Top predictors of student persistence chart, highlighting family support among the strongest coefficients."
              />
            </div>

            <p>
              Family support appears repeatedly across the analysis as a factor linked to
              better persistence and higher satisfaction. Even small acts – sharing
              devices, reducing chores, emotional encouragement – help Afghan girls stay
              enrolled despite instability.
            </p>
            <div className="coming-soon-pill">Model details in persistence notebook</div>
          </article>

          {/* 05: Continuation intentions */}
          <article className="finding-card">
            <div className="finding-badge">5</div>
            <h3 className="finding-title">Despite challenges, most plan to continue</h3>
            <div className="finding-tagline">Persistence · Intentions</div>

            <div className="finding-visual">
              <img
                src={sampleOverview}
                alt="Survey overview figure including plan-to-continue distribution showing most students at the highest rating."
              />
            </div>

            <p>
              64.6% of students plan to continue their studies next term. This number is
              notable given the infrastructure gaps, safety concerns, and emotional load
              reported across the dataset, and highlights the resilience of Afghan girls
              pursuing higher education.
            </p>
            <div className="coming-soon-pill">See full overview in results</div>
          </article>

        </div>

        {/* footer note + CTA under the grid */}
        <div className="findings-footer">
          <p className="findings-footer-note">
            These findings are early signals from an analysis that is still in progress.
            We are continuing to refine the models, stress-test the results, and add more
            visuals as the project evolves.
          </p>
          <p className="findings-footer-link">
            You can explore the full analysis notebooks and updated figures in our{" "}
            <a
              href="https://github.com/MIT-Emerging-Talent/elo2-afghan-girls-online-learning"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  )
}