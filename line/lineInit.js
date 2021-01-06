import {constants} from "../constantValues/constants.js"

const optionTagUpdate = () => {
    const localStorageData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);

    const upperStationSelect = document.querySelector("#line-start-station-selector");
    const lowerStationSelect = document.querySelector("#line-end-station-selector");

    upperStationSelect.innerHTML = "";
    lowerStationSelect.innerHTML = "";

    if(localStorageData) {
        const localStorageDataToArray = JSON.parse(localStorageData);
        localStorageDataToArray.forEach(station => {
            upperStationSelect.innerHTML += `<option>${station}</option>`;
            lowerStationSelect.innerHTML += `<option>${station}</option>`;
        })
    }
}

const lineTableUpdate = () => {
    
}

export {optionTagUpdate, lineTableUpdate}