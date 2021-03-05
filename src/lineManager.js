import {LINE_MANAGER_PAGE_TEMPLATE} from './view/lineTemplate.js';
import {stationStorage} from './storage/stationStorage.js'
import lineStorage from './storage/lineStorage.js';
import Line from './object/line.js';

const fillSelectBoxTag = (selectBoxTag) => {
  let stations = stationStorage().getStationNameArray();
  stations.forEach((station) => {
    selectBoxTag.innerHTML += `<option>${station}</option>`;
  })
}

const nameDuplicateCheck = (lineName) => {
  let nameArray = lineStorage().getLineNameArray();
  if(nameArray.includes(lineName)) {
    alert('중복된 노선 이름이 있습니다.');
    return false;
  }
  return true;
}

const removeTableBodyRow = (lineTableBodyTag, lines) => {
  for(let i=0;i<lines.length;i++) {
    lineTableBodyTag.deleteRow(0);
  }
}

const addLineToStorage = (lineTableBodyTag, lineName, selectedStartStationValue, selectedEndStationValue, sectionDistance, durationTime) => {
  let lines = lineStorage().getLine();
  removeTableBodyRow(lineTableBodyTag, lines);

  let newLine = new Line(lineName);
  newLine.addStations(selectedStartStationValue);
  newLine.addStations(selectedEndStationValue)
  newLine.addDistances(sectionDistance);
  newLine.addTimes(durationTime);

  lines.push(newLine);
  lineStorage().setLine(lines);
  fillLineTableBody(lineTableBodyTag);
  
}

const fillLineTableBody = (lineTableBodyTag) => {
  let lines = lineStorage().getLine();
  
  lines.forEach((line) => {
    console.log(line)
    let startStation = line.stations[0];
    let endStation = line.stations[line.stations.length-1];
    let tbodyRow = lineTableBodyTag.insertRow(lineTableBodyTag.rows.length);
    let firstCell = tbodyRow.insertCell(0);
    let secondCell = tbodyRow.insertCell(1);
    let thirdCell = tbodyRow.insertCell(2);
    let fourthCell = tbodyRow.insertCell(3);

    firstCell.innerHTML = line.name;
    secondCell.innerHTML = startStation;
    thirdCell.innerHTML = endStation;
    fourthCell.innerHTML = '<button class="line-delete-button" data-name=' + line.name + '>삭제</button>';
  })
}

const findIdxInStations = (lines, lineName) => {
  let idx;
  lines.forEach((line) => {if(line.name === lineName) idx = lines.indexOf(line)})
  return idx;
} 

const deleteLineHandler = (lineName, lineTableBodyTag) => {
  let lines = lineStorage().getLine();
  let idx = findIdxInStations(lines, lineName);

  // 노선 storage 와 view 다시 세팅
  removeTableBodyRow(lineTableBodyTag, lines);
  lines.splice(idx,1);
  lineStorage().setLine(lines);
  fillLineTableBody(lineTableBodyTag);
}

export default function lineManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = LINE_MANAGER_PAGE_TEMPLATE;

  let lineNameInput = document.getElementById('line-name-input');
  let lineStartStationSelector = document.getElementById('line-start-station-selector');
  let lineEndStationSelector = document.getElementById('line-end-station-selector');
  let sectionDistanceInput = document.getElementById('section-distance')
  let durationTimeInput = document.getElementById('duration-time');
  let lineAddButton = document.getElementById('line-add-button');
  let lineTableBodyTag = document.getElementsByClassName('line-table-tbody')[0];

  fillLineTableBody(lineTableBodyTag);
  fillSelectBoxTag(lineStartStationSelector);
  fillSelectBoxTag(lineEndStationSelector);
  
  const addLineClickHandler = () => {
    let lineName = lineNameInput.value;
    let selectedStartStationValue = lineStartStationSelector.options[lineStartStationSelector.selectedIndex].value;
    let selectedEndStationValue = lineEndStationSelector.options[lineEndStationSelector.selectedIndex].value;
    let sectionDistance = sectionDistanceInput.value;
    let durationTime = durationTimeInput.value;

    if(nameDuplicateCheck(lineName)) addLineToStorage(lineTableBodyTag, lineName, selectedStartStationValue, selectedEndStationValue, sectionDistance, durationTime);
  }

  
  lineAddButton.addEventListener('click', addLineClickHandler);
  // if deleteLineBtn is clicked
  lineTableBodyTag.addEventListener('click', function(e) {
    let lineName = e.target.dataset.name;
    
    // if data-attribute exists in btn
    if(lineName != undefined) deleteLineHandler(lineName, lineTableBodyTag);
  })
}

export {lineManagerPage}