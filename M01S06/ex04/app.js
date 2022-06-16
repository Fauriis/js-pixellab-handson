// Folosind exemplul de la exercitiul 2, afiseaza mesajul intr-un paragraf in loc de consola. Inainte de a adauga elementul in DOM adauga-i clasa message.

(function () {
  function showMessage(message) {
    const paragraphElement = document.createElement('p');
    paragraphElement.classList.add('message');

    paragraphElement.innerText = message;

    document.body.append(paragraphElement);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');
    // .stage ===> din CSS, se pune . inainte e selector!

    // const paragraphElement = document.createElement('p');
    // document.body.append(paragraphElement);

    stage.addEventListener('mouseover', function () {
      const message = 'Mouseul este pe scena';
      showMessage(message);
      console.log(message);
    });

    stage.addEventListener('mouseout', function () {
      const message = 'Mouseul nu este pe scena';
      showMessage(message);
      console.log(message);
    });
  });
})();
