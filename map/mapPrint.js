import {constants} from "../constantValues/constants.js"

const mapPrintArea = document.querySelector(".map");

const printAllInfos = () => {
    mapPrintArea.innerHTML = "";
    const localStorageDataAllLine = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);
    const localStorageDataAllLineArray = JSON.parse(localStorageDataAllLine);
    localStorageDataAllLineArray.forEach(lineInfo => {
        const localStorageDataEachLine = localStorage.getItem(lineInfo.line);
        const localStorageDataEachLineArray = JSON.parse(localStorageDataEachLine);
        mapPrintArea.innerHTML += `<h3>${lineInfo.line}</h3>`;
        localStorageDataEachLineArray.forEach(sectionInfo => {
            sectionInfo.duration > 0 ? 
            mapPrintArea.innerHTML += `<li>${sectionInfo.station}</li><ul><li class = "list-hollow-circle">${sectionInfo.distance}km, ${sectionInfo.duration}분</li></ul>` 
            : mapPrintArea.innerHTML += `<li>${sectionInfo.station}</li>`;
        })
    })
}

export {printAllInfos};