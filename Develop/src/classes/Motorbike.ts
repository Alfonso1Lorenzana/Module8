// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]){
    super();
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

    if (!wheels) {
      this.wheels = [
        new Wheel(),
        new Wheel()
      ];
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the wheelie method
  // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
    
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    console.log(`Motorbike VIN: ${this.vin}`);
    console.log(`Motorbike make: ${this.make}`);
    console.log(`Motorbike model: ${this.model}`);
    console.log(`Motorbike year: ${this.year}`);
    console.log(`Motorbike weight: ${this.weight} `);
    console.log(`Motorbike current speed: ${this.topSpeed} mph`);
    console.log(`Motorbike current speed: ${this.color}`);
    console.log(`Motorbike current speed: ${this.wheels}`);
    super.printDetails();
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
