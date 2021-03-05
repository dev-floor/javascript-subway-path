const STATIONS = 'STATIONS';

export default function stationStorage() {
  const getStation = () => {
    let stations = JSON.parse(localStorage.getItem(STATIONS));
    return stations;
  }
  
  const setStation = (stations) => {
    localStorage.setItem(STATIONS, JSON.stringify(stations));
  }

  const getStationNameArray = () => {
    let stations = JSON.parse(localStorage.getItem(STATIONS));
    let stationNameArray = [];
    stations.forEach((station) => {
      stationNameArray.push(station.name);
    })
    return stationNameArray;
  }

  return {
    getStation,
    setStation,
    getStationNameArray
  }
};

export {stationStorage, STATIONS};