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

  const getLineNameArray = () => {
    let lines = JSON.parse(localStorage.getItem(LINES));
    let nameArr = [];
    lines.forEach((line) => {
      nameArr.push(line.name);
    })
    return nameArr;
  }

  return {
    getLine,
    setLine,
    getLineNameArray
  };
};

export {lineStorage, LINES};