import {keyInput, makeAllHidden} from "../view/managerContainer.js"
import {} from "./initState.js"

export default class SubwayLineControl {
    constructor() {
        this.init();
    }

    init() {
        // initialize states.
        // only 4 buttons have to be shown.

        makeAllHidden();
        this.waitForKeyInput();
    }

    waitForKeyInput() {
        keyInput();
    }
}

new SubwayLineControl();