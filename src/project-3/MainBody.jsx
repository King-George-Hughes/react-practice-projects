import React from "react";
import Content from "./Content";
import Data2 from "../Data2";

const MainBody = () => {
  const content = Data2.map((data) => {
    return <Content key={data.id} data={data} />;
  });

  return <div className="container">{content}</div>;
};

export default MainBody;
