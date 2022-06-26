const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const message = 'Nu stim ce browser folosesti';

if (userAgentString.includes('chrome')) {
  message = 'Navighez folosind Chrome';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);

if (userAgentString.includes('firefox')) {
  message = 'Navighez folosind Firefox';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);

setTimeout(function () {
  const userName = prompt('nume browser vrea sa stie cum te cheama');
  console.log(`Salut ${userName}!`);
  const messageA = document.createElement('h1');

  messageA.innerText = `Salut ${userName}!`;
  document.body.append(messageA);
}, 3000);

if (userAgentString.includes('internet explorer')) {
  message = 'Navighez folosind Internet Explorer';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);

switch (userAgentString) {
  case 'chrome':
    console.log('Navighez folosind Chrome');
    break;

  case 'firefox':
    console.log('Navighez folosind Firefox');
    break;

  case 'internet explorer':
    console.log('Navighez folosind Internet Explorer');
    break;

  default:
    console.log('Nu stim ce browser folosesti');
}

setTimeout(function () {
  paragraphElement.remove();
}, 3000);
