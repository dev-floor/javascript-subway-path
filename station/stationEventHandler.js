// Here, we handle all the events happening when
// 1. 역 관리 button is clicked.

import {addStation, deleteStation} from "./stationAddRemove.js"

export default class stationEventHandler {
    constructor() {
        this.setStationAddBtnListener();
        this.setStationDeleteBtnListener();
    }

    setStationAddBtnListener() {
        const stationAddBtn = document.getElementById("station-add-button");
        stationAddBtn.addEventListener("click", addStation);
    }

    setStationDeleteBtnListener() {
        const stationDeleteBtns = document.querySelectorAll("#station-name-table  button");
        stationDeleteBtns.forEach(btn => btn.addEventListener("click", deleteStation))
    }
}