import React, { useState } from "react";
import "./AfghanistanContext.css";

const EVENTS = [
  {
    id: "2024-08-15",
    label: "15 Aug 2024",
    tag: "Education bans",
    title: "Only country banning girls’ secondary and women’s higher education",
    kicker: "Education bans",
    description:
      "UNESCO notes that Afghanistan is the only country in the world where girls are banned from secondary school and women from higher education.",
    variables: [
      "learning_expectations_met",
      "overall_satisfaction",
      "continue_next_term"
    ],
    source: "UNESCO, 15 Aug 2024",
    link: "https://www.unesco.org/en/articles/afghanistan-14-million-girls-still-banned-school-de-facto-authorities",
    ctaLabel: "Open UNESCO article"
  },
  {
    id: "2025-08-14",
    label: "14 Aug 2025",
    tag: "~2.2M out of school",
    title: "Four years on, ~2.2 million girls still out of school",
    kicker: "Long-term exclusion",
    description:
      "Four years after the takeover, UNESCO estimates around 2.2 million Afghan girls remain out of school, highlighting how long-term the exclusion has become.",
    variables: [
      "motivation_level",
      "future_plans_clarity",
      "continue_next_term"
    ],
    source: "UNESCO statement, 14 Aug 2025",
    link: "https://www.unesco.org/en/articles/afghanistan-four-years-22-million-girls-still-banned-school",
    ctaLabel: "Read UNESCO statement"
  },
  {
    id: "2023-05-23",
    label: "23 May 2023",
    tag: "Online lifeline",
    title: "Online classes as a fragile lifeline",
    kicker: "Lived experience",
    description:
      "Reporting shows Afghan girls turning to online classes as one of the only remaining options. They study through poor connectivity, high data costs, and low digital literacy, including in programmes like Roshni-e-Omid.",
    variables: [
      "weekly_study_hours",
      "materials_access",
      "video_loads_smoothly",
      "digital_skills"
    ],
    source:
      "The Diplomat (Zirack, ‘How Afghan Girls Are Overcoming Barriers Through Online Learning’, 23 May 2023)",
    link: "https://thediplomat.com/2023/05/how-afghan-girls-are-overcoming-barriers-through-online-learning/",
    ctaLabel: "Read The Diplomat story"
  },
  {
    id: "2025-01-01",
    label: "Jan 2025",
    tag: "Connectivity",
    title: "13.2M internet users, 30.5% penetration",
    kicker: "Connectivity & reach",
    description:
      "DataReportal estimates 13.2 million internet users in Afghanistan, around 30.5% penetration. Coverage is uneven, and access is often shared within families.",
    variables: [
      "platform_usability",
      "materials_access",
      "video_loads_smoothly",
      "device_sharing"
    ],
    source: "DataReportal, ‘Digital 2025: Afghanistan’ (Jan 2025)",
    link: "https://datareportal.com/reports/digital-2025-afghanistan",
    ctaLabel: "Open DataReportal"
  },
  {
    id: "2025-04-01",
    label: "Apr 2025",
    tag: "Affordability",
    title: "Fragile banking, stressed economy",
    kicker: "Service environment",
    description:
      "The World Bank’s Afghanistan Development Update highlights weak credit, an unstable banking system, and limited basic services, factors that affect what families can afford for data, devices, and electricity.",
    variables: [
      "affordability",
      "data_spend_share",
      "study_environment_stability"
    ],
    source: "World Bank, Afghanistan Development Update (Apr 2025)",
    link: "https://thedocs.worldbank.org/en/doc/777eab7b5ab9802aa3535f1e73fa1456-0310012025/original/Afghanistan-Development-Update-April-2025.pdf",
    ctaLabel: "Open World Bank update"
  },
  {
    id: "2025-09-16",
    label: "16 Sep 2025",
    tag: "Balkh outage",
    title: "Balkh: cable / Wi-Fi halted, mobile slowed",
    kicker: "Regional shutdown",
    description:
      "A provincial decision halts cable and Wi-Fi services in Balkh and slows mobile internet. Local students suddenly lose access to online platforms and rely on patchy mobile data when available.",
    variables: [
      "weekly_study_hours",
      "attendance",
      "assignment_submission_timing"
    ],
    source: "Washington Post report, 16 Sep 2025",
    link: "https://www.washingtonpost.com/world/2025/09/16/afghanistan-internet-ban-taliban-balkh/",
    ctaLabel: "Read Washington Post report"
  },
  {
    id: "2025-09-29",
    label: "29–30 Sep 2025",
    tag: "Nationwide outage",
    title: "Two-day nationwide internet & telecom blackout",
    kicker: "Nationwide shutdown",
    description:
      "A nationwide shutdown takes most internet and some phone services close to zero. For online students, classes, submissions, and communication are frozen during this window.",
    variables: [
      "weekly_study_hours",
      "attendance",
      "missing_data_flags",
      "stress_or_anxiety"
    ],
    source: "Washington Post & The Guardian, 29–30 Sep 2025",
    link: "https://www.theguardian.com/world/2025/sep/30/afghanistan-mobile-phones-internet-telecoms-blackout-taliban",
    ctaLabel: "Read outage coverage"
  }
];

const AfghanistanContext = () => {
  const [activeId, setActiveId] = useState(EVENTS[0].id);
  const active = EVENTS.find((e) => e.id === activeId);

  return (
    <section id="background" className="context">
      <div className="context__inner">
        {/* Section header */}
        <header className="context__header">
          <p className="context__eyebrow">02 · Afghanistan Context</p>
          <h2 className="context__title">
            Education & connectivity under bans and shutdowns
          </h2>
          <p className="context__lede">
            Dated facts on bans, connectivity, affordability, and 2025
            shutdowns, and how they shape the variables in our survey and
            models.
          </p>
        </header>

        <div className="context__body">
          {/* Left: clickable dates */}
          <div className="context__timeline">
            <p className="context__timeline-label">
              Click a date to explore how the context changed.
            </p>
            {EVENTS.map((event) => (
              <button
                key={event.id}
                type="button"
                onClick={() => setActiveId(event.id)}
                className={
                  "context__timeline-item" +
                  (event.id === activeId ? " context__timeline-item--active" : "")
                }
              >
                <span className="context__timeline-date">{event.label}</span>
                <span className="context__timeline-tag">{event.tag}</span>
              </button>
            ))}
          </div>

          {/* Right: detail card */}
          <article className="context__detail">
            <p className="context__detail-kicker">{active.kicker}</p>
            <h3 className="context__detail-title">{active.title}</h3>
            <p className="context__detail-text">{active.description}</p>

            <div className="context__detail-vars">
              <span className="context__detail-vars-label">
                Variables most affected:
              </span>
              <ul className="context__detail-vars-list">
                {active.variables.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>

            <p className="context__detail-source">
              <span>Source:&nbsp;</span>
              {active.source}
            </p>

            {active.link && (
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="context__detail-link"
              >
                {active.ctaLabel || "Learn more"}
              </a>
            )}

            <p className="context__detail-footnote">
              Note: internet penetration and outage figures are approximate and
              can vary by province, time of day, and connection type. When our
              survey responses overlap these windows, we treat missingness as
              non-random.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AfghanistanContext;