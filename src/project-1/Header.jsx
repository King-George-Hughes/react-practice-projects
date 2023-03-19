import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img className="img-fluid" src="./images/me.jpg" alt="" />
      <h2 className="mt-3">Angela Jolie</h2>
      <small className="text-muted">Frontend Developer</small>
      <br />
      <small className="text-muted">React Software Engineer</small>
      <div className="mt-4">
        <button className="btn btn-light mx-2">Email</button>
        <button className="btn btn-info mx-2">LinkedIn</button>
      </div>
    </header>
  );
};

export default Header;
