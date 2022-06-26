function calculateSurface(L, l) {
  const argumentsCount = arguments.length;

  if (argumentsCount === 2) {
    return L * l;
  }
  if (argumentsCount === 1) {
    return L ** 2;
  }
  if (argumentsCount === 0) {
    return L ** 3;
  }
}

const calculateSquareSurface = (length) => {
  const surface = calculateSurface(length);

  return surface;
};

const calculateRectangleSurface = (length, width) => {
  const surface = calculateSurface(length, width);

  return surface;
};

const calculateParallelipipedSurface = (length, width, length1) => {
  const surface = calculateSurface(length, width, length1);

  return surface;
};

switch (calculateSurface) {
  case 'square':
    console.log(calculateSquareSurface(2));
    break;

  case 'rectangle':
    console.log(calculateRectangleSurface(6, 7));
    break;

  case 'parallelipiped':
    console.log(calculateParallelipipedSurface(20, 15, 5));
    break;

  default:
    console.log('Nu ai introdus corect');
}

function calculateCircleArea(r) {
  const surface = 2 * Math.PI * r;

  return surface;
}

const circle = calculateCircleArea(2);
const circle01 = calculateCircleArea(16);
const circle02 = calculateCircleArea(20);
// const circle02 = calculateCircleArea(128) = 804.247719318987;

console.log(circle);
console.log(circle01);
console.log(circle02);

const pet = {
  getName: function () {
    return 'Tomitsa';
  },
  getSpecies: function () {
    return 'Cat';
  },
  getAge: function () {
    return 7;
  },
};

console.warn(
  `Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”`,
);

const petName = pet.getName();
const species = pet.getSpecies();
const age = pet.getAge();

console.log(`${petName} este ${species} si are ${age} ani.`);

console.warn(
  `Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”`,
);

const petAge = 14 - pet.getAge();

console.log(`Animalul meu are ${petAge} ani.`);
