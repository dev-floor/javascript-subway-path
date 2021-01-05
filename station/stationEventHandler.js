// Here, we handle all the events happening when
// 1. 역 관리 button is clicked.

import {addStationPreliminaryWork, deleteStation, loadLocalStorageData} from "./stationAddRemove.js"

export default class stationEventHandler {
    constructor() {
        this.setStationAddBtnListener();
        this.setStationDeleteBtnListener();
        this.setRefreshListener();
    }

    setStationAddBtnListener() {
        const stationAddBtn = document.getElementById("station-add-button");
        stationAddBtn.addEventListener("click", addStationPreliminaryWork);
    }

    setStationDeleteBtnListener() {
        const stationDeleteBtns = document.querySelectorAll("#station-name-table");
        stationDeleteBtns.forEach(btn => btn.addEventListener("click", deleteStation))
    }

    setRefreshListener() {
        document.addEventListener("DOMContentLoaded", loadLocalStorageData)
    }
}