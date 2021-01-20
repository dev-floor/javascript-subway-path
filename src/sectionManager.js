import lineStorage from './storage/lineStorage.js';
import stationStorage from './storage/stationStorage.js';
import {SECTION_MANAGER_PAGE_TEMPLATE, SECTION_REGISTER_FORM_TEMPLATE, SECTION_TABLE_BODY} from './view/sectionTemplate.js'

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

  lines.forEach((line) => {
    if(line.name === lineName) {
      removeTableBodyRow(line.stations);

      line.stations.splice(order,0,station);
      line.distances.splice(order,0,distance);
      line.times.splice(order,0,time);
    }
  })

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

const addSectionClickHandler = () => {
  let distance = parseInt(document.getElementById('section-distance').value);
  let time = parseInt(document.getElementById('duration-time').value);
  let stationSelector = document.getElementById('section-station-selector');
  let station = stationSelector.options[stationSelector.selectedIndex].value;
  let order = parseInt(document.getElementById('section-order-input').value);
  if(stationDuplicateCheck(station)) addSectionToLine(distance, time, station, order);
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
    addSectionButton.addEventListener('click', addSectionClickHandler);
  })
}

export {sectionManagerPage};