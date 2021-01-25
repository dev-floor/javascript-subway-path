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
        const localStorageStationDataArray = JSON.parse(localStorageStationData);
        localStorageStationDataArray.forEach(station => {
            upperStationSelect.innerHTML += `<option>${station}</option>`;
            lowerStationSelect.innerHTML += `<option>${station}</option>`;
        })
    }
}

const lineTableUpdate = () => {
    const localStorageAllLineData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);

    if(localStorageAllLineData) {
        const localStorageAllLineDataArray = JSON.parse(localStorageAllLineData);

        const lineList = document.querySelector("#line-status-table tbody");
        lineList.innerHTML = `<tr><th>노선 이름</th><th>상행 종점역</th><th>하행 종점역</th><th>설정</th></tr>`;
        localStorageAllLineDataArray.forEach(line => {
            lineList.innerHTML += `<tr><td>${line.line}</td><td>${line.upperStation}</td><td>${line.lowerStation}</td><td><button class = "line-delete-button">삭제</button></td></tr>`;
        })
    }
}

export {optionTagUpdate, lineTableUpdate};