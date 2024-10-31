abstract class Vehicle {
  public abstract printVehicle(): void;
}

class TwoWheeler extends Vehicle {
  public printVehicle(): void {
    console.log("I am two wheeler");
  }
}

class FourWheeler extends Vehicle {
  public printVehicle(): void {
    console.log("I am four wheeler");
  }
}

interface VehicleFactory {
  createVehicle(): Vehicle;
}

class TwoWheelerFactory implements VehicleFactory {
  public createVehicle(): Vehicle {
    return new TwoWheeler();
  }
}

class FourWheelerFactory implements VehicleFactory {
  public createVehicle(): Vehicle {
    return new FourWheeler();
  }
}

class Client {
  private pVehicle: Vehicle;
  constructor(private pVechile) {}

  public Client(factory: VehicleFactory) {
    this.pVehicle = factory.createVehicle();
  }
  public getVehicle(): Vehicle {
    return this.pVehicle;
  }
}

const twoWheelerFactory = new TwoWheelerFactory();
const twoWheelerClient = new Client(twoWheelerFactory);
const twoWheeler = twoWheelerClient.getVehicle();
twoWheeler.printVehicle();

const fourWheelerFactory = new FourWheelerFactory();
const fourWheelerClient = new Client(fourWheelerFactory);
const fourWheeler = fourWheelerClient.getVehicle();
fourWheeler.printVehicle();



//example one 