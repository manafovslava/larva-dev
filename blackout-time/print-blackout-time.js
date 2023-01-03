import { DateTime } from 'luxon';
import * as fs from 'fs';

const d = fs.readFileSync('./blackout-time/blackouts.json', 'utf8');

const arry = JSON.parse(d);

const array = arry.arr


export const printBlackoutTime = (date) => {
   if (!(date instanceof Date)) {
       throw new Error(
           `Invalid date: ${date}. Unable to print blackout time. Passed 'date' must be an instance of 'Date' class`
       );
   }

   const formatedDate = formatDate(date);

   const header = formatedDate === formatDate(new Date())
       ? `Today: ${formatedDate}, blackouts are:`
       : `Blackouts on ${formatedDate}:`;

   const body = date.getDate() % array.length === 1
       ? '00:00 - 02:00\n06:00 - 08:00\n12:00 - 14:00\n18:00 - 20:00'
       : date.getDate() % array.length === 2 ? '04:00 - 06:00\n10:00 - 12:00\n16:00 - 18:00\n22:00 - 24:00'
       : '02:00 - 04:00\n08:00 - 10:00\n14:00 - 16:00\n20:00 - 22:00';

   console.log(header + '\n' + body + '\n');
};

const formatDate = (date) => DateTime.fromJSDate(date).toFormat('dd.MM.yyyy');
