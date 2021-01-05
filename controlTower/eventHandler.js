// This class handles all the buttons.

import stationEventHandler from "../station/stationEventHandler.js"
import lineEventHandler from "../line/lineEventHandler.js"

export default class controlAllBtns {
    constructor() {
        this.setStationEventListner();
        this.setLineEventListener();
        this.setMapPrintEventListener();
     }

     setStationEventListner() {
        new stationEventHandler();
     }

     setLineEventListener() {
        new lineEventHandler();
     }

     setMapPrintEventListener() { 

     }
}