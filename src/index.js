import controlAllBtns from "../controlTower/eventHandler.js";
import {keyInput, makeAllHidden} from "../view/managerContainer.js"
import {setInitialState} from "./initState.js"

export default class SubwayLineControl {
    constructor() {
        this.init();
    }

    init() {
        // initialize states.
        setInitialState();

        // only 4 buttons have to be shown.
        makeAllHidden();

        // wait for click event on 4 buttons.
        this.waitForKeyInput();
    }

    waitForKeyInput() {
        keyInput();
    }
}

new SubwayLineControl();
new controlAllBtns();