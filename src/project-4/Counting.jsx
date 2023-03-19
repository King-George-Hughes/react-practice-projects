import React from "react";

const Counting = (props) => {
  // console.log("Count component rendered !");

  return (
    <>
      <span className="fs-1 fw-bold px-1">{props.number}</span>
    </>
  );
};

export default Counting;
