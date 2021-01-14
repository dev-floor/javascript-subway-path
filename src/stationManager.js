import {STATION_MANAGE_TEMPLATE} from './view/stationTemplate.js'

const stationManagerPage = (contentSectionTag) => {
  contentSectionTag.innerHTML = STATION_MANAGE_TEMPLATE;
}


export {stationManagerPage};