console.log('Imi fac tema la JavaScript.');
console.log('Flori');
console.log('Florentina');

var inputName = document.getElementById('name');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  var name = inputName.value || 0;
});
