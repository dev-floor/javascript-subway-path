import {LINE_MANAGER_PAGE_TEMPLATE} from './view/lineTemplate.js';
import {stationStorage} from './storage/stationStorage.js'

export default function lineManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = LINE_MANAGER_PAGE_TEMPLATE;
  
  let lineStartStationSelector = document.getElementById('line-start-station-selector');
  let lineEndStationSelector = document.getElementById('line-end-station-selector');

  lineStartStationSelector
}

export {lineManagerPage}