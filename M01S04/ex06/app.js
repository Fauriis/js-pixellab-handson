var person = {
  name: 'Dobre',
  surname: 'Florentina',
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
  'Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.',
);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.length % 2 == 0) {
    console.log(skill);
  }
}

console.warn('In mod similar, afiseaza skillurile care NU incep cu j.');

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
}

console.warn(
  ' Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."',
);

var message = 'Prietenii mei se numesc: ';

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    // ultima iteraie
    punctuation = '.';
  }

  // v1 concatenare/prima varianta
  message = message + friend.name + ' ' + friend.surname + punctuation;
}

console.log(message);

console.warn(
  ' Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.',
);

for (var i = 0; i < person.friends.length; i++) {
  var friend0 = person.friends[0];
  var friend1 = person.friends[1];
  var friend2 = person.friends[2];

  var ageDiff = (friend0.age + friend1.age + friend2.age).toString();

  console.log(ageDiff);

  if (ageDiff >= 30) {
    console.log(ageDiff);
  }
}

console.warn(
  'Folosind un for, afiseaza suma anilor de nastere a persoanelor. ',
);

for (var i = 0; i < person.friends.length; i++) {
  var friend0 = person.friends[0];
  var friend1 = person.friends[1];
  var friend2 = person.friends[2];

  var year = (
    2022 -
    friend0.age +
    (2022 - friend1.age) +
    (2022 - friend2.age)
  ).toString();

  console.log(year);
}

console.warn(
  ' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani. ',
);

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(ageDiff);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}

console.warn(
  ' Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara. ',
);

for (var i = 0; i < person.friends; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  message =
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani.';

  if (friend.age % 2 == 1) {
    console.log(message);
  }
}

console.warn(
  ' Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0. ',
);

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';
  var message = 'Prietenii mei se numesc: ';

  if (i === person.friends.length - 1) {
    // ultima iteraie
    punctuation = '.';
  }

  // v1 concatenare/prima varianta
  message = message + friend.name + ' ' + friend.surname + punctuation;
}

console.log(message);

console.warn(
  'Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana .',
);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  console.log(skill);
}

console.warn(' In mod similar, afiseaza skillurile care incep cu c ');

for (var i = 0; i < person.skills.length; i++) {
  var skills = person.skills[i];

  if (skills.startsWith('c') === true) {
    console.log(skills);
  }
}

console.warn(
  ' Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."',
);

var message = 'Numele de familie ale prietenilor mei sunt: ';

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  message = message + friend.surname + punctuation;
}

console.log(message);

console.warn(
  'Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends ',
);

for (var i = 0; i < person.friends.length; i++) {
  var friend0 = person.friends[0];
  var friend1 = person.friends[1];
  var friend2 = person.friends[2];

  var ageDiff = (friend0.age + friend1.age + friend2.age).toString();

  console.log(ageDiff);
}

console.warn(
  ' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends. ',
);

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(ageDiff);
}

console.warn(
  ' Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.',
);

for (var i = 0; i < person.friends.length; i++) {
  var friends = person.friends[i];
  var ageDiff = Math.abs(person.age - friends.age);

  message +=
    ' Intre ' +
    person.name +
    ' si ' +
    friends.name +
    ' este o diferenta de ' +
    ageDiff +
    '.';

  console.log(message);
}

console.warn(
  'Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).',
);

message = 'Prietenii mei sunt: ';

for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 3) {
    punctuation = '.';
  }

  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);
