import stationStorage from './localStorage.js';
import {STATION_MANAGE_TEMPLATE} from './view/stationTemplate.js'

const MIN_STATION_LENGTH_LIMIT = 2;

const nameDupilcateCheck = (stationName) => {
  let stations = JSON.parse(localStorage.getItem('STATIONS'));

  if(stations.includes(stationName)) {
    alert('중복된 이름이 있습니다.');
    return false;
  }
  return true;
}

const nameLengthCheck = (stationName) => {
  if(stationName.length < MIN_STATION_LENGTH_LIMIT) {
    alert('2글자 이상 입력해주세요.');
    return false;
  }
  return true;
}

const addStationToStorage = (stationName, stationTableBodyTag) => {
  let stations = JSON.parse(localStorage.getItem('STATIONS'));
  
  removeTableBodyRow(stationTableBodyTag, stations);

  stations.push(stationName);

  localStorage.setItem('STATIONS', JSON.stringify(stations));
  
  fillStationTableBody(stationTableBodyTag);
}

const removeTableBodyRow = (stationTableBodyTag, stations) => {
  for(let i=0;i<stations.length;i++) {
    stationTableBodyTag.deleteRow(0);
  }
}

const fillStationTableBody = (stationTableBodyTag) => {
  let stations = stationStorage().getStation();
  stations.forEach((station) => {
    let tbodyRow = stationTableBodyTag.insertRow(stationTableBodyTag.rows.length);
    let firstCell = tbodyRow.insertCell(0);
    let secondCell = tbodyRow.insertCell(1);
    firstCell.innerHTML = station;
    secondCell.innerHTML = '<button class=".station-delete-button">삭제</button>';
  })
  
};

export default function stationManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = STATION_MANAGE_TEMPLATE;
  const stationInputValue = document.getElementById('station-name-input');
  const addStationButton = document.getElementById('station-add-button');
  const stationTableBodyTag = document.getElementsByClassName('staion-table-body')[0];

  fillStationTableBody(stationTableBodyTag);

  const addStationClickHandler = () => {
    let stationName = stationInputValue.value;

    if(nameDupilcateCheck(stationName) && nameLengthCheck(stationName)) addStationToStorage(stationName, stationTableBodyTag);
  }

  addStationButton.addEventListener('click', addStationClickHandler);
}


export {stationManagerPage};