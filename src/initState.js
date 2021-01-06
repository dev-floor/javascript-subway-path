import {addStation} from "../station/stationAddRemove.js"
import {constants} from "../constantValues/constants.js"
import Line from "../line/lineInit.js";

const setInitialState = () => {
    const localStorageStationData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_STATION);
    const localStorageLineData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_LINE);
    
    // 7 stations adding.
    if(!localStorageStationData) {
        addStationToEmptyLocalStorage();
    }

    if(!localStorageLineData) {
        addLineToEmptyLocalStorage();
    }

}

const addStationToEmptyLocalStorage = () => {
    addStation("교대");
    addStation("강남");
    addStation("역삼");
    addStation("남부터미널");
    addStation("매봉");
    addStation("양재");
    addStation("양재시민의숲");
}

const addLineToEmptyLocalStorage = () => {
    const allLines = [
        new Line("2호선", "교대", "역삼"),
        new Line("3호선", "교대", "매봉"),
        new Line("신분당선", "강남", "양재시민의숲")
    ];

    // const line2 = [
    //     new Line("교대", 2, 3),
    //     new Line("강남", 2, 3),
    //     new Line("역삼", 0, 0)
    // ];
    
    // const line3 = [
    //     new Line("교대", 2, 3),
    //     new Line("남부터미널", 6, 5),
    //     new Line("양재", 1, 1),
    //     new Line("매봉", 0, 0)
    // ];
    
    // const lineNew = [
    //     new Line("강남", 2, 8),
    //     new Line("양재", 10, 3),
    //     new Line("양재시민의숲", 0, 0)
    // ];

    localStorage.setItem(constants.LOCAL_STORAGE_KEY_ALLLINE, JSON.stringify(allLines));
    // localStorage.setItem(constants.LOCAL_STORAGE_KEY_LINE2, JSON.stringify(line2));
    // localStorage.setItem(constants.LOCAL_STORAGE_KEY_LINE3, JSON.stringify(line3));
    // localStorage.setItem(constants.LOCAL_STORAGE_KEY_LINENEW, JSON.stringify(lineNew));
}

export {setInitialState};