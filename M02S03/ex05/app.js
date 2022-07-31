const debounce = throttleDebounce.debounce;

let oldWidth = window.innerWidth;

showMessage(oldWidth, 'message');

// recipe
const debouncedResize = debounce(1000, function () {
  const newWidth = this.innerWidth;
  showMessage(this.innerWidth.toString());

  if (oldWidth !== newWidth) {
    showMessage(`Fereastra si-a schimbat latimea. ${newWidth}`, 'messsage2');

    oldWidth = newWidth;
  }
});

window.addEventListener('resize', debouncedResize);

// hoisting =  function
function showMessage(message, className = 'message') {
  let paragraphElement = document.querySelector('.' + className);

  if (paragraphElement === null) {
    paragraphElement = document.createElement('p');
    paragraphElement.classList.add(className);

    document.body.append(paragraphElement);
  }

  paragraphElement.innerText = message;
}

let oldHeight = window.innerHeight;

const debouncedResize01 = debounce(1000, function () {
  const newHeight = this.innerHeight;
  const newWidth = this.innerWidth;
  showMessage(this.innerHeight.toString());

  if (oldHeight !== newHeight) {
    showMessage(
      `Fereastra are acum suprafata de ${newHeight} si de ${newWidth} pixeli.`,
    );
  }

  oldHeight = newHeight;
});
window.addEventListener('resize', debouncedResize01);

document.addEventListener('DOMContentLoaded', function () {
  const refreshButton = document.querySelector('.refresh-button');

  const refreshPage = () => {
    location.reload();
    alert(`Suprafata este de ${oldWidth} pixeli.`);
  };

  refreshButton.addEventListener('click', refreshPage);
});
