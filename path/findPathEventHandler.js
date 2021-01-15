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