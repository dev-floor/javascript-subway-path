// Here, we handle all the events happening when
// 5. 경로 조회 button is clicked.

import {allSectionInfoSave} from "./findInit.js"
import {findPathPreliminaryWork} from "./findPath.js";

export default class findPathEventHandler {
    constructor() {
        this.init();
        this.setfindPathBtnListener();
    }

    init() {
        allSectionInfoSave();
    }

    setfindPathBtnListener() {
        const findPathBtn = document.getElementById("search-button");
        findPathBtn.addEventListener("click", findPathPreliminaryWork);
    }
}