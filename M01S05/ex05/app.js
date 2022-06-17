const person = {
  getName: function () {
    return 'Dobre Flori';
  },
  getAge: () => {
    return 24;
  },
};

console.warn('Afiseaza primul nume al persoanei folosind metoda getName()');

const personName = person.getName();
const personFirstName = personName.split(' ')[0];

console.log(personFirstName);

console.warn(
  'Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.',
);

const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - person.getAge();
console.log(personBirthYear);

console.warn(
  `Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).`,
);

console.log(`'${personBirthYear.toString().slice(-2)}`);

console.warn(`Afiseaza propozita: “Ma numesc xxx si am yy ani!”`);

const personname = person.getName();
const personAge = person.getAge();

console.log(`Ma numesc ${personname} si am ${personAge.toString()} ani.`);

console.warn(`Afiseaza numele intreg al persoanei folosind metoda getName()`);

const persoNamee = person.getName();

console.log(persoNamee);

console.warn(`Afiseaza varsta persoanei folosind metoda getAge()`);

const personnAge = person.getAge();

console.log(personnAge);

console.warn(
  `Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”`,
);

const birthYear = currentYear - person.getAge();
console.log(`M-am nascut in ${birthYear}.`);

console.warn(
  `Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”`,
);

const nameperson = person.getName();
const ageperson = person.getAge();
const year = currentYear - person.getAge();

console.log(
  `Ma numesc ${nameperson} m-am nascut acum ${ageperson} ani in anul ${year}!`,
);
