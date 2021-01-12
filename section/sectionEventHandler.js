import {sectionControlBtnUpdate} from "./sectionInit.js"
import {sectionControlPreliminaryWork, addSection} from "./sectionAddRemove.js"

export default class sectionEventHandler {
    constructor() {
        this.init()
        this.setSectionControlBtnListener();
    }

    init() {
        // section control btn pop up.
        sectionControlBtnUpdate();
    }

    setSectionControlBtnListener() {
        const selectedSectionForControl = document.querySelectorAll(".section-line-menu-button-control");
        selectedSectionForControl.forEach(btn => btn.addEventListener(("click"), sectionControlPreliminaryWork));
    }

    setSectionAddBtnListner() {
        const sectionAddBtn = document.querySelector("#section-add-button");
        sectionAddBtn.addEventListener("click", addSection);
    }

    setLineDeleteBtnListener() {

    }

}
