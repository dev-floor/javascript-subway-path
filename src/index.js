import {subwayApp} from './subwayApp.js'
import {stationInitialize} from './init.js'

const app = document.querySelector('#app');

stationInitialize();
subwayApp(app);