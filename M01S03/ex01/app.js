var object = {
  name: 'flori',
  surname: 'dobre',
  age: 24,
  petOwner: true,
  carOwner: false,
};

console.log(object.name);
// === '24'
console.log(object.age.toString());

// Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola folosind operatorul de concatenare

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.warn(
  'Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola folosind operatorul de concatenare',
);
console.log((2022 - object.age).toString());

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.log(
  object.name + ' s-a nascut in ' + (2022 - object.age).toString() + '.',
);
