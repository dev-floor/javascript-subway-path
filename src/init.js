import {stationStorage, STATIONS} from './localStorage.js'

const stationInitialize = () => {
  let stations = ['교대', '강남', '역삼', '남부터미널', '양재', '양재시민의숲', '매봉'];
  stationStorage().setStation(stations);
}

export{stationInitialize};
