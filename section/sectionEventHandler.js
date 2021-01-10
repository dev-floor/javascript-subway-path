import {sectionControlBtnUpdate} from "./sectionInit.js"
import {sectionControlPreliminaryWork} from "./sectionAddRemove.js"

export default class sectionEventHandler {
    constructor() {
        this.init()
    }

    init() {
        // section control btn pop up.
        sectionControlBtnUpdate();
    }

    setSectionControlBtnListener() {
        const selectedSectionForControl = document.querySelectorAll(".section-line-menu-button");
        selectedSectionForControl.forEach(btn => btn.addEventListener("click"), sectionControlPreliminaryWork);
    }

    setLineDeleteBtnListener() {

    }

}
