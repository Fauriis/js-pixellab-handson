var defaultNumber = 1;
var defaultWarningMessage = 'Nu ai introdus un numar.';

var i = 0;
var number = prompt('Introdu un numar');
var limit = prompt('Introdu un numar pentru a afisa pana unde vrei sa numere');

// for (i = 1; i <= 1000; i++) {
//   console.log(i);
//   if (i % number !== 0) {
//     continue;
//   }

//   console.log(`Acest numar este multiplu de ${number}`);
// }

for (i = 1; i <= limit; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}`);
}

if (number === null || number.trim() === 0) {
  console.log(defaultWarningMessage);
  number = defaultNumber;
} else if (isNaN(number) === true) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
}
