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

const findLineObject = (lineName) => {
  let lines = lineStorage().getLine();
  
  for(let i=0;i<lines.length;i++) {
    if(lines[i].name === lineName) return lines[i];
  }
}

const fillLineTable = (sectionTableBody, lineName) => {
  let line = findLineObject(lineName);
  let stations = line.stations[0];
  console.log(sectionTableBody)
  for(let i=0;i<stations.length;i++) {
    let tbodyRow = sectionTableBody.insertRow(sectionTableBody.rows.length);
    let firstCell = tbodyRow.insertCell(0);
    let secondCell = tbodyRow.insertCell(1);
    let thirdCell = tbodyRow.insertCell(2);

    firstCell.innerHTML = i;
    secondCell.innerHTML = stations[i];
    thirdCell.innerHTML = '<button class="section-delete-button" data-name=' + stations[i] + '>삭제</button>';
  }
  

  // 3호선이라고 했을때
}

export default function sectionManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = SECTION_MANAGER_PAGE_TEMPLATE;

  let lines = lineStorage().getLine();
  let sectionSelectContainer = document.getElementById('section-selector-container');
  let sectionRegisterContainer = document.getElementById('section-register-container');
  sectionSelectContainer.innerHTML = makeLineButtonView(lines);

  let sectionLineMenuButton = document.getElementsByClassName('section-line-menu-button');
  // fill Register Container
  sectionSelectContainer.addEventListener('click', function(e) {
    let lineName = e.target.dataset.linename;
    sectionRegisterContainer.innerHTML = SECTION_REGISTER_FORM_TEMPLATE;

    let lineTitle = document.getElementById('line-title');
    lineTitle.innerText = lineName;
    let stationSelector = document.getElementById('section-station-selector');
    let lineTableContainer = document.getElementById('section-show-container');
    
    lineTableContainer.innerHTML = SECTION_TABLE_BODY;
    let sectionTableBody = document.getElementsByClassName('section-table-body')[0];

    fillStationSelector(stationSelector);
    fillLineTable(sectionTableBody, lineName);
  })

  // fill

  
}

export {sectionManagerPage};