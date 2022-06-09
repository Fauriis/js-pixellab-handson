function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // PARANTEZE DUPA!!! IMPORTANT

  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

console.log(getTime(), 'Am ajuns la Pixellab');
