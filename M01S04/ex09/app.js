// Modifica exemplul astfel incat bucla sa numere de la 1 la 100

// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i <= 100);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).

// var i = 1;
// do {
//   console.log(i);

//   i++;
// } while (i < 100);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).

// var i = 1;

// do {
//   console.log(i);
//   if (i === 50) {
//     i++;
//     break;
//   }

//   i++;
// } while (i < 100);

// Modifica exemplul astfel incat bucla sa / numere de la 1 la 52

// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i <= 52);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 51.

// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i <= 51);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)

// var i = 1;

// do {
//   console.log(i);
//   if (i === 12) {
//     i++;
//     break;
//   }

//   i++;
// } while (i < 51);

// Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.

// var i = 8;

// do {
//   if (i % 2 !== 1) {
//     i++;
//     console.log(i);
//     continue;
//   }

//   i++;
// } while (i <= 32);

// Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.

// var number = prompt('Introdu un numar');
// var inferiorlimit = prompt(
//   'Introdu un numar de la care sa porneasca numaratoarea',
// );
// var limit = prompt(
//   'Introdu un alt numar pana unde vrei sa se opreasca numaratoarea',
// );

// var i = inferiorlimit;

// do {
//   console.log(i);
//   if (i % number === 0) {
//     console.log(`acesta e multiplu de ${number}`);
//     i++;
//   }

//   i++;
// } while (i <= limit);
