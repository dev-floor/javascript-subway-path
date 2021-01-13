import {sectionControlBtnUpdate} from "./sectionInit.js"
import {sectionControlPreliminaryWork, addSection, deleteSection} from "./sectionAddRemove.js"

export default class sectionEventHandler {
    constructor() {
        this.init()
        this.setSectionControlBtnListener();
        this.setSectionAddBtnListner();
        this.setSectionDeleteBtnListener();
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

    setSectionDeleteBtnListener() {
        const sectionDeleteBtn = document.querySelectorAll("#section-status-table");
        sectionDeleteBtn.forEach(btn => btn.addEventListener("click", deleteSection))
    }

}
