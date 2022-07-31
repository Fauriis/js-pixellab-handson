class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 2;

    return this;
  }

  decelerate() {
    this.speed -= 3;

    return this;
  }

  setSpeed(speed) {
    this.speed = speed;
    this.speed = 4;
  }
}

var audi = new Car('Audi', 'black', 4, 50);

audi.accelerate().accelerate();
console.log(audi.speed);

const paragraphElement = document.createElement('p');
paragraphElement.classList.add('audi.speed');

paragraphElement.innerText = audi.speed;

document.body.append(paragraphElement);

console.warn(
  `Ridica viteza cu 12 apoi coboar-o cu 3 si apoi inca o data cu 4. `,
);

('12');

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate();

const paragraphElement01 = document.createElement('p');
paragraphElement01.classList.add('audi.speed');
paragraphElement01.innerText = audi.speed;

document.body.append(paragraphElement01);
('3');

audi.decelerate();

const carSpeed = document.createElement('p');
carSpeed.classList.add('carSpeed');
carSpeed.innerText = audi.speed;

document.body.append(carSpeed);

('4');

audi.accelerate().accelerate();

const carsSpeed = document.createElement('p');
carsSpeed.classList.add('carsSpeed');
carsSpeed.innerText = audi.speed;

document.body.append(carsSpeed);

console.warn(
  'Folosind noua metoda seteaza viteza la 4, apoi accelereaza la 5 folosind chaining.',
);

audi.setSpeed().accelerate();

const newSpeed = document.createElement('p');
newSpeed.classList.add('newSpeed');
newSpeed.innerText = audi.speed;

document.body.append(newSpeed);
