import stationStorage from './storage/stationStorage.js';
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
  let stations = stationStorage().getStation();
  removeTableBodyRow(stationTableBodyTag, stations);

  stations.push(stationName);
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
    
    firstCell.innerHTML = station;
    secondCell.innerHTML = '<button class="station-delete-button" data-name=' + station + '>삭제</button>';
  });

  return stationTableBodyTag;
};

const deleteStationHandler = (stationName, stationTableBodyTag) => {
  let stations = stationStorage().getStation();
  let idx = stations.indexOf(stationName);

  // 역 storage 와 view 다시 세팅
  removeTableBodyRow(stationTableBodyTag, stations);
  stations.splice(idx,1);
  stationStorage().setStation(stations);
  fillStationTableBody(stationTableBodyTag);
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
  // if deleteStatoinBtn is clicked
  stationTableBodyTag.addEventListener('click', function(e) {
    let stationName = e.target.dataset.name;
    
    // if data-attribute exists in btn
    if(stationName != undefined) deleteStationHandler(stationName, stationTableBodyTag);
  });
}


export {stationManagerPage};