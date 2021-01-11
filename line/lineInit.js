import {constants} from "../constantValues/constants.js"

export default class Line {
    constructor(line, upper, lower) {
        this.line = line;
        this.upperStation = upper;
        this.lowerStation = lower;
    }
}

const optionTagUpdate = () => {
    const localStorageStationData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);

    const upperStationSelect = document.querySelector("#line-start-station-selector");
    const lowerStationSelect = document.querySelector("#line-end-station-selector");

    upperStationSelect.innerHTML = "";
    lowerStationSelect.innerHTML = "";

    if(localStorageStationData) {
        const localStorageStationDataToArray = JSON.parse(localStorageStationData);
        localStorageStationDataToArray.forEach(station => {
            upperStationSelect.innerHTML += `<option>${station}</option>`;
            lowerStationSelect.innerHTML += `<option>${station}</option>`;
        })
    }
}

const lineTableUpdate = () => {
    const localStorageLineData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);

    if(localStorageLineData) {
        const localStorageLineDataToArray = JSON.parse(localStorageLineData);

        const LineList = document.querySelector("#line-status-table tbody");
        LineList.innerHTML = `<tr><th>노선 이름</th><th>상행 종점역</th><th>하행 종점역</th><th>설정</th></tr>`;
        localStorageLineDataToArray.forEach(line => {
            LineList.innerHTML += `<tr><td>${line.line}</td><td>${line.upperStation}</td><td>${line.lowerStation}</td><td><button class = "line-delete-button">삭제</button></td></tr>`;
        })
    }
}

export {optionTagUpdate, lineTableUpdate};