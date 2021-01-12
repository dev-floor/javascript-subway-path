const sectionControlPreliminaryWork = (event) => {
    if(event.target.matches(".section-line-menu-button")){
        const pickedLine = event.target.innerHTML;
        const sectionSelectedScreen = document.querySelector(".section-select-screen");
        const sectionSelectedTitle = document.querySelector("#selected-line");

        sectionSelectedScreen.classList.remove("hidden");
        sectionSelectedTitle.innerHTML = pickedLine;

        sectionOptionTagUpdate(pickedLine);
    }
}

const sectionOptionTagUpdate = (line) => {
    const localStorageEachLineData = localStorage.getItem(line);

    const upperStationSelect = document.querySelector("#section-start-station-selector");
    const lowerStationSelect = document.querySelector("#section-end-station-selector");

    upperStationSelect.innerHTML = "";
    lowerStationSelect.innerHTML = "";
    
    if(localStorageEachLineData) {
        const localStorageEachLineDataArray = JSON.parse(localStorageEachLineData);
        localStorageEachLineDataArray.forEach(stationInfo => {
            upperStationSelect.innerHTML += `<option>${stationInfo.station}</option>`;
            lowerStationSelect.innerHTML += `<option>${stationInfo.station}</option>`;
        })
    }
}

export {sectionControlPreliminaryWork};