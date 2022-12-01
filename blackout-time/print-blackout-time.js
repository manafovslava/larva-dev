import { DateTime } from 'luxon';

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

    const body = date.getDate() % 2 === 0
        ? '02:00 - 04:00\n10:00 - 12:00\n18:00 - 20:00'
        : '06:00 - 08:00\n14:00 - 16:00\n22:00 - 00:00';

    console.log(header + '\n' + body + '\n');
};

const formatDate = (date) => DateTime.fromJSDate(date).toFormat('dd.MM.yyyy');
