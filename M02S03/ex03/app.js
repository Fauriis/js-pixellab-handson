const stage = document.querySelector('.stage');

// showMessage('.hello', 'Welcome');

stage.addEventListener('mouseover', function () {
  // "this" este elementul de DOM

  const message = 'Mouseul este pe scena';

  // console.log(message);

  showMessage('.message', message);
});

stage.addEventListener('mouseout', function () {
  const message = 'Mouseul NU este pe scena';

  showMessage('.message', message);
});

const showMessage = (targetSelector = '.message', message) => {
  // =.'message'  este default

  let element = document.querySelector(targetSelector);

  if (element === null) {
    element = document.createElement('p');
    element.classList.add(targetSelector.replace('.', ''));
    document.body.append(element);
  }

  element.innerText = message;
};

// counter

let counterDisplayElement = document.querySelector('.counter-display');
let countSquare = document.querySelector('.counter-square');

// let countElement = document.getElementById('count');
let count = 0;

updateDisplay();

stage.addEventListener('mouseover', function () {
  // countElement = count;
  count++;
  updateDisplay();
});

stage.addEventListener('mouseout', function () {
  count++;
  updateDisplay();
});

function updateDisplay() {
  counterDisplayElement.innerText = `Mouseul este pe scena de ${count} ori.`;

  countSquare.innerText = `Mouseul a trecut peste laturile patratului de ${count} ori.`;
}
