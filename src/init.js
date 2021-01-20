import {stationStorage, STATIONS} from './storage/stationStorage.js';
import {Line} from './object/line.js'
import {lineStorage} from './storage/lineStorage.js';
import Station from './object/station.js';

const stationInitialize = () => {
  let initStationValues = ['교대', '강남', '역삼', '남부터미널', '양재', '양재시민의숲', '매봉'];
  let stations = [];
  initStationValues.forEach((station) => {
    stations.push(new Station(station));
  })
  stationStorage().setStation(stations);
}

const lineInitialize = () => {
  let line1 = new Line('2호선');
  let line2 = new Line('3호선');
  let line3 = new Line('신분당선');

  // -- 노선에 대한 초기값 세팅
  line1.addStations('교대');
  line1.addStations('강남');
  line1.addStations('역삼');
  
  line2.addStations('교대');
  line2.addStations('남부터미널');
  line2.addStations('양재');
  line2.addStations('매봉');
  
  line3.addStations('강남');
  line3.addStations('양재');
  line3.addStations('양재시민의숲');

  line1.addDistances(2); line1.addDistances(2);
  line2.addDistances(3); line2.addDistances(6); line2.addDistances(1);
  line3.addDistances(2); line3.addDistances(10);

  line1.addTimes(3); line1.addTimes(3);
  line2.addTimes(2); line2.addTimes(5); line2.addTimes(1);
  line3.addTimes(8); line3.addTimes(3);
  // ---

  let lines = [line1, line2, line3];
  lineStorage().setLine(lines);
}

export{stationInitialize, lineInitialize};
