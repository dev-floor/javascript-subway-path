// Here, we handle all the events happening when
// 4. 지하철 노선도 출력 button is clicked.

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