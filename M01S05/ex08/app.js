const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const eventListener = () => {
  alert('ai apasat butonul');
};

// button.addEventListener('click', function () {
//   alert('ai apasat butonul!');
// });

console.warn(
  `Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler si foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime. `,
);
button.addEventListener('click', eventListener);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', eventListener);
});

const ageButton = document.getElementById('query');
const message = document.querySelector('#message');

ageButton.addEventListener('click', function () {
  const age = prompt('Care este varsta ta?');
  console.log(`Ai ${age} de ani.`);
  message.innerText = `Ai ${age} de ani.`;
});
