import React from "react";
import Row from "./row";

export const Tetris = ({ tetris }) => {
  return tetris.map((row, iRow) => <Row key={iRow} row={row} />);
};

export default Tetris;
