class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  topSpeed = 160;
  topReverseSpeed = -50;
  areLightsOn = false;

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  // how to preserver this - modern way
  // important - arrow function isi preia thisul pentru contextul de jos
  // function si arrow function sunt diferite
  flashLights() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  }

  // => arrow function - isi insuseste thisul

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  isTrunkOpen = false;

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  stop() {
    this.speed = 0;
  }
}

const audi = new Car('Audi', 'black', 4, 50);
// ('audi') -- parametrii
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

console.warn(`Ruleaza o bucla prin forEach si afiseaza propozitiile (pentru fiecare din masini)
“Masina era marca make si se deplasa cu speed km/h.”
`);

cars.forEach(function (car) {
  let message = `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`;
  console.log(message);
});

console.warn(
  `In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza: “Viteza noua este speed km/h.”`,
);

cars.forEach(function (car) {
  // car.decelerate();
  // car.decelerate();
  // car.decelerate();
  // car.decelerate();
  // car.decelerate();

  let message = `Viteza noua este ${car.speed - 5} km/h.`;

  console.log(message);
});
