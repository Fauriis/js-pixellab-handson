var value = window.prompt('Introdu un numar');
var message = '';
var messageParagraph = document.getElementById('message');
var number = 36;
var number = window.prompt('Cu ce numar compar?');

console.log('Valoarea este: ' + value);

value = Number(value);
number = Number(number);

if (isNaN(value) === true) {
  message = 'Nu ai introdus un numar';
} else if (value === number) {
  message = `Numarul este ${number}`;
} else if (value > number) {
  message = `Numarul ${value} este mai mare decat ${number}`;
} else {
  message = `Numarul ${value} este mai mic decat ${number}`;
}

// if (isNaN(value) === true) {
//   message = 'Nu ai introdus un numar';
// } else if (value === 20) {
//   message = 'Numarul este 20';
// } else if (value > 20) {
//   message = 'Numarul este mai mare decat 20';
// } else {
//   message = 'Numarul este mai mic decat 20';
// }

// if (isNaN(value) === true) {
//   message = 'Nu ai introdus un numar';
// } else if (value === 0) {
//   message = 'Numarul este par';
// } else if (value % 2 === 0) {
//   message = 'Numarul este par;';
// } else {
//   message = 'Numarul este impar';
// }

// if (value % 2 === 0) {
//   message = 'Numarul este par';
// } else {
//   message = 'Numarul este impar';
// }

console.log(message);
messageParagraph.innerText = message;

// % -- impartire
