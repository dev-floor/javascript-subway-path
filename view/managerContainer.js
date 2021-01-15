import { constants } from "../constantValues/constants.js";

const stationManager = document.getElementById("station-manager");
const lineManager = document.getElementById("line-manager");
const sectionManager = document.getElementById("section-manager");
const mapPrintManager = document.getElementById("map-print-manager");
const findPathManager = document.getElementById("find-path-manager");

const stationManagerBtn = document.getElementById("station-manager-button");
const lineManagerBtn = document.getElementById("line-manager-button");
const sectionManagerBtn = document.getElementById("section-manager-button");
const mapPrintManagerBtn = document.getElementById("map-print-manager-button");
const findPathManagerBtn = document.getElementById("find-path-manager-button");

const makeAllHidden = () => {
    stationManager.className = "hidden";
    lineManager.className = "hidden";
    sectionManager.className = "hidden";
    mapPrintManager.className = "hidden";
    findPathManager.className = "hidden";
    stationManagerBtn.classList.remove("chosen");
    lineManagerBtn.classList.remove("chosen");
    sectionManagerBtn.classList.remove("chosen");
    mapPrintManagerBtn.classList.remove("chosen");
    findPathManagerBtn.classList.remove("chosen");
}

const showThisOnly = (e) => {
    makeAllHidden();
    e.target.className = "chosen";
    
    const selectedId = e.target.id.slice(0, e.target.id.length - constants.MANAGER_BUTTON_STRING_LENGTH);
    document.getElementById(selectedId).className = "show";
}

const keyInput = () => {
    stationManagerBtn.addEventListener("click", showThisOnly);
    lineManagerBtn.addEventListener("click", showThisOnly);
    sectionManagerBtn.addEventListener("click", showThisOnly);
    mapPrintManagerBtn.addEventListener("click", showThisOnly);
    findPathManagerBtn.addEventListener("click", showThisOnly);
}

export {makeAllHidden, keyInput};