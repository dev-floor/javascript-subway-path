import {message} from "../message.js"
import {constants} from "../constants.js"

const addStationPreliminaryWork = () => {
    const userInputStation = document.querySelector("#station-name-input").value;

    userInputStationValidation(userInputStation) ? addStation(userInputStation) : 0;
}

const userInputStationValidation = (name) => {
    if(name.length < constants.STATION_NAME_MINIMUM_LENGTH) {
        alert(message.INPUT_STATION_NAME_LESS_THAN_TWO);
        return false;
    }

    const localStorageData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
    if(localStorageData) {
        const localStorageDataToArray = JSON.parse(localStorageData);
        
        if(localStorageDataToArray.includes(name)) {
            alert(message.INPUT_STATION_NAME_OVERLAPPED);
            return false;
        }
    }
    return true;
}

const addStation = (inputStation) => {
    const localStorageData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
    
    if(localStorageData) {
        const localStorageDataToArray = JSON.parse(localStorageData);
        localStorageDataToArray.push(inputStation);
        localStorage.setItem(constants.LOCAL_STORAGE_KEY_STATION, JSON.stringify(localStorageDataToArray));
    } else {
        const localStorageNewArray = [];
        localStorageNewArray.push(inputStation);
        localStorage.setItem(constants.LOCAL_STORAGE_KEY_STATION, JSON.stringify(localStorageNewArray));
    }
    
    const stationList = document.querySelector("#station-name-table tbody");
    stationList.innerHTML += `<tr>    <td>${inputStation}</td>    <td><button class = "station-delete-button">삭제</button></td>  </tr>`;   
}

const deleteStation = (event) => {
    if(event.target.matches(".station-delete-button") && confirm(message.DELETE_STATION_BTN_PRESSED)) {
        const removeTarget = event.target.closest(constants.TABLE_TARGET);

        // delete from localStorage.
        const removeStationName = removeTarget.childNodes[constants.STATION_VALUE_CHILDNODE_INDEX].innerHTML;
        
        const localStorageData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
        const localStorageArray = JSON.parse(localStorageData);
        const removedAfter = localStorageArray.filter(x => x !== removeStationName);
        localStorage.setItem(constants.LOCAL_STORAGE_KEY_STATION, JSON.stringify(removedAfter));
        
        // remove from table.
        removeTarget.remove();
    }
}

const loadLocalStorageData = () => {
    const localStorageData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);

    if(localStorageData) {
        const localStorageDataToArray = JSON.parse(localStorageData);
        
        const stationList = document.querySelector("#station-name-table tbody");
        stationList.innerHTML = `<tr><th>역 이름</th><th>설정</th></tr>`;
        localStorageDataToArray.forEach(station => {
            stationList.innerHTML += `<tr><td>${station}</td><td><button class = "station-delete-button">삭제</button></td></tr>`;
        })
    }
}

export {addStationPreliminaryWork, deleteStation, loadLocalStorageData, addStation};