import { PATH_SEARCH_MANAGER_PAGE_TEMPLATE } from "./view/pathSearchTemplate.js";
import lineStorage from './storage/lineStorage.js';
import Dijkstra from "./utils/Dijkstra.js";

const findBestWay = (how, departureStationName, arrivalStationName) => {
  let lines = lineStorage().getLine();
  const dijkstra = new Dijkstra();

  lines.forEach((line) => {
    let lineLength = line.stations.length;

    for(let i=0;i<lineLength-1;i++) {
      if(how == 'time') dijkstra.addEdge(line.stations[i], line.stations[i+1],line.times[i]);
      else dijkstra.addEdge(line.stations[i], line.stations[i+1],line.distances[i]);
    }
  });
  const result = dijkstra.findShortestPath(departureStationName, arrivalStationName);
  console.log(result)
};

const searchBtnClickHandler = () => {
  let departureStationInputTag = document.getElementById("departure-station-name-input");
  let arrivalStationInputTag = document.getElementById("arrival-station-name-input");
  let searchType = document.getElementsByName("search-type");
  let departureStationName = departureStationInputTag.value;
  let arrivalStationName = arrivalStationInputTag.value;
  
  searchType.forEach((radioBtn) => {
    if(radioBtn.checked) findBestWay(radioBtn.value, departureStationName, arrivalStationName);
    
  })
  
};

export default function pathSearchManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = PATH_SEARCH_MANAGER_PAGE_TEMPLATE;
  
  let searchBtn = document.getElementById("search-button");

  
  searchBtn.addEventListener('click', searchBtnClickHandler);
}

export {pathSearchManagerPage};