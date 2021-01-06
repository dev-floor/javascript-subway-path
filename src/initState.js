import {addStation} from "../station/stationAddRemove.js"
import {constants} from "../constantValues/constants.js"

const setInitialState = () => {

    const localStorageData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
    
    // 7 stations adding.
    if(!localStorageData) {
        addStation("교대");
        addStation("강남");
        addStation("역삼");
        addStation("남부터미널");
        addStation("매봉");
        addStation("양재");
        addStation("양재시민의숲");
    }

}

export {setInitialState};