var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputHeigth = document.getElementById('height');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  var length = inputLength.value || 0;
  var width = inputWidth.value || 0;
  var height = inputHeigth.value || 0;

  var result = 0;

  result = length * width * height;

  elementResult.innerText = result;

  event.preventDefault();
});