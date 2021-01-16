import {constants} from "../constantValues/constants.js"

const mapPrintArea = document.querySelector(".map");

const printAllInfos = () => {
    mapPrintArea.innerHTML = "";
    const localStorageAllLineData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);
    const localStorageAllLineDataArray = JSON.parse(localStorageAllLineData);
    localStorageAllLineDataArray.forEach(lineInfo => {
        const localStorageEachLineData = localStorage.getItem(lineInfo.line);
        const localStorageEachLineDataArray = JSON.parse(localStorageEachLineData);
        mapPrintArea.innerHTML += `<h3>${lineInfo.line}</h3>`;
        localStorageEachLineDataArray.forEach(sectionInfo => {
            sectionInfo.duration > 0 ? 
            mapPrintArea.innerHTML += `<li>${sectionInfo.station}</li><ul><li class = "list-hollow-circle">${sectionInfo.distance}km, ${sectionInfo.duration}분</li></ul>` 
            : mapPrintArea.innerHTML += `<li>${sectionInfo.station}</li>`;
        })
    })
}

export {printAllInfos};