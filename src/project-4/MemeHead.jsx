import React from "react";

const MemeHead = () => {
  const boxShadow = "0px 3px 15px #eee";

  return (
    <nav style={{ boxShadow: boxShadow }} className="navbar p-3">
      <img width={100} src="./images/logo3.png" alt="" />
      <h1>Meme Generator</h1>
    </nav>
  );
};

export default MemeHead;
