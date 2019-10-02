import React from "react";

export const Box = ({ col }) => {
  const colors = ["white", "blue"];

  return <div className="box" style={{ backgroundColor: colors[col] }}></div>;
};

export default Box;
