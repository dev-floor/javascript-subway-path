import {sectionOptionTagUpdate, sectionTableUpdate} from "./sectionInit.js"

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

const addSection = () => {
    
}

export {sectionControlPreliminaryWork, addSection};