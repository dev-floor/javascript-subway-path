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

const addStationToStorage = (stationName) => {
  let stations = JSON.parse(localStorage.getItem('STATIONS'));
  stations.push(stationName)
  localStorage.setItem('STATIONS', JSON.stringify(stations));
}

export default function stationManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = STATION_MANAGE_TEMPLATE;
  const stationInputValue = document.getElementById('station-name-input');
  const addStationButton = document.getElementById('station-add-button');

  const addStationClickHandler = () => {
    let stationName = stationInputValue.value;

    if(nameDupilcateCheck(stationName) && nameLengthCheck(stationName)) addStationToStorage(stationName);
  }

  addStationButton.addEventListener('click', addStationClickHandler);
}


export {stationManagerPage};