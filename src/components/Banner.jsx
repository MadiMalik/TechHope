import React from "react";
import "./Banner.css";
import bannerImage from "../assets/banner.png";
import logo from "../assets/logo.png";

const Banner = () => {
  return (
    <header className="banner" id="home">
      {/* Top navigation */}
      <nav className="banner__nav">
        <div className="banner__nav-left">
          <div className="banner__logo-mark">
            <img src={logo} alt="TechHope logo" />
          </div>
          <span className="banner__brand-name">TechHope</span>
        </div>

    <div className="banner__nav-right">
      <a href="#background" className="banner__nav-link">Background</a>
      <a href="#project" className="banner__nav-link">Project</a>
      <a href="#findings" className="banner__nav-link">Findings</a>
      <a href="#team" className="banner__nav-link">Team</a>

      <a
        href="https://github.com/MIT-Emerging-Talent/elo2-afghan-girls-online-learning"
        target="_blank"
        rel="noopener noreferrer"
        className="banner__nav-cta"
      >
        View GitHub
      </a>
    </div>
      </nav>

      {/* Hero section - image left, text right */}
      <div className="banner__hero">
        {/* Hero image */}
        <div className="banner__hero-image">
          <div
            className="banner__image"
            style={{ backgroundImage: `url(${bannerImage})` }}
          />
        </div>

        {/* Text block */}
        <div className="banner__hero-copy">
          <p className="banner__eyebrow">Afghan girls · online university</p>

          <h1 className="banner__title">
            <span className="banner__title-script">
              Learning behind closed doors
            </span>
            <span className="banner__title-main">TechHope Study</span>
          </h1>

          <p className="banner__subtitle">
            When classrooms are locked, Afghan girls huddle around borrowed
            laptops and fragile internet. This project listens to their stories
            and uses data to ask a simple question:{" "}
            <span className="banner__subtitle-strong">
              what actually helps them stay in online university?
            </span>
          </p>

          <div className="banner__actions">
            <a href="#background" className="banner__btn banner__btn-primary">
              Explore the story
            </a>
            <a
              href="https://github.com/MIT-Emerging-Talent/elo2-afghan-girls-online-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="banner__btn banner__btn-ghost"
            >
              Open data-science repo
            </a>
          </div>

          <p className="banner__note">
            Built as part of MIT Emerging Talent · anonymous, ethics-aware
            survey of Afghan online students.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Banner;