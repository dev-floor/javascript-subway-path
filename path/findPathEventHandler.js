import {findPathPreliminaryWork} from "./findPath.js";

export default class findPathEventHandler {
    constructor() {
        this.setfindPathBtnListener();
    }

    setfindPathBtnListener() {
        const findPathBtn = document.getElementById("search-button");
        findPathBtn.addEventListener("click", findPathPreliminaryWork);
    }
}