export default class Line {
  constructor(name){
    this.name = name;
    this.stations = [];
    this.distances = [];
    this.times = [];
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

  addDistances(distance) {
    this.distances.push(distance);
  }

  addTimes(times) {
    this.times.push(times);
  }
}

export{Line};