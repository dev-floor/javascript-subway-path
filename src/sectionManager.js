import lineStorage from './storage/lineStorage.js';
import {stationStorage} from './storage/stationStorage.js';
import {findIdxInStations} from './stationManager.js'
import {SECTION_MANAGER_PAGE_TEMPLATE, SECTION_REGISTER_FORM_TEMPLATE, SECTION_TABLE_BODY} from './view/sectionTemplate.js'

const START_STATION_IDX = 0;
const ONLY_HAVE_START_END_STATION = 2;

const makeLineButtonView = (lines) => {
  let lineButtonTemplate = '';
  lines.forEach((line) => {
    lineButtonTemplate = lineButtonTemplate + `<button class="section-line-menu-button" data-lineName=${line.name}>${line.name}</button> &nbsp`;
  })
  return lineButtonTemplate;
}

const fillStationSelector = (stationSelector) => {
  let stations = stationStorage().getStationNameArray();
  stations.forEach((station) => {
    stationSelector.innerHTML += `<option>${station}</option>`;
  })
}

const findWhichLine = (lineName) => {
  let lines = lineStorage().getLine();
  
  for(let i=0;i<lines.length;i++) {
    if(lines[i].name === lineName) return lines[i];
  }
}

const fillSectionTableBody = (lineName) => {
  let sectionTableBody = document.getElementsByClassName('section-table-body')[0];
  let line = findWhichLine(lineName);
  let stations = line.stations;

  for(let i=0;i<stations.length;i++) {
    let tbodyRow = sectionTableBody.insertRow(sectionTableBody.rows.length);
    let firstCell = tbodyRow.insertCell(0);
    let secondCell = tbodyRow.insertCell(1);
    let thirdCell = tbodyRow.insertCell(2);

    firstCell.innerHTML = i;
    secondCell.innerHTML = stations[i];
    thirdCell.innerHTML = '<button class="section-delete-button" data-name=' + stations[i] + '>삭제</button>';
  }
}

const removeTableBodyRow = (stations) => {
  let sectionTableBody = document.getElementsByClassName('section-table-body')[0];
  for(let i=0;i<stations.length;i++) {
    sectionTableBody.deleteRow(0);
  }
}

const addSectionToLine = (distance, time, station, order) => {
  let lines = lineStorage().getLine();
  let lineName = document.getElementById('line-title').innerText;

  for(let i=0;i<lines.length;i++) {
    if(lines[i].name === lineName) {
      let endStationIdx = lines[i].stations.length;
      removeTableBodyRow(lines[i].stations);

      // 종점이 아니라면 끊어진 라인과 연결 시켜주고 지정된 시간, 거리 값 넣어주기
      if(order !== START_STATION_IDX && order !== endStationIdx) {
        
        lines[i].distances[order-1] = 2;
        lines[i].times[order-1] = 3;

        lines[i].stations.splice(order,0,station);
        lines[i].distances.splice(order-1,0,distance);
        lines[i].times.splice(order-1,0,time);
        break;
      } 
      else {
        lines[i].stations.splice(order,0,station);
        lines[i].distances.splice(order,0,distance);
        lines[i].times.splice(order,0,time);
        break;
      }
    }
  }

  lineStorage().setLine(lines);
  fillSectionTableBody(lineName);
}

const stationDuplicateCheck = (station) => {
  let lineName = document.getElementById('line-title').innerText;
  let line = findWhichLine(lineName);
  let stations = line.stations;
  if(stations.includes(station)) {
    alert('노선에 중복된 역이 있습니다.');
    return false;
  }
  return true;
}

const addLineToStation = (stationName) => {
  // 역에 노선 정보 넣어주기.
  let lineName = document.getElementById('line-title').innerText;
  let stations = stationStorage().getStation();
  let idx = findIdxInStations(stations, stationName);

  stations[idx].lines.push(lineName);
  stationStorage().setStation(stations)
}

