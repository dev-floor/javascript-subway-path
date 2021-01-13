import {message} from "../constantValues/message.js"
import {sectionOptionTagUpdate, sectionTableUpdate} from "./sectionInit.js";
import Section from "./sectionInit.js";

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
             } else if(sectionInfo.station === upper && index == locatStorageEachLineDataArray.length - 1) {
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
        
}}

export {sectionControlPreliminaryWork, addSection, deleteSection};