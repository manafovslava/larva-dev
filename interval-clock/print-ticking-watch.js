import { printTime } from '../utils/print-time.helper.js'

export const runIntervalClock = () => { 
   setInterval(printTime, 1000);
};
