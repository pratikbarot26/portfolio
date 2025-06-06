import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Data Dynamo", "Schema Sculptor","Pipeline Perfectionist","Visualization Virtuoso","Strategy Sniper"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
