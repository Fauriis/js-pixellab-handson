var person = {
  name: 'Dobre',
  surname: 'Flori',
  age: 24,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
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
  'Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.',
);

person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(' In mod similar, afiseaza skillurile care contin litera a. ');

person.skills.forEach(function (skill) {
  if (skill.includes('a') === true) {
    console.log(skill);
  }
});

console.warn(
  'Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."',
);

var message = 'Prietenii mei se numesc ';

person.friends.forEach(function (friend, index) {
  var friend = person.friends[index];
  var punctuation = ', ';
  if (index === person.friends.length - 1) {
    var punctuation = '.';
  }
  message = message + friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);

console.warn(
  'Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.',
);

var sumAge = 0;
person.friends.forEach(function (friend, index) {
  var friend = person.friends[index];

  sumAge += friend.age;

  if (sumAge >= 30) {
    console.log(sumAge.toString());
  }
});

console.warn(
  ' Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "',
);

var message = '';

person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  // v2 concatenare
  message +=
    ' Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani.';
});

console.log(message.trim());

console.warn(`Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse`);

person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(
  'Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.',
);

person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(' In mod similar, afiseaza skillurile care nu incep cu j.');

person.skills.forEach(function (skill) {
  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
});

console.warn(
  ' Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."',
);
var message = 'Numele mari ale prietenilor mei sunt ';

person.friends.forEach(function (friend, index) {
  var friend = person.friends[index];
  var punctuation = ', ';

  if (index === person.friends.length - 1) {
    punctuation = '.';
  }

  message = message + friend.surname + punctuation;
});

console.log(message);

console.warn(
  ' Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends ',
);

var sumAge = 0;
person.friends.forEach(function (friend, index) {
  var friend = person.friends[index];

  sumAge += friend.age;
});
console.log(sumAge.toString());

console.warn(
  ' Folosind forEach, afiseaza suma anilor de nastere a persoanelor ',
);

var sumYear = 0;
person.friends.forEach(function (friend, index) {
  var friend = person.friends[index];
  var age = 2022 - friend.age.toString();

  sumYear += age;
});
console.log(sumYear.toString());

console.warn(
  ' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.',
);

person.friends.forEach(function (friend, index) {
  var friend = person.friends[index];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(ageDiff);
});

console.warn(
  'Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.',
);

person.friends
  .slice()
  .reverse()
  .forEach(function (friend) {
    console.log(friend.name + ' ' + friend.surname);
  });

console.warn(
  ' Folosind forEach, afiseaza suma anilor de nastere ai persoanelor care au varsta impara. ',
);

var sumYear = 0;
person.friends.forEach(function (friend, index) {
  var friend = person.friends[index];

  if (friend.age % 2 === 1) {
    var birthYear = 2022 - friend.age;
    sumYear += birthYear;
    console.log(sumYear.toString());
  }
});
