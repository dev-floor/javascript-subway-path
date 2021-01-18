import {stationStorage, STATIONS} from './storage/stationStorage.js';
import {Line} from './object/line.js'

const stationInitialize = () => {
  let stations = ['교대', '강남', '역삼', '남부터미널', '양재', '양재시민의숲', '매봉'];
  stationStorage().setStation(stations);
};

const lineInitialize = () => {
  let line = new Line('2호선', '[교대, 역삼]', '[2, 2]', '[3, 3]');
  console.log(typeof(line.stations))
  console.log(line.stations)
};

export{stationInitialize, lineInitialize};
