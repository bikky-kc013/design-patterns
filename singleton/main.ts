class Car {
  private static car: Car = new Car();
  private constructor() {}

  public static getCar() {
    return this.car;
  }
}

Car.getCar();

console.log(Car.prototype.constructor);
