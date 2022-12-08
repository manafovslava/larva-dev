import { printTime } from '../utils/print-time.helper.js'

export const runTimeoutClock = () => {
   printTime();
   setTimeout(runTimeoutClock, 1000);
}
