import React from "react";
import "./Projects.css";
import { FaPython, FaJava, FaHtml5 } from "react-icons/fa";
import { SiRstudio, SiJupyter, SiHtml5, SiTwitter, SiAlteryx, SiAzurefunctions, SiMicrosoftazure, SiTableau, SiPowerbi, SiApachespark } from "react-icons/si";
import { DiDatabase } from "react-icons/di"; 
import { AiOutlineRobot } from "react-icons/ai"; 
import { TbSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">



          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src="https://raw.githubusercontent.com/pratikbarot26/olympics_etl/main/olympic.png" 
                  alt="2021 Tokyo Olympics Data ETL and Analysis Pipeline" />

                </div>
              </div>
              <div className="project_information">
                <h2>2021 Tokyo Olympics Data ETL and Analysis Pipeline</h2>
                <p>
                The Olympic Data ETL Pipeline is a comprehensive solution designed to process, analyze, and visualize large-scale datasets from the 2021 Tokyo Olympics. By integrating advanced cloud technologies like Azure Data Factory, Synapse Analytics, Databricks, and Power BI, the project creates a seamless end-to-end data pipeline that efficiently handles over 1 million records and 500K+ daily transactions. The pipeline transforms raw data, providing real-time insights into athlete performance, medal distribution, and event statistics. This system empowers stakeholders to make data-driven decisions, optimize event planning, and enhance performance analysis, ensuring improved outcomes for future Olympic Games.
                </p>
                <div>
                  <VscAzure />
                  <SiApachespark />
                  <SiPowerbi />
                  <TbSql />                  
                
                  
                </div>
                <div>
                  <a
                    href="https://github.com/pratikbarot26/olympics_etl.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/pratikbarot26/esc_energy/main/energy.jpg"
                    alt="eSC Energy Consumption and Demand Prediction"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Energy Consumption and Demand Prediction in South Carolina</h2>
                <p>
                eSC Electrical is focused on tackling the challenge of managing electricity demand during the peak summer months in South Carolina and surrounding areas. Rather than building new infrastructure, the project aims to prevent grid strain and potential blackouts by analyzing detailed residential data, hourly energy consumption, and local weather patterns. The goal is to uncover the main factors driving energy usage and encourage conservation efforts, ultimately optimizing operational efficiency while supporting sustainability objectives.
                </p>
                <div>
                  <SiRstudio />
             
                </div>
                <div>
                  <a
                    href="https://github.com/pratikbarot26/esc_energy.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src="https://raw.githubusercontent.com/pratikbarot26/vibehub/main/vibehub1.png" 
                  alt="Vibehub - Entertainment Store Management System" />

                </div>
              </div>
              <div className="project_information">
                <h2>Vibehub - Entertainment Store Management System</h2>
                <p>
                VibeHub is an innovative solution designed to streamline and optimize operations within the entertainment retail industry. By integrating a robust database management system, automated processes, and real-time analytics, VibeHub empowers entertainment stores to efficiently manage inventory, customer transactions, and employee data. The project leverages advanced technologies like SQL Server, Power BI, and PowerApps to offer seamless management tools and interactive reporting, enhancing both operational efficiency and user satisfaction. Ultimately, VibeHub aims to improve decision-making processes, ensuring smoother operations and better customer engagement within the entertainment sector.
                </p>
                <div>
                  <TbSql />
                  <VscAzure />
                  <SiPowerbi/>
                
                  
                </div>
                <div>
                  <a
                    href="https://github.com/pratikbarot26/vibehub.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
