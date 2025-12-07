// src/components/VideoSection.jsx
import React from "react";
import "./VideoSection.css";

const VIDEOS = [
  {
    id: 1,
    title: "Video 1 – Why this study matters",
    subtitle: "Why should I care?",
    // Replace this with your real embed / video URL
    embedSrc: "https://www.youtube.com/embed/VX2BZ_N-jjI?si=8qLyKlOgtHcdw7A2"
  },
  {
    id: 2,
    title: "Video 2 – How we did the research",
    subtitle: "Can I trust this research?",
    embedSrc: "https://www.youtube.com/embed/AUXkT7LO4QE?si=_K0s1J6m1vaNghfM"
  },
  {
    id: 3,
    title: "Video 3 – What we found & what’s next",
    subtitle: "So what did you learn, and now what?",
    embedSrc: "https://www.youtube.com/embed/6QfZPfoSMzs?si=UyZabAEV8TWF53zV"
  }
];

export default function VideoSection() {
  return (
    <section id="videos" className="videos">
      <div className="videos__inner">
        {/* Section header */}
        <header className="videos__header">
          <p className="videos__eyebrow">02 · Video presentation</p>
          <h2 className="videos__title">See the project in three short videos</h2>
          <p className="videos__lede">
            Each video answers one big question: why this matters, 
            how we did it, and what we found.
          </p>
        </header>

        {/* Video list */}
        <div className="videos__list">
          {VIDEOS.map((video) => (
            <article key={video.id} className="videos__item">
              <header className="videos__item-header">
                <h3 className="videos__item-title">{video.title}</h3>
                <p className="videos__item-subtitle">{video.subtitle}</p>
              </header>

              <div className="videos__media">
                {/* 
                  OPTION A — EMBED (YouTube, Loom, etc.)
                  Replace embedSrc with your real embed link, e.g.
                  https://www.youtube.com/embed/VIDEO_ID
                */}
                <iframe
                  src={video.embedSrc}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/*
                  OPTION B — LOCAL/FILE VIDEO
                  If instead you have a file, replace the iframe above with:

                  <video controls>
                    <source src="/path/to/your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}