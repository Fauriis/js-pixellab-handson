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
