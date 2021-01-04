import {message} from "../message.js"

const addStation = () => {
    const userInputStation = document.querySelector("#station-name-input").value;

    if(userInputStationValidation(userInputStation)) {
        addStationToList(userInputStation);
    }
}

const deleteStation = (event) => {
    if(event.target.matches("button")) {
        alert("delete btn pressed");
    }
}

const addStationToList = (inputStation) => {
    // localStorage.setItem("station", inputStation);
    
    const stationList = document.querySelector("#station-name-table tbody");
    stationList.innerHTML += `<tr>
    <td>${inputStation}</td>
    <td><button class = "station-delete-button">삭제</button></td>
  </tr>`;
    
}

const userInputStationValidation = (name) => {
    if(name.length < 2) {
        alert(message.INPUT_STATION_NAME_LESS_THAN_TWO);
        return;
    }


    return true;
    
}

export {addStation, deleteStation};