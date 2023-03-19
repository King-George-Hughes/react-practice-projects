import React, { useState } from "react";

const Boxes = (props) => {
  //   console.log(props.on);

  //   const [on, setOn] = useState(props.on);

  const style = {
    // backgroundColor: on ? "black" : "transparent",
    backgroundColor: props.on ? "black" : "transparent",
    width: 100,
    height: 100,
    border: "1px solid black",
  };

  //   const handleToggle = () => {
  //     setOn((prevState) => !prevState);
  //     console.log(on);
  //   };

  return (
    <>
      <div
        className="box m-2"
        style={style}
        onClick={props.handleToggle}
        // onClick={() => props.handleToggle(props.id)}
      ></div>
    </>
  );
};

export default Boxes;
