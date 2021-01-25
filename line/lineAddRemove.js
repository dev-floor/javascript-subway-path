import {message} from "../constantValues/message.js"
import {constants} from "../constantValues/constants.js"
import Line, {lineTableUpdate} from "./lineInit.js";
import Section, {sectionControlBtnUpdate} from "../section/sectionInit.js";
import {allSectionInfoSave} from "../path/findInit.js";

const addLinePreliminaryWork  = () => {
    const userInputLine = document.querySelector("#line-name-input").value;

    const upperStation = document.querySelector("#line-start-station-selector").value;
    const lowerStation = document.querySelector("#line-end-station-selector").value;

    const distance = parseFloat(document.querySelector("#line-distance").value);
    const duration = parseFloat(document.querySelector("#line-time").value);

    (userInputLineFormatValidation(userInputLine) && upperLowerLineValidation(upperStation, lowerStation) && distanceDurationValidation(distance, duration) && userInputLineOverlapValidation(userInputLine)) ? addLine(userInputLine, upperStation, lowerStation, distance, duration) : 0;
}

const userInputLineFormatValidation = (line) => (line.substr(-constants.LINE_NAME_FORMAT.length) !== constants.LINE_NAME_FORMAT) ? alert(message.LINE_NAME_FORMAT_INAPPROPRIATE) : true ;

const userInputLineOverlapValidation = (line) => {
    const localStorageAllLineData = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);

    if(localStorageAllLineData) {
        const localStorageAllLineDataArray = JSON.parse(localStorageAllLineData);

        // localStorageAllLineDataArray.every((lineInfo) => lineInfo.line !== line) === true ? true : false; 이거랑,
        // judge === true ? true : false; --> 이거 안됨. 왜? 도대체? 너무 궁금.

        let judge = localStorageAllLineDataArray.every((lineInfo) => lineInfo.line !== line);
        if(judge === true) {
            return true;
        } else {
            alert(message.INPUT_LINE_NAME_OVERLAPPED);
            return false;
        }
    }
}

const upperLowerLineValidation = (upper, lower) => upper === lower ? alert(message.UPPER_LOWER_OVERLAPPED) : 1 ;

const distanceDurationValidation = (distance, duration) => (distance > 0 && duration > 0) ? 1 : alert(message.INPUT_DISTANCE_DURAION_LESS_THAN_ZERO) ;

const addLine = (line, upper, lower, distance, time) => {
    // localStorage _ all Line 등록
    const localStorageDataAllLine = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);
    const localStorageDataAllLineArray = JSON.parse(localStorageDataAllLine);
    localStorageDataAllLineArray.push(new Line(line, upper, lower));
    localStorage.setItem(constants.LOCAL_STORAGE_KEY_ALLLINE, JSON.stringify(localStorageDataAllLineArray));

    // localStorage _ each Line 등록
    const addedLine = [
        new Section(upper, distance, time),
        new Section(lower, 0, 0)
    ];

    localStorage.setItem(line, JSON.stringify(addedLine));
    
    lineTableUpdate();
    sectionControlBtnUpdate();
    allSectionInfoSave();
}

const deleteLine = (event) => {
    if (event.target.matches(".line-delete-button") && confirm(message.DELETE_LINE_BTN_PRESSED)) {
        // remove from table.
        const removeTarget = event.target.closest(constants.TABLE_TARGET);
        removeTarget.remove();

        // delete from localStorage(allLine)
        const removeLineName = removeTarget.childNodes[constants.LINE_VALUE_CHILDNODE_INDEX].innerHTML;

        const localStorageDataAllLine = localStorage.getItem(constants.LOCAL_STORAGE_KEY_ALLLINE);
        const localStorageDataAllLineArray = JSON.parse(localStorageDataAllLine);
        const removedAfter = localStorageDataAllLineArray.filter(lineInfo => lineInfo.line !== removeLineName);
        localStorage.setItem(constants.LOCAL_STORAGE_KEY_ALLLINE, JSON.stringify(removedAfter));

        // delete from localStorage(individual line)
        localStorage.removeItem(removeLineName);
        
        // line select button update in section tab.
        sectionControlBtnUpdate();
    }
}

export {addLinePreliminaryWork, deleteLine}