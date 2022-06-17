function calculateRectangleArea(L, l) {
  return L * l;
}

console.warn(
  'Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3',
);

const Square = calculateRectangleArea(4, 3);
console.log(Square);

console.warn(
  'Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.',
);

const Square01 = calculateRectangleArea(5, 3);
const Square02 = calculateRectangleArea(3, 2);
console.log(Square01);
console.log(Square02);

console.warn(
  'Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.',
);

const squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);

console.warn(
  'Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile.',
);

const Square1 = calculateRectangleArea(15, 31);
const Square2 = calculateRectangleArea(8, 9);
const Square3 = calculateRectangleArea(10, 5);
const total = Square1 + Square2 + Square3;
console.log(total);

console.warn(
  'Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.',
);

// anothersquare

const anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);

console.warn(
  'Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9',
);

console.log(calculateRectangleArea(12, 9));
