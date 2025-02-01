 // import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces

import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class should extend Vehicle and implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(); // Call the parent constructor (Vehicle)
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Ensure there are exactly 4 wheels, else use default Wheel objects
    if (wheels.length !== 4) {
      this.wheels = Array(4).fill(new Wheel());
    } else {
      this.wheels = wheels;
    }
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleDetails = vehicle instanceof Vehicle ? `${vehicle.make} ${vehicle.model}` : 'Unknown vehicle';

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${vehicleDetails} is being towed by the truck.`);
    } else {
      console.log(`The ${vehicleDetails} is too heavy to be towed by the truck.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the parent method (Vehicle)
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.map(wheel => `Wheel [${wheel.getDiameter}]`).join(', ')}`);
  }
}

// Export the Truck class
export default Truck;
