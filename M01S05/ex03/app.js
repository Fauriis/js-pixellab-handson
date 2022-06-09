const calculateRectangleArea = function (L, l) {
  const surface = L * l;

  return surface;
};

console.warn('Prima cerinta');

const yield = 25;

const field01Surface = calculateRectangleArea(100, 250);
const field02Surface = calculateRectangleArea(350, 200);

const field01Yield = yield * field01Surface;
const field02Yield = yield * field02Surface;

console.log(Math.abs(field02Yield - field01Yield));

console.warn('Cerinta doi');

const beerYield = 2.5 / 10;
const field03Surface = calculateRectangleArea(400, 370);
const field03Yield = yield * field03Surface;

console.log(beerYield * field03Yield);
