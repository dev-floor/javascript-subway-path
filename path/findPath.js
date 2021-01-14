import {message} from "../constantValues/message.js";
import {constants} from "../constantValues/constants.js";

const findPathPreliminaryWork = () => {
    const departureStation = document.getElementById("departure-station-name-input").value;
    const arrivalStation = document.getElementById("arrival-station-name-input").value;

    // 1. localStorage - station에 두 역이 있는지..
    const localStorageStationData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
    const localStorageStationDataArray = JSON.parse(localStorageStationData);
    const departureStationExist = localStorageStationDataArray.some(station => station === departureStation);
    const arrivalStationExist = localStorageStationDataArray.some(station => station === arrivalStation);
    if(!departureStationExist || !arrivalStationExist) {
        alert(message.FIND_PATH_NO_SUCH_STATION);
        return ;
    }
    
    // 2. 갈 수는 있는건지.
}

const findPath = () => {

}

export {findPathPreliminaryWork};