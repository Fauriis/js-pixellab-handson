var defaultNumber = 1;

var i = 0;
var number = prompt('Introdu un numar');
var limit = prompt('Introdu un numar pentru a afisa pana unde vrei sa numere');
number = number.trim();

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
