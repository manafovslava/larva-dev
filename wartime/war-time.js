const today = new Date(Date.now());
let d = today.getDate();
let m = today.getMonth();
m += 1;
let y = today.getFullYear();
const warDate = (d + "." + m + "." + y)

function checkPair(d) {
  let message;

  if (d % 2 === 0) { 
    message = `Today: ${warDate}, blackout during these hours: 
    02:00 - 04:00
    10:00 - 12:00
    18:00 - 20:00`;
  } else {
    message = `Today: ${warDate}, blackout during these hours:
    06:00 - 08:00
    14:00 - 16:00
    22:00 - 00:00`;
  }

  return message;
}
console.log(checkPair(d));
