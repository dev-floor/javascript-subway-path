import {LINE_MANAGER_PAGE_TEMPLATE} from './view/lineTemplate.js';
import {stationStorage} from './storage/stationStorage.js'

const fillSelectBoxTag = (selectBoxTag) => {
  let stations = stationStorage().getStation();
  stations.forEach((station) => {
    selectBoxTag.innerHTML += `<option>${station}</option>`;
  })
};

const nameDuplicateCheck = (lineName) => {

};

const addLineToStorage = (lineName) => {

};

export default function lineManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = LINE_MANAGER_PAGE_TEMPLATE;

  let lineNameInput = document.getElementById('line-name-input');
  let lineStartStationSelector = document.getElementById('line-start-station-selector');
  let lineEndStationSelector = document.getElementById('line-end-station-selector');
  let lineAddButton = document.getElementById('line-add-button');
  
  const addLineClickHandler = () => {
    let lineName = lineNameInput.value;

    if(nameDuplicateCheck(lineName)) addLineToStorage(lineName);
  }

  fillSelectBoxTag(lineStartStationSelector);
  fillSelectBoxTag(lineEndStationSelector);
  lineAddButton.addEventListener('click', addLineClickHandler);
}

export {lineManagerPage}