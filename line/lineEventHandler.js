// Here, we handle all the events happening when
// 2. 노선 관리 button is clicked.

import {addLinePreliminaryWork, deleteLine} from "./lineAddRemove.js"
import {optionTagUpdate, lineTableUpdate} from "./lineInit.js"

export default class lineEventHandler {
    constructor() {
        this.init();
        this.setLineAddBtnListener();
        this.setLineDeleteBtnListener();
    }

    init() {
        optionTagUpdate();
        lineTableUpdate();
    }

    setLineAddBtnListener() {
        const lineAddBtn = document.getElementById("line-add-button");
        lineAddBtn.addEventListener("click", addLinePreliminaryWork);
    }

    setLineDeleteBtnListener() {
        const lineDeleteBtns = document.querySelectorAll("#line-status-table");
        lineDeleteBtns.forEach(btn => btn.addEventListener("click", deleteLine));
    }

}
