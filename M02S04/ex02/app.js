// studiu

const buttons = document.querySelectorAll('button');
const box = document.querySelector('.box');
const colorInput = document.querySelector('.dynamicColorForm input');
const removeButton = document.querySelector('.thirdButton');
const addColor = document.querySelector('.boxDynamic');

// array-like object

buttons.forEach(function (button) {
  const textColor = button.innerText.toLowerCase();

  button.style.backgroundColor = textColor;

  button.addEventListener('click', function (event) {
    // recipe
    // console.log(event.target);

    const target = event.target;

    if (target.classList.contains('thirdButton')) {
      return;
    }

    if (target.nodeName === 'BUTTON' && target.type === 'button') {
      box.style.backgroundColor = target.style.backgroundColor;
    }
  });
});

colorInput.addEventListener('change', function () {
  const dynamicButton = this.previousElementSibling;

  dynamicButton.style.backgroundColor = this.value;
});

colorInput.parentElement.addEventListener('submit', function (event) {
  const dynamicButton = this.querySelector('button[type="button"]');

  dynamicButton.style.backgroundColor = colorInput.value;

  event.preventDefault();
});

removeButton.addEventListener('click', function () {
  box.removeAttribute('style');
});

addColor.addEventListener('submit', function () {
  const radioInput = this.querySelector('input[type="radio"]');

  radioInput.style.backgroundColor = addColor.value;
});

buttons.addEventListener('click', function (event) {
  const target = event.target;

  if (target.nodeName === 'INPUT' && target.type === 'input') {
    box.style.backgroundColor = target.style.backgroundColor;
  }
});
