import { getCircleArea } from './getCircleArea.js';

const radiuses = [
  5,
  0,
  Math.pow(8 / Math.PI, 0.5),
  -1,
  NaN,
  'radius',
  null,
  undefined,
  [],
  {},
  1,
  3,
  -3,
];

radiuses.forEach((radius) => {
  try { 
    console.log(`For a radius of ${radius}, the area of ​​a circle is ${getCircleArea(radius)}`)
  } catch (error) {
    console.log(error.toString());
  }
})
