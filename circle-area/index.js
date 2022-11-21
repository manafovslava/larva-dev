import { getCircleArea } from './getCircleArea.js';

const radius = [
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

radius.forEach(element => {
  try {
    getCircleArea(); 
    console.log(`For a radius of ${element}, the area of ​​a circle is ${getCircleArea(element)}`)
  } catch (error) {
    console.error(error);
  }
})
