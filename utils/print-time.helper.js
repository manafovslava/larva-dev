import { DateTime } from 'luxon';

export const printTime = () => {
   console.clear();
   console.log(DateTime.now().toFormat('HH:mm:ss'));
};
