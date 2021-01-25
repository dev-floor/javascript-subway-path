import {constants} from "../constantValues/constants.js";

class sectionInfo {
    constructor(section, distance, duration) {
        this.section = section;
        this.distance = distance;
        this.duration = duration;
    }
}

const allSectionInfoSave = () => {
    let allSectionInfo = [];
    const localStorageAllLineData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);
    const localStorageAllLineDataArray = JSON.parse(localStorageAllLineData);
    localStorageAllLineDataArray.forEach(lineInfo => {
        const localStorageEachLineData = localStorage.getItem(lineInfo.line);
        const localStorageEachLineDataArray = JSON.parse(localStorageEachLineData);
        for(let i = 0 ; i < localStorageEachLineDataArray.length - 1 ; i++) {
            const sectionData = new sectionInfo(localStorageEachLineDataArray[i].station.concat(localStorageEachLineDataArray[i + 1].station), localStorageEachLineDataArray[i].distance, localStorageEachLineDataArray[i].duration);
            const reverseSectionData = new sectionInfo(localStorageEachLineDataArray[i + 1].station.concat(localStorageEachLineDataArray[i].station), localStorageEachLineDataArray[i].distance, localStorageEachLineDataArray[i].duration);
            allSectionInfo.push(sectionData);
            allSectionInfo.push(reverseSectionData);
        }
    })
    localStorage.setItem(constants.LOCAL_STORAGE_KEY_SECTION, JSON.stringify(allSectionInfo));
}

export {allSectionInfoSave};