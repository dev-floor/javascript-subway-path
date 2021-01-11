import {printAllInfos} from "./mapPrint.js";

export default class mapPrintEventHandler {
    constructor() {
        this.setMapPrintBtnListener();
    }

    setMapPrintBtnListener() {
        const mapPrintBtn = document.getElementById("map-print-manager-button");
        mapPrintBtn.addEventListener("click", printAllInfos)
    }
}