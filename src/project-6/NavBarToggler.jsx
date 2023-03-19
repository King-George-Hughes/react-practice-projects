import React from "react";

const NavBarToggler = (props) => {
  const primaryColor = "#eee";
  const secondaryColor = "#333";
  console.log(props.theme);
  console.log(props.toggleThemeMode);

  const headerStyles = {
    width: "100%",
    height: "70px",
    boxShadow: `0 2px 3px ${primaryColor}`,
  };

  const leftSwitch = {
    width: "15px",
    background: primaryColor,
    height: "15px",
    borderRadius: "10px",
    position: "absolute",
    left: "0",
    transition: "left 0.4s",
    border: `2px solid ${secondaryColor}`,
  };

  const rightSwitch = {
    width: "15px",
    background: secondaryColor,
    height: "15px",
    borderRadius: "10px",
    position: "absolute",
    right: "0",
    transition: "right 0.4s",
    border: `2px solid ${primaryColor}`,
  };

  //   const LightMode = {}

  return (
    <header
      className={props.theme ? "text-black bg-light" : "text-light bg-dark"}
      style={headerStyles}
    >
      <div
        className="container"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 className="logo">ReactFact</h1>
        <div className="toggle-bar">
          <span className={props.theme ? "fw-bold" : "text-muted"}>Light</span>
          <span
            className="toggler"
            style={{
              display: "inline-block",
              width: "30px",
              height: "15px",
              margin: "0 5px",
              background: props.theme ? secondaryColor : primaryColor,
              borderRadius: "7px",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={props.toggleThemeMode}
          >
            <div
              className="switch"
              style={props.theme ? leftSwitch : rightSwitch}
            ></div>
          </span>
          <span className={props.theme ? "text-muted" : "fw-bold"}>Dark</span>
        </div>
      </div>
    </header>
  );
};

export default NavBarToggler;