const addSectionClickHandler = () => {
  let distance = parseInt(document.getElementById('section-distance').value);
  let time = parseInt(document.getElementById('duration-time').value);
  let stationSelector = document.getElementById('section-station-selector');
  let station = stationSelector.options[stationSelector.selectedIndex].value;
  let order = parseInt(document.getElementById('section-order-input').value);
  
  if(stationDuplicateCheck(station)) {
    addSectionToLine(distance, time, station, order);
    addLineToStation(station);
  }
}

const haveMoreTwoStation = (lineName) => {
  let line = findWhichLine(lineName);
  
  if(line.stations.length === ONLY_HAVE_START_END_STATION) {
    alert("이 노선은 종점밖에 없어 삭제할 수 없습니다.");
    return false;
  }
  return true;
}

const findIdxInLines = (stationsInLine, stationName) => {
  for(let i=0;i<stationsInLine.length;i++) {
    if(stationsInLine[i] === stationName) return i;
  }
}

const deleteSectionHandler = (stationName) => {
  // line 정보 불러오고, 해당 라인에서 station 빼주기
  let lines = lineStorage().getLine();
  let lineName = document.getElementById('line-title').innerText;

  for(let i=0;i<lines.length;i++) {
    if(lines[i].name === lineName) {
      let idx = findIdxInLines(lines[i].stations, stationName);
      removeTableBodyRow(lines[i].stations);
      console.log(idx)

      // 상행 종점 제거
      if(idx === 0) {
        lines[i].stations.splice(idx,1);
        lines[i].distances.splice(idx,1);
        lines[i].times.splice(idx,1);
        break;
      }
      // 하행 종점 제거
      else if(idx === lines[i].stations.length-1){
        lines[i].stations.splice(idx,1);
        lines[i].distances.splice(idx-1,1);
        lines[i].times.splice(idx-1,1);
        break;
      }
      // 종점이 아닌 역 제거
      else {
        let afterDistance = lines[i].distances[idx-1] + lines[i].distances[idx];
        let afterTime = lines[i].times[idx-1] + lines[i].times[idx];

        lines[i].distances[idx-1] = afterDistance;
        lines[i].times[idx-1] = afterTime;

        lines[i].stations.splice(idx,1);
        lines[i].distances.splice(idx,1);
        lines[i].times.splice(idx,1);
        break;
      }
    }
  }
  console.log(lines)
  lineStorage().setLine(lines);
  fillSectionTableBody(lineName);
}

export default function sectionManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = SECTION_MANAGER_PAGE_TEMPLATE;

  let lines = lineStorage().getLine();
  let sectionSelectContainer = document.getElementById('section-selector-container');
  let sectionRegisterContainer = document.getElementById('section-register-container');

  // fill Line Button when '노선관리' clicked
  sectionSelectContainer.innerHTML = makeLineButtonView(lines);

  // when Line btn clicked
  sectionSelectContainer.addEventListener('click', function(e) {
    let lineName = e.target.dataset.linename;
    // fill register form
    sectionRegisterContainer.innerHTML = SECTION_REGISTER_FORM_TEMPLATE;

    let lineTitle = document.getElementById('line-title');
    lineTitle.innerText = lineName;
    let stationSelector = document.getElementById('section-station-selector');
    let lineTableContainer = document.getElementById('section-show-container');
    
    // fill line table body
    lineTableContainer.innerHTML = SECTION_TABLE_BODY;

    fillStationSelector(stationSelector);
    fillSectionTableBody(lineName);

    let addSectionButton = document.getElementById('section-add-button');
    let tableBodyTag = document.getElementsByClassName('section-table-body')[0];

    addSectionButton.addEventListener('click', addSectionClickHandler);
    
    // if deleteStatoinBtn is clicked
    tableBodyTag.addEventListener('click', function(e) {
      let stationName = e.target.dataset.name;
      if(stationName != undefined && haveMoreTwoStation(lineName)) deleteSectionHandler(stationName);
    });
  })
}

export {sectionManagerPage};