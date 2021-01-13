import {constants} from "../constantValues/constants.js";
import {message} from "../constantValues/message.js";
import Section, {sectionOptionTagUpdate, sectionTableUpdate} from "./sectionInit.js";
import {lineTableUpdate} from "../line/lineInit.js";

const sectionControlPreliminaryWork = (event) => {
    if(event.target.matches(".section-line-menu-button")){
        const pickedLine = event.target.innerHTML;
        const sectionSelectedScreen = document.querySelector(".section-select-screen");
        const sectionSelectedTitle = document.querySelector("#selected-line");

        sectionSelectedScreen.classList.remove("hidden");
        sectionSelectedTitle.innerHTML = pickedLine;

        sectionOptionTagUpdate(pickedLine);
        sectionTableUpdate(pickedLine);
    }
}

const addSection = (line, upper, lower, distance, duration) => {
    const localStorageEachLineData = localStorage.getItem(line);

    if(localStorageEachLineData) {
        const locatStorageEachLineDataArray = JSON.parse(localStorageEachLineData);
        const newSection = new Section(lower, distance, duration);
        locatStorageEachLineDataArray.forEach((sectionInfo, index) => {
            if(sectionInfo.station === upper && index !== locatStorageEachLineDataArray.length - 1) {
                addSectionLocalStorageManage(locatStorageEachLineDataArray, index, sectionInfo, newSection, distance, duration, 2, 3);
             } else if(sectionInfo.station === upper && index === locatStorageEachLineDataArray.length - 1) {
                addSectionLocalStorageManage(locatStorageEachLineDataArray, index, sectionInfo, newSection, distance, duration, 0, 0);
             }
        })
        localStorage.setItem(line, JSON.stringify(locatStorageEachLineDataArray));
        
        sectionTableUpdate(line);
        sectionOptionTagUpdate(line);
    }
}

const addSectionLocalStorageManage = (locatStorageDataArray, index, sectionInfo, newSection, distance, duration, newDistance, newDuration) => {
    locatStorageDataArray.splice(index + 1, 0, newSection);
    sectionInfo.distance = distance;
    sectionInfo.duration = duration;
    locatStorageDataArray[index + 1].distance = newDistance;
    locatStorageDataArray[index + 1].duration = newDuration;
}

const deleteSection = (event) => {
    if(event.target.matches(".section-delete-button") && confirm(message.DELETE_SECTION_BTN_PRESSED)) {
        // 표에서 삭제, localStorage에서 삭제
        const removeTarget = event.target.closest(constants.TABLE_TARGET);
        removeTarget.remove();

        const currentLine = document.getElementById("selected-line").innerHTML;
        const removeSectionName = removeTarget.childNodes[constants.SECTION_VALUE_CHILDNODE_INDEX].innerHTML;

        removeSectionFromLocalStorage(currentLine, removeSectionName);
        sectionTableUpdate(currentLine);
    }
}

const removeSectionFromLocalStorage = (currentLine, removeSectionName) => {
    const localStorageEachLineData = localStorage.getItem(currentLine);
    const localStorageEachLineDataArray = JSON.parse(localStorageEachLineData);
    localStorageEachLineDataArray.forEach((sectionInfo, index) => {
        if(sectionInfo.station === removeSectionName && index !== localStorageEachLineDataArray.length - 1 && index === 0) {
            localStorageEachLineDataArray.splice(0, 1);
        } else if (sectionInfo.station === removeSectionName && index !== localStorageEachLineDataArray.length - 1 && index !== 0) {
            localStorageEachLineDataArray[index - 1].distance += localStorageEachLineDataArray[index].distance;
            localStorageEachLineDataArray[index - 1].duration += localStorageEachLineDataArray[index].duration;
            localStorageEachLineDataArray.splice(index, 1);
        }
        else if (sectionInfo.station === removeSectionName && index === localStorageEachLineDataArray.length - 1 && index !== 0) {
            localStorageEachLineDataArray[index - 1].distance = 0;
            localStorageEachLineDataArray[index - 1].duration = 0;
            localStorageEachLineDataArray.splice(index, 1);           
        }
    })
    localStorage.setItem(currentLine, JSON.stringify(localStorageEachLineDataArray));
    allLineLocalStorageUpdate(currentLine);
}

const allLineLocalStorageUpdate = (line) => {
    const localStorageAllLineData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);
    const localStorageAllLineDataArray = JSON.parse(localStorageAllLineData);
    const localStorageCurrentLineData = localStorage.getItem(line);
    const localStorageCurrentLineDataArray = JSON.parse(localStorageCurrentLineData);

    const firstLastStation = localStorageCurrentLineDataArray.filter((sectionInfo, index) => index === 0 || index === localStorageCurrentLineDataArray.length - 1 )
    localStorageAllLineDataArray.forEach(lineInfo => lineInfo.line === line ? [lineInfo.upperStation, lineInfo.lowerStation] = [firstLastStation[0].station, firstLastStation[1].station] : 0 )
    localStorage.setItem(constants.LOCAL_STORAGE_KEY_ALLLINE, JSON.stringify(localStorageAllLineDataArray));
    lineTableUpdate();
}

export {sectionControlPreliminaryWork, addSection, deleteSection};