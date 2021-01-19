import {stationStorage, STATIONS} from './storage/stationStorage.js';
import {Line} from './object/line.js'
import {lineStorage} from './storage/lineStorage.js';

const stationInitialize = () => {
  let stations = ['교대', '강남', '역삼', '남부터미널', '양재', '양재시민의숲', '매봉'];
  stationStorage().setStation(stations);
};

const lineInitialize = () => {
  let line1 = new Line('2호선');
  let line2 = new Line('3호선');
  let line3 = new Line('신분당선');

  line1.addStations(['교대', '강남', '역삼']);
  line2.addStations(['교대', '남부터미널', '양재', '매봉']);
  line3.addStations(['강남', '양재', '양재시민의숲']);

  let lines = [line1, line2, line3];
  lineStorage().setLine(lines);
  let li = lineStorage().getLine();
  
  lines.forEach((i) => {
    console.log(typeof(i))
    console.log(i.setStartStation())
  })

};

export{stationInitialize, lineInitialize};
