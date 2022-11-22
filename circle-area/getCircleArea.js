export const getCircleArea = (radius) => {
  if (typeof radius !== 'number' || Number.isNaN(radius) || radius < 0) {
    throw new Error(`Invalid radius: ${radius}`);
  }

  return Math.PI * Math.pow(radius, 2);
}
