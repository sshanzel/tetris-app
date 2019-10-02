import React from "react";
import Box from "./box";

export const Tetris = ({ row }) => {
  return (
    <tr>
      {row.map((col, iCol) => (
        <Box key={iCol} col={col} />
      ))}
    </tr>
  );
};

export default Tetris;
