import {addStationToList} from "../station/stationAddRemove.js"
import {constants} from "../constants.js"

const userInputStationValidationWithoutAlert = (name) => {
    const localStorageData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
    if(localStorageData) {
        const localStorageDataToArray = JSON.parse(localStorageData);
        
        if(localStorageDataToArray.includes(name)) {
            return false;
        }
    }
    return true;
}

const setInitialState = () => {
    console.log("Initialize start.");

    // 7 stations adding.
    if(userInputStationValidationWithoutAlert("교대")) {
        addStationToList("교대");
    }

    if(userInputStationValidationWithoutAlert("똑집")) {
        addStationToList("똑집");
    }

    if(userInputStationValidationWithoutAlert("역삼")) {
        addStationToList("역삼");
    }

    if(userInputStationValidationWithoutAlert("남부터미널")) {
        addStationToList("남부터미널");
    }

    if(userInputStationValidationWithoutAlert("양재")) {
        addStationToList("양재");
    }

    if(userInputStationValidationWithoutAlert("매봉")) {
        addStationToList("매봉");
    }

    if(userInputStationValidationWithoutAlert("양재시민의숲")) {
        addStationToList("양재시민의숲");
    }
}

export {setInitialState};