import React from "react";
import "./Certifications.css"; // Ensure this is linked to your stylesheet

export const Certifications = () => {
  return (
    <div className="certifications_section" data-aos="fade-left">
      <h2 className="section__title">Certifications</h2>
      <div className="certifications_container">

        {/* Certification 1 */}
        <div
          className="certification_box"
          onClick={() =>
            window.open(
              "https://credentials.databricks.com/b49010cd-514f-486d-9ff7-870100bdc882",
              "_blank"
            )
          }
        >
          <p className="certification_name">
            Databricks Certified Associate Developer for Apache Spark 3.0
          </p>
        </div>

        {/* Certification 2 */}
        <div
          className="certification_box"
          onClick={() =>
            window.open(
              "https://www.credly.com/badges/dc15a882-4091-46fb-b790-aaec6357aafa/",
              "_blank"
            )
          }
        >
          <p className="certification_name">MTA: Introduction to Programming Using Python</p>
        </div>

        {/* Certification 3 */}
        <div
          className="certification_box"
          onClick={() =>
            window.open(
              "https://www.credly.com/badges/a4d25214-df08-4659-9902-935426282229/",
              "_blank"
            )
          }
        >
          <p className="certification_name">AWS Academy Data Engineering</p>
        </div>


      </div>
    </div>
  );
};
