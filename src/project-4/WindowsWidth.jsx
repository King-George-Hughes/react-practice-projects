import React, { useState, useEffect } from "react";

const WindowsWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log("Setting Up");
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    // Clean up function
    return function () {
      console.log("Cleaning Up");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div>
      <h1>Window Width: {windowWidth}</h1>
    </div>
  );
};

export default WindowsWidth;
