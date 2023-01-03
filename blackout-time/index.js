import { printBlackoutTime } from './print-blackout-time.js';

printBlackoutTime(new Date());
console.log('\n');

try {
    printBlackoutTime(undefined);
} catch (e) {
    console.log(e.toString() + '\n');
}

printBlackoutTime(new Date('2022-12'));
printBlackoutTime(new Date('2022-12-02'));
printBlackoutTime(new Date('2022.12.03'));
printBlackoutTime(new Date(2022, 12, 4));
printBlackoutTime(new Date('2022-12-05'));
printBlackoutTime(new Date('2022-12-06'));
printBlackoutTime(new Date('2022-12-07'));
printBlackoutTime(new Date('2022-12-08'));
printBlackoutTime(new Date('2022-12-09'));
printBlackoutTime(new Date('2022-12-10'));
