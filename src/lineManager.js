import {LINE_MANAGER_PAGE_TEMPLATE} from './view/lineTemplate.js';
import {stationStorage} from './storage/stationStorage.js'
import lineStorage from './storage/lineStorage.js';

const fillSelectBoxTag = (selectBoxTag) => {
  let stations = stationStorage().getStation();
  stations.forEach((station) => {
    selectBoxTag.innerHTML += `<option>${station}</option>`;
  })
}

const nameDuplicateCheck = (lineName) => {

}

const addLineToStorage = (lineName) => {

}

const fillLineTableBody = (lineTableBodyTag) => {
  let lines = lineStorage().getLine();
  
  lines.forEach((line) => {
    console.log(line.stations[0].length)
    let startStation = line.stations[0][0];
    let endStation = line.stations[0][line.stations[0].length-1];
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

export default function lineManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = LINE_MANAGER_PAGE_TEMPLATE;

  let lineNameInput = document.getElementById('line-name-input');
  let lineStartStationSelector = document.getElementById('line-start-station-selector');
  let lineEndStationSelector = document.getElementById('line-end-station-selector');
  let lineAddButton = document.getElementById('line-add-button');
  let lineTableBodyTag = document.getElementsByClassName('line-table-tbody')[0];
  console.log(lineTableBodyTag)
  fillLineTableBody(lineTableBodyTag);
  
  const addLineClickHandler = () => {
    let lineName = lineNameInput.value;

    if(nameDuplicateCheck(lineName)) addLineToStorage(lineName);
  }

  fillSelectBoxTag(lineStartStationSelector);
  fillSelectBoxTag(lineEndStationSelector);
  lineAddButton.addEventListener('click', addLineClickHandler);
}

export {lineManagerPage}