import {message} from "../constantValues/message.js"
import {constants} from "../constantValues/constants.js"
import {optionTagUpdate} from "../line/lineInit.js"

const addStationPreliminaryWork = () => {
    const userInputStation = document.querySelector("#station-name-input").value;

    userInputStationValidation(userInputStation) ? addStation(userInputStation) : 0;
}

const userInputStationValidation = (name) => {
    if(name.length < constants.STATION_NAME_MINIMUM_LENGTH) {
        alert(message.INPUT_STATION_NAME_LESS_THAN_TWO);
        return false;
    }

    const localStorageStationData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
    if(localStorageStationData) {
        const localStorageStationDataArray = JSON.parse(localStorageStationData);
        
        if(localStorageStationDataArray.includes(name)) {
            alert(message.INPUT_STATION_NAME_OVERLAPPED);
            return false;
        }
    }
    return true;
}

const addStation = (inputStation) => {
    const localStorageStationData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
    
    if(localStorageStationData) {
        const localStorageStationDataArray = JSON.parse(localStorageStationData);
        localStorageStationDataArray.push(inputStation);
        localStorage.setItem(constants.LOCAL_STORAGE_KEY_STATION, JSON.stringify(localStorageStationDataArray));
    } else {
        const localStorageNewArray = [];
        localStorageNewArray.push(inputStation);
        localStorage.setItem(constants.LOCAL_STORAGE_KEY_STATION, JSON.stringify(localStorageNewArray));
    }
    const stationList = document.querySelector("#station-name-table tbody");
    stationList.innerHTML += `<tr><td>${inputStation}</td><td><button class = "station-delete-button">삭제</button></td></tr>`;   
    optionTagUpdate();
}

const deleteStation = (event) => {
    if(event.target.matches(".station-delete-button") && confirm(message.DELETE_STATION_BTN_PRESSED)) {
         // delete from localStorage.
        const removeTarget = event.target.closest(constants.TABLE_TARGET);
        const removeStationName = removeTarget.childNodes[constants.STATION_VALUE_CHILDNODE_INDEX].innerHTML;
        if(checkLineRegisterStation(removeStationName)) {
            const localStorageStationData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
            const localStorageStationDataArray = JSON.parse(localStorageStationData);
            const removedAfter = localStorageStationDataArray.filter(station => station !== removeStationName);
            localStorage.setItem(constants.LOCAL_STORAGE_KEY_STATION, JSON.stringify(removedAfter));

            // remove from table.
            const removeTarget = event.target.closest(constants.TABLE_TARGET);
            removeTarget.remove();
            
            // line select option update.
            optionTagUpdate();
        }
    }
}

const checkLineRegisterStation = (checkStation) => {
    // all Line 에서 호선 정보 다 끌고 와서 해야함.
    let isLineRegisteredStation = false;
    const localStorageAllLineData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);
    const localStorageAllLineDataArray = JSON.parse(localStorageAllLineData);
    const allLineName = localStorageAllLineDataArray.map(lineInfo => lineInfo.line);
    allLineName.forEach(line => {
        const localStorageEachLineData = localStorage.getItem(line);
        const localStorageEachLineDataArray = JSON.parse(localStorageEachLineData);
        localStorageEachLineDataArray.forEach(sectionInfo => {
            if(sectionInfo.station === checkStation) {
                isLineRegisteredStation = true;
            }
        })
    })
    if(isLineRegisteredStation === true) alert(message.LINE_REGISTERED_STATION_DELETE_IMPOSSIBLE);
    return !isLineRegisteredStation;
}

export {addStationPreliminaryWork, deleteStation, addStation};