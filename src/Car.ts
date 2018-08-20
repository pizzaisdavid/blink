
import { Motor } from './Motor';
import { MotorControl } from './MotorControl';


export class Car {

  static async make(control: MotorControl): Promise<Car> {
    const car = new Car(control);
    await car.setup();
    return car;
  }

  constructor(private control: MotorControl) {}

  async setup() {

  }

  forward() {

  }
}
