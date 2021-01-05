import {message} from "../message.js"
import {constants} from "../constants.js"

const addLinePreliminaryWork  = () => {
    const userInputLine = document.querySelector("#line-name-input").value;

    if(userInputLineValidation(userInputLine)) {
        addLine(userInputLine);
    }
}

const userInputLineValidation = (line) => {

}

const addLine = (line) => {

}

export {addLinePreliminaryWork}