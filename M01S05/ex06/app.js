const person = {
  getName: function () {
    return 'Dobre Flori';
  },
  getAge: function () {
    return 24;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  // return person.getName
  // return person.getAge

  return person[methodName]();
}

console.warn(
  `Folosind accesorul salveaza numele mic al pers intr o variabila si foloseste l in prop: Eu sunt xx`,
);

const personFirstName = accessor('Name');

console.log(`Eu sunt ${personFirstName}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);

const personbirthYear = 2022 - accessor('Age');

console.log(`${personbirthYear}`);

console.warn(
  'Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”',
);

const personName = accessor('Name');
const personAge = accessor('Age');
const personYear = 2022 - accessor('Age');

console.log(
  `Ma numesc ${personName}, am ${personAge} ani si m-am nascut in anul ${personYear}.`,
);

console.warn('Folosind accesorul afiseaza numele persoanei.');

const nameperson = accessor('Name');

console.log(`${nameperson}`);

console.warn('Afiseaza varsta persoanei.');

const ageperson = accessor('Age');

console.log(`${ageperson}`);

console.warn(
  'Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”',
);

const yearperson = 2022 - accessor('Age');

console.log(`M-am nascut in ${yearperson}.`);

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);

const personSurname = accessor('Name');
const ageage = accessor('Age');

console.log(`Ma numesc ${personSurname} si am ${ageage} ani!`);
