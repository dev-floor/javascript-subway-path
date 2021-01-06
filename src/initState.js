import {addStation} from "../station/stationAddRemove.js"
import {constants} from "../constantValues/constants.js"

const setInitialState = () => {
    const localStorageStationData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
    const localStorageLineData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_LINE);
    
    // 7 stations adding.
    if(!localStorageStationData) {
        addStation("교대");
        addStation("강남");
        addStation("역삼");
        addStation("남부터미널");
        addStation("매봉");
        addStation("양재");
        addStation("양재시민의숲");
    }

    if(!localStorageLineData) {
        
    }

}

export {setInitialState};