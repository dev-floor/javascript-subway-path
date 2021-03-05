import Station from './object/station.js';
import stationStorage from './storage/stationStorage.js';
import {STATION_MANAGE_TEMPLATE} from './view/stationTemplate.js'

const MIN_STATION_LENGTH_LIMIT = 2;
const EMPTY = 0;

const nameDupilcateCheck = (stationName) => {
  let stationNameArray = stationStorage().getStationNameArray();
  
  if(stationNameArray.includes(stationName)) {
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
  let newStation = new Station(stationName);
  let stations = stationStorage().getStation();
  removeTableBodyRow(stationTableBodyTag, stations);

  stations.push(newStation);
  stationStorage().setStation(stations);
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
    
    firstCell.innerHTML = station.name;
    secondCell.innerHTML = '<button class="station-delete-button" data-name=' + station.name + '>삭제</button>';
  });

  return stationTableBodyTag;
};

const findIdxInStations = (stations, stationName) => {
  for(let i=0;i<stations.length;i++) {
    if(stations[i].name === stationName) return i;
  }
}

const deleteStationHandler = (stationName, stationTableBodyTag) => {
  let stations = stationStorage().getStation();
  let idx = findIdxInStations(stations, stationName);

  // 역 storage 와 view 다시 세팅
  removeTableBodyRow(stationTableBodyTag, stations);
  stations.splice(idx,1);
  stationStorage().setStation(stations);
  fillStationTableBody(stationTableBodyTag);
}

const findWhichStation = (stationName) => {
  let stations = stationStorage().getStation();
  for(let i=0;i<stations.length;i++) {
    if(stations[i].name === stationName) return stations[i];
  }
}

const stationHaveLine = (stationName) => {
  let station = findWhichStation(stationName);
  if(station.lines.length !== EMPTY) {
    alert('이 역은 노선에 포함되어 있습니다.');
    return true;
  };
  return false;
}

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
  // if deleteStatoinBtn is clicked
  stationTableBodyTag.addEventListener('click', function(e) {
    let stationName = e.target.dataset.name;
    
    // if data-attribute exists in btn
    if(stationName != undefined && !stationHaveLine(stationName)) deleteStationHandler(stationName, stationTableBodyTag);
  });
}


export {stationManagerPage, findIdxInStations};