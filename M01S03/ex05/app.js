var person = {
  name: 'Dobre',
  surname: 'Florentina',
  age: 24,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  // se porneste de la 0 numerotarea html-0, js-1 si css-2
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  'Ma numesc xxx yyy si stiu html si css. Foloseste notatia cu paranteze patrate',
);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.warn(
  'Afiseaza propozitia “Sunt xxx si acum invat JavaScript.” Nu folosi valoarea din arrayul de skills.',
);

console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

console.warn('');

console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ' si ' +
    person.friends[2].name +
    '.',
);
