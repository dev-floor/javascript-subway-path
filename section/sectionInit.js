import {constants} from "../constantValues/constants.js"

export default class Section {
    constructor(station, distance, duration) {
        this.station = station;
        this.distance = distance;
        this.duration = duration;
    }
}

const sectionControlBtnUpdate = () => {
    const localStorageData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);
    const sectionControlBtns = document.querySelector(".section-line-menu-button-control");

    if(localStorageData) {
        const localStorageArray = JSON.parse(localStorageData);

        sectionControlBtns.innerHTML = "";
        localStorageArray.forEach( lineInfo => sectionControlBtns.innerHTML += `<button class="section-line-menu-button">${lineInfo.line}</button> ` );
    }
}

export {sectionControlBtnUpdate};