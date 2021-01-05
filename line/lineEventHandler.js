// Here, we handle all the events happening when
// 2. 노선 관리 button is clicked.

import {addLinePreliminaryWork} from "./lineAddRemove.js"

export default class lineEventHandler {
    constructor() {
        this.setLineAddBtnListener();
    }

    setLineAddBtnListener() {
        const lineAddBtn = document.getElementById("line-add-button");
        lineAddBtn.addEventListener("click", addLinePreliminaryWork);
    }

}
