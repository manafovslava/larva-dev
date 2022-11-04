import { getCircleArea } from './getCircleArea.js';

const radius = [
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
];

for (let i = 0; i < radius.length; i++) {
  console.log(`For a radius of ${radius[i]}, the area of ​​a circle is ${getCircleArea(radius[i])}`)
}
