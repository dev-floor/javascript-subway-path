const STATIONS = 'STATIONS';

export default function stationStorage() {
  const getStation = () => {
    let stations = JSON.parse(localStorage.getItem(STATIONS));
    return stations;
  }
  
  const setStation = (stations) => {
    localStorage.setItem(STATIONS, JSON.stringify(stations));
  }

  return {
    getStation,
    setStation
  }
};

export {stationStorage, STATIONS};