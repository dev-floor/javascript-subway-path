import Line from "../object/line.js";

const LINES = 'LINES';

export default function lineStorage () {
  const getLine = () => {
    let lines = JSON.parse(localStorage.getItem(LINES));
    return lines;
  };

  const setLine = (lines) => {
    localStorage.setItem(LINES, JSON.stringify(lines));
  };

  return {
    getLine,
    setLine
  };
};

export {lineStorage, LINES};