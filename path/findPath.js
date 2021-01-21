import {message} from "../constantValues/message.js";
import {constants} from "../constantValues/constants.js";
import Dijkstra from "../src/utils/Dijkstra.js";

const findPathPreliminaryWork = () => {
    const departureStation = document.getElementById("departure-station-name-input").value;
    const arrivalStation = document.getElementById("arrival-station-name-input").value;
    const findPathResultTable = document.getElementById("find-path-result");

    if(findPathValidation(departureStation, arrivalStation)) {
        findPath(departureStation, arrivalStation);
        findPathResultTable.classList.remove("hidden");
    }
}

const findPathValidation = (departure, arrival) => {
    // 1. localStorage - station에 두 역이 있는지..
    const localStorageStationData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
    const localStorageStationDataArray = JSON.parse(localStorageStationData);
    const departureStationExist = localStorageStationDataArray.some(station => station === departure);
    const arrivalStationExist = localStorageStationDataArray.some(station => station === arrival);
    if(!departureStationExist || !arrivalStationExist) {
        alert(message.FIND_PATH_NO_SUCH_STATION);
        return false;
    }

    // 2. 두 개의 역의 이름이 같은지
    if(departure === arrival) {
        alert(message.FIND_PATH_DEPARTURE_ARRIVAL_SAME);
        return false;
    }
    return true;
}

const findPath = (departureStation, arrivalStation) => {
    const result = runDijkstra(departureStation, arrivalStation);
    if(result === undefined) {
        alert(message.FIND_PATH_NOT_CONNECTED);
        return;
    }
    const [distance, duration] = calculateDistanceDuration(result);
    printFoundPath(result, distance, duration);
}

const runDijkstra = (start, goal) => {
    const dijkstra = new Dijkstra();

    const localStorageAllLineData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);
    const localStorageAllLineDataArray = JSON.parse(localStorageAllLineData);
    const optionValue = document.getElementsByName("search-type");

    localStorageAllLineDataArray.forEach(lineInfo => {
        const localStorageEachLineData = localStorage.getItem(lineInfo.line);
        const localStorageEachLineDataArray = JSON.parse(localStorageEachLineData);
        for(let i = 0 ; i < localStorageEachLineDataArray.length - 1 ; i++) {
            optionValue[0].checked ? dijkstra.addEdge(localStorageEachLineDataArray[i].station, localStorageEachLineDataArray[i + 1].station, localStorageEachLineDataArray[i].distance) : dijkstra.addEdge(localStorageEachLineDataArray[i].station, localStorageEachLineDataArray[i + 1].station, localStorageEachLineDataArray[i].duration)
        }
    })
    return dijkstra.findShortestPath(start, goal);
}

const calculateDistanceDuration = (result) => {
    let totalDistance = 0;
    let totalDuration = 0;
    const localStorageAllSectionData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_SECTION);
    const localStorageAllSectionDataArray = JSON.parse(localStorageAllSectionData);

    for(let i = 0 ; i < result.length - 1 ; i++) {
        const path = result[i].concat(result[i + 1]);
        totalDistance += localStorageAllSectionDataArray.find(sectionInfo => sectionInfo.section === path).distance;
        totalDuration += localStorageAllSectionDataArray.find(sectionInfo => sectionInfo.section === path).duration;
    }
    return [totalDistance, totalDuration];
}

const printFoundPath = (result, distance, duration) => {
    const pathFoundTable = document.querySelector("#find-path-result-table tbody");
    pathFoundTable.innerHTML = `<tr><th>총 거리</th><th>총 소요시간</th></tr>`;
    let tableContents = `<tr><td>${distance}km</td><td>${duration}분</td></tr><tr><td colspan = "2">`;
    result.forEach((station, index) => { (index === result.length - 1) ? tableContents += `${station}` : tableContents += `${station} ➡` })
    tableContents += `</td></tr>`;
    pathFoundTable.innerHTML += tableContents;
}

export {findPathPreliminaryWork};