import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter for range attribute
  get range() {
    return this._range;
  }

  cloneCar() {
    const clonedCar = super.cloneCar();
    return new Car(clonedCar.brand, clonedCar.motor, clonedCar.color);
  }
}
