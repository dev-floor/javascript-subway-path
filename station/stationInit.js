import {constants} from "../constantValues/constants.js"

const loadLocalStorageData = () => {
    const localStorageStationData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);

    if(localStorageStationData) {
        const localStorageStationDataArray = JSON.parse(localStorageStationData);
        
        const stationList = document.querySelector("#station-name-table tbody");
        stationList.innerHTML = `<tr><th>역 이름</th><th>설정</th></tr>`;
        localStorageStationDataArray.forEach(station => {
            stationList.innerHTML += `<tr><td>${station}</td><td><button class = "station-delete-button">삭제</button></td></tr>`;
        })
    }
}

export {loadLocalStorageData};