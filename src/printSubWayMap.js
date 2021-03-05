import lineStorage from "./storage/lineStorage.js";

const fillOtherInfoList = (line, i) => {
  let otherInfo = '';
  if(i !== line.stations.length - 1) {
    otherInfo =
    `<ul>
      <li>${line.distances[i]}km / ${line.times[i]}분</li>
    </ul>`;
  }
  return otherInfo;
}

const fillStationList = (line) => {
  let stationList = ''

  for(let i=0;i<line.stations.length;i++) {
    stationList +=
    `<ul>
      <li>${line.stations[i]}</li>
      ${fillOtherInfoList(line, i)}
    </ul>`;
  }
  return stationList;
}

export default function printSubWayMap(contentSectionTag) {
  let lines = lineStorage().getLine();
  let subwayMapTemplate = '';
  lines.forEach((line) => {
    subwayMapTemplate += 
    `<div>
      <h3>${line.name}</h3>
      ${fillStationList(line)}
    </div>
    <br/>`
  })
  contentSectionTag.innerHTML = subwayMapTemplate;
}

export {printSubWayMap};