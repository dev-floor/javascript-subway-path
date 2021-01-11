// This class handles all the buttons.

import stationEventHandler from "../station/stationEventHandler.js";
import lineEventHandler from "../line/lineEventHandler.js";
import sectionEventHandler from "../section/sectionEventHandler.js";
import mapPrintEventHandler from "../map/mapPrintEventHandler.js";

export default class controlAllBtns {
    constructor() {
        this.setStationEventListner();
        this.setLineEventListener();
        this.setSectionEventListener();
        this.setMapPrintEventListener();
     }

     setStationEventListner() {
        new stationEventHandler();
     }

     setLineEventListener() {
        new lineEventHandler();
     }

     setSectionEventListener() {
        new sectionEventHandler();
     }

     setMapPrintEventListener() { 
        new mapPrintEventHandler();
     }
}