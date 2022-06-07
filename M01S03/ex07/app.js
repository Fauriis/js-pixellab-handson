console.log(`
    Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
    Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
    Dragos are si un master in tehnologii internet.
    Dragos este instructor Pixellab si preda JavaScript acolo.
`);

var person = {
  firstName: 'Dobre',
  lastName: 'Florentina',
  email: 'storm@gmail.com',
  difference: 1938,
  birthYear: 74,
  zipCode: '132',
  pets: [
    {
      name: 'Lala',
      petName: 'Lala',
      species: 'fish',
      age: 10,
    },
    {
      name: 'Sisi',
      species: 'bear',
      age: 5,
    },
    {
      name: 'Nana',
      species: 'wolf',
      age: 7,
    },
  ],
};

console.warn(
  'Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. ',
);

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.');

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  'Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”',
);

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  'Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.',
);

console.log((2022 - person.pets[2].age).toString());

console.warn(
  'Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.',
);

console.log((2022 - person.birthYear - person.pets[0].age).toString());

console.warn(
  'Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.',
);

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].petName +
    ' este o diferenta de ' +
    person.difference +
    ' ani.',
);

console.warn(
  'Folosind metoda document.getElementById() afiseaza urmatoarele 5 afirmatii despre obiectul person. ',
);

// var personfirstName = document.getElementById('prop01');
// var personlastName = document.getElementById('prop02');
// var personemail = document.getElementById('prop03');
// var personzipCode = document.getElementById('prop04');
// var personbirthYear = document.getElementById('prop05');
// var elementResult = document.getElementById('result');

// var prop01 = personfirstName.value || 'Dobre';

// result =
//   prop01 +
//   prop01.pets[1] +
//   prop01.pets[2] +
//   prop01[3] +
//   ' locuiesc toti in aceiasi casa.';

// elementResult.innerText = result;

// document.getElementById('prop01').value = personfirstName;
// var elementResult = document.getElementById('result');

// result = prop01;

// elementResult.innerText = result;

var inputperson = document.getElementById('prop01');
var inputpets0 = document.getElementById('prop02');

var prop01 = inputperson.value || 'Dobre';
var prop02 = inputpets0.value || 'fish';

console.log(prop01 + prop02 + '.');

// console.log(
//   person.firstName +
//     ', ' +
//     person.pets[0].species +
//     ', ' +
//     person.pets[1].species +
//     ' si ' +
//     person.pets[2].species +
//     ' ' +
//     'locuiesc toti in aceiasi casa.',
// );

// console.warn(
//   'Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 ',
// );

// console.log((person.pets[0].age - person.pets[2].age).toString());

// console.warn(
//   'Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”',
// );

// console.log(
//   'Ma numesc ' +
//     person.firstName +
//     ' ' +
//     person.lastName +
//     ', m-am nascut in ' +
//     person.birthYear +
//     ' si codul meu postal este: ' +
//     person.zipCode +
//     '.',
// );

// console.warn(
//   'Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. ',
// );

// console.log(
//   'Animalele mele s-au nascut in ' +
//     (2022 - person.pets[0].age).toString() +
//     ', ' +
//     (2022 - person.pets[1].age).toString() +
//     ' respectiv in ' +
//     (2022 - person.pets[2].age).toString() +
//     '.',
// );
