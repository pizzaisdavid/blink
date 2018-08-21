
import { Gpio } from 'onoff';

enum ORIENTATION {
  clockwise = 0,
  counterclockwise = 1,
};

export class Motor {

  public static ORIENTATION = ORIENTATION;
  private gpio: Gpio;

  constructor(pin: number, private orientation = ORIENTATION.clockwise) {
    this.gpio = new Gpio(pin, 'in');
  }

  async forward() {}
}
