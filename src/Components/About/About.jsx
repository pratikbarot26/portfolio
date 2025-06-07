import React, { useEffect } from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {

  // useEffect(() => {
  //   // Add CSS for Calendly
  //   const link = document.createElement("link");
  //   link.rel = "stylesheet";
  //   link.href = "https://assets.calendly.com/assets/external/widget.css";
  //   document.head.appendChild(link);

  //   // Add script for Calendly
  //   const script = document.createElement("script");
  //   script.src = "https://assets.calendly.com/assets/external/widget.js";
  //   script.async = true;
  //   script.onload = () => {
  //     window.Calendly.initBadgeWidget({
  //       url: 'https://calendly.com/vatsal-doshi/30min',
  //       text: 'Schedule time with me',
  //       color: '#0069ff',
  //       textColor: '#ffffff',
  //       branding: false,
  //     });
  //   };
  //   document.body.appendChild(script);
  // }, []);

  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Pratik Barot</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        Passionate data engineer with a knack for designing clean, scalable pipelines and making complex data systems work smarter. Skilled in building end-to-end ETL workflows, optimizing batch processing, leveraging Apache Spark, and delivering actionable insights through BI dashboards. I thrive at the intersection of engineering and analysis - always exploring new tools, automating what's manual, and turning raw data into meaningful outcomes. Curious by nature, I see data as both a puzzle and a playground.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/pratikbarot26"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:prbarot26@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+1 (315) 832-0842"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/pratikbarot26/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1e5x4bLO6Pd3Z8LFaUs3SMLbNDIrkBZiH/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
