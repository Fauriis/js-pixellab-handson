class Car {
  areLightsOn = false;
  intervalId = 0;
  initialLightsState = false;

  constructor(positionX, positionY, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    this.car = document.createElement('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.car.append(this.carTop);
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    this.lightBack = document.createElement('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.lightFront = document.createElement('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.hubCapFront = document.createElement('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);

    this.hubCapBack = document.createElement('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);

    return this;
  }

  moveTo(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;

    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;
  }

  turnLightsOn() {
    this.lightFront.style.backgroundColor = 'yellow';
    this.lightBack.style.backgroundColor = 'red';

    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.lightFront.style.backgroundColor = 'white';
    this.lightBack.style.backgroundColor = 'white';

    this.areLightsOn = false;
  }

  toggleHazards() {
    const self = this;

    if (self.intervalId !== 0) {
      clearInterval(self.IntervalId);
      self.intervalId = 0;

      if (self.initialLightsState === true) {
        self.turnLightsOn();
      } else {
        self.turnLightsOff();
      }
      return;
    }

    self.initialLightsState = self.areLightsOn;

    self.intervalId = setInterval(function () {
      if (self.areLightsOn === true) {
        self.turnLightsOff();
      } else {
        self.turnLightsOn;
      }
    }, 1000);

    return self;
  }

  engageBreak() {
    this.lightBack.style.backgroundColor = 'red';
  }

  disengageBreak() {
    this.lightBack.style.backgroundColor = 'white';
  }

  render() {
    document.body.append(this.frame);

    return this;
  }

  changeCarColor() {
    this.carBody.style.backgroundColor = 'black';
    this.carTop.style.backgroundColor = 'black';
  }

  changeTireColors() {
    this.wheelBack.style.backgroundColor = 'magenta';
    this.wheelFront.style.backgroundColor = 'magenta';
  }
}

const car01 = new Car(300, 16, 'teal').render().turnLightsOn();

const car02 = new Car(504, 504, 'green').render();
