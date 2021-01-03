import {message} from "../message.js"

const addStation = () => {
    const userInputStation = document.querySelector("#station-name-input").value;
    
    userInputStationValidation(userInputStation);
}

const deleteStation = () => {
    alert("delete btn pressed");
}

const userInputStationValidation = (name) => {
    if(name.length < 2) {
        alert(message.INPUT_STATION_NAME_LESS_THAN_TWO);
        return;
    }

    // 중복검사
}

export {addStation, deleteStation};