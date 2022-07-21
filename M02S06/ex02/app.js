// sintactic sugar
const [a, b, ...parametres] = process.argv;

// normal

// const c = process.argv[0];
// const d = process.argv[1];
// const params = process.argv.slice(2);

console.log(parametres);

const width = parametres[0];
const height = parametres[1];

// const[width height, ,,,,last] = parametres

console.log(width * height);
