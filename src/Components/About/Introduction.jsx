import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Pratik.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            Get To <span className="different">Know Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">

            <h4>
            Hi, I’m Pratik Mukesh Barot — a data engineer and analytics professional passionate about turning raw data into scalable, meaningful solutions.
I recently earned my Master’s in Information Systems from Syracuse University, along with a Certificate of Advanced Study in Data Science. I also hold a Bachelor’s degree in Electronics Engineering from the University of Mumbai. My academic and professional journey bridges the worlds of data infrastructure, automation, and business intelligence.
With over 3 years of hands-on experience in data engineering, I’ve built high-volume ETL pipelines, automated reporting systems, and designed efficient workflows using tools like Apache Spark, Hive, Kafka, and Autosys. I work comfortably across cloud platforms like AWS and Azure, and rely heavily on Python and SQL to drive data transformation, analysis, and workflow automation.
Whether it’s constructing batch processing pipelines, optimizing legacy data systems, or visualizing insights through Tableau and Power BI, I’m driven by the impact of well-engineered data solutions. I also enjoy collaborating with cross-functional teams, documenting processes in Confluence, and delivering results that align with both technical and business goals.
Naturally curious and solution-focused, I see data as a canvas for engineering, exploration, and innovation.
Excited to collaborate, create, and engineer what’s next.
Always building with purpose—if you are too, let’s connect.
            </h4>
              



            {/* 
            
            <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Entrepreneure{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4>
            
            */}
              
            </div>
          </div>
          </div>
        </section>
      </>
  );
};
