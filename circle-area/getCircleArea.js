export const getCircleArea = (r) => {
  if (Number.isNaN(r)) {
    throw Error;
  }
  if (typeof r !== 'number' && !isNaN(r)) {
    throw Error; 
  }
  if (r < 0 ) {
    throw Error;
  } else {
    return Math.PI * Math.pow(r, 2);
  }
}
