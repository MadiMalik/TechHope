import React from 'react'

export default function Findings(){
  return (
    <section id="findings">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Findings</div>
          <h2 className="section-title">What we are learning from the data (and the stories)</h2>
          <p className="section-subtitle">
            This is where you will later plug in the key results from your analysis – plots, percentages, and quotes that show what helps Afghan girls succeed in online university. For now, these are placeholders to sketch the structure.
          </p>
        </div>

        <div className="findings-grid">
          <article className="finding-card">
            <div className="coming-soon-pill">Coming soon</div>
            <div className="finding-badge">1</div>
            <h3 className="finding-title">Feeling seen and connected</h3>
            <div className="finding-tagline">Teaching presence · Social presence</div>
            <p>When teachers show up regularly, give clear instructions, and respond with kindness, girls report feeling less alone in front of the screen. Later you can show charts for “teaching presence” and “social presence” scores here.</p>
          </article>

          <article className="finding-card">
            <div className="coming-soon-pill">Coming soon</div>
            <div className="finding-badge">2</div>
            <h3 className="finding-title">Time, safety, and quiet corners</h3>
            <div className="finding-tagline">Home environment · Emotional load</div>
            <p>Finding or being given time and quiet is one of the biggest challenges. Future plots might show correlations between dedicated study time and persistence.</p>
          </article>

          <article className="finding-card">
            <div className="coming-soon-pill">Coming soon</div>
            <div className="finding-badge">3</div>
            <h3 className="finding-title">Connectivity and devices</h3>
            <div className="finding-tagline">Internet quality · Access</div>
            <p>Spotty internet and shared devices create friction. You can later add visualizations of connectivity quality and device access.</p>
          </article>

          <article className="finding-card">
            <div className="coming-soon-pill">Coming soon</div>
            <div className="finding-badge">4</div>
            <h3 className="finding-title">Support that matters</h3>
            <div className="finding-tagline">Family · Friends · Mentors</div>
            <p>Small acts of support – a sibling taking on chores, a mentor checking in – can make online university possible. You could embed quotes and small stats here.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
