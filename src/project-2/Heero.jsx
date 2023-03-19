import React from "react";

const Heero = () => {
  const url = "https://wa.me/0573849441";
  const target = "_blank";

  return (
    <div className="hero">
      <img className="img-fluid" src="./images/Group 77.png" alt="" />
      <h1 className="display-3 fw-normal mt-4">Online Experiences</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus
        accusantium ratione nam, obcaecati sint. Accusamus culpa quasi, optio
        commodi blanditiis dolore laudantium, fugit amet beatae magni ullam odio
        vel!
      </p>
      <p>
        <a href={url} target={target}>
          Link to Whatsapp Chat
        </a>
      </p>
    </div>
  );
};

export default Heero;
