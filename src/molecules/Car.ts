
import { Motor } from '../atoms/Motor';
import { MotorControl } from '../atoms/MotorControl';


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
