import {subwayApp} from './subwayApp.js'
import {stationInitialize, lineInitialize} from './init.js'

const app = document.querySelector('#app');

stationInitialize();
lineInitialize();
subwayApp(app);