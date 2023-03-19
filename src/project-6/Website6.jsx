import React, { useState } from "react";
import NavBarToggler from "./NavBarToggler";

const Website6 = () => {
  const [theme, setTheme] = useState(true);

  function toggleThemeMode() {
    setTheme((prevTheme) => !prevTheme);
  }

  return (
    <div className={theme ? "text-black bg-light" : "text-light bg-dark"}>
      <NavBarToggler theme={theme} toggleThemeMode={() => toggleThemeMode()} />

      <div className="container vh-100">
        <h1>Fun Facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was first released in 2013</li>
          <li>Was first released in 2013</li>
          <li>Was first released in 2013</li>
          <li>Was first released in 2013</li>
          <li>Was first released in 2013</li>
        </ul>
      </div>
    </div>
  );
};

export default Website6;
