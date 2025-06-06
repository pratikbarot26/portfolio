import React, { useEffect } from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  const openCalendly = () => {
    window.open("https://calendly.com/prbarot26/30min", "Query My Calendar", "height=700,width=600");
  };

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            {/* Your other code here */}
          </div>
        </a>
        <div className="calendly-button-container">
          <button onClick={openCalendly} className="calendly-button">
            Query My Calendar
          </button>
        </div>
      </div>
    </>
  );
};
