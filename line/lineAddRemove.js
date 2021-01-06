import {message} from "../constantValues/message.js"
import {constants} from "../constantValues/constants.js"

const addLinePreliminaryWork  = () => {
    const userInputLine = document.querySelector("#line-name-input").value;

    const upperStation = document.querySelector("#line-start-station-selector").value;
    const lowerStation = document.querySelector("#line-end-station-selector").value;

    const distance = document.querySelector("#line-distance").value;
    const duration = document.querySelector("#line-time").value;

    userInputLineValidation(userInputLine) && upperLowerLineValidation(upperStation, lowerStation) && distanceDurationValidation(distance, duration) 
    ? addLine(userInputLine, upperStation, lowerStation, distance, duration) : 0;
}

const userInputLineValidation = (line) => {
    const unit = line.substr(-2);
    if(unit !== constants.LINE_NAME_FORMAT) {
        alert(message.LINE_NAME_FORMAT_INAPPROPRIATE);
        return ;
    }
}

const upperLowerLineValidation = (upper, lower) => { upper !== lower ? 1 : 0 }

const distanceDurationValidation = (distance, duration) => { (distance > 0 && duration > 0) ? 1 : 0 }

const addLine = (line, upper, lower, distance, time) => {

}

const deleteLine = (e) => {

}

export {addLinePreliminaryWork, deleteLine}