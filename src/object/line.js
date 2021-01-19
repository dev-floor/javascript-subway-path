export default class Line {
  constructor(name){
    this.name = name;
    this.stations = [];
    this.distances = ['a',1,4];
    this.times = [];
    this.setStartStation();
    this.setEndStation();
  }

  setStartStation() {
    return this.distances[0];
  }

  setEndStation() {
    return this.distances[this.distances.length]
  }
  
  addStations(station) {
    this.stations.push(station);
  }

  addDistances() {

  }

  addTimes() {

  }
}

export{Line};