import {message} from "../constantValues/message.js"
import {constants} from "../constantValues/constants.js"

export default class Section {
    constructor(station, distance, duration) {
        this.station = station;
        this.distance = distance;
        this.duration = duration;
    }
}

const sectionControlBtnUpdate = () => {
    const localStorageData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);
    const sectionControlBtns = document.querySelector(".section-line-menu-button-control");

    if(localStorageData) {
        const localStorageArray = JSON.parse(localStorageData);

        sectionControlBtns.innerHTML = "";
        localStorageArray.forEach( lineInfo => sectionControlBtns.innerHTML += `<button class="section-line-menu-button">${lineInfo.line}</button> ` );
    }
}

const sectionOptionTagUpdate = (line) => {
    const localStorageStationData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);

    const upperStationSelect = document.querySelector("#section-start-station-selector");
    const lowerStationSelect = document.querySelector("#section-end-station-selector");

    upperStationSelect.innerHTML = "";
    lowerStationSelect.innerHTML = "";
    
    if(localStorageStationData) {
        const localStorageStationDataArray = JSON.parse(localStorageStationData);
        localStorageStationDataArray.forEach(station => {
            upperStationSelect.innerHTML += `<option>${station}</option>`;
            lowerStationSelect.innerHTML += `<option>${station}</option>`;
        })
    }
}

const sectionTableUpdate = (pickedLine) => {
    const localStorageEachLineData = localStorage.getItem(pickedLine);

    if(localStorageEachLineData) {
        const localStorageEachLineDataToArray = JSON.parse(localStorageEachLineData);

        const sectionList = document.querySelector("#section-status-table");
        sectionList.innerHTML = `<tr><th>순서</th><th>역 이름</th><th>설정</th></tr>`;
        localStorageEachLineDataToArray.forEach((sectionInfo, index) => {
            sectionList.innerHTML += `<tr><td>${index}</td><td>${sectionInfo.station}</td><td><button class = "section-delete-button">노선에서 제거</button></td></tr>`
        })
    } else {
        alert(message.NO_SELECTED_LINE_INFO_IN_STORAGE);
    }
}

export {sectionControlBtnUpdate, sectionOptionTagUpdate, sectionTableUpdate};