// Here, we handle all the events happening when
// 1. 역 관리 button is clicked.

import {addStationPreliminaryWork, deleteStation} from "./stationAddRemove.js"
import {loadLocalStorageData} from "./stationInit.js"

export default class stationEventHandler {
    constructor() {
        this.init();
        this.setStationAddBtnListener();
        this.setStationDeleteBtnListener();
    }

    init() {
        loadLocalStorageData();
    }

    setStationAddBtnListener() {
        const stationAddBtn = document.getElementById("station-add-button");
        stationAddBtn.addEventListener("click", addStationPreliminaryWork);
    }

    setStationDeleteBtnListener() {
        const stationDeleteBtns = document.querySelectorAll("#station-name-table");
        stationDeleteBtns.forEach(btn => btn.addEventListener("click", deleteStation))
    }
}