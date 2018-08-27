
import { Pintail, Direction } from 'pintail';

enum ORIENTATION {
  clockwise = 'clockwise',
  counterclockwise = 'counter-clockwise',
};

export interface Configuration {
  pin: number;
  orientation: string; //TODO: 'clockwise' | 'counter-clockwise';
}

export class Motor {

  public static ORIENTATION = ORIENTATION;

  static build(pin: number, orientation: string) { // TODO: orientation = ORIENTATION.clockwise) {
    
    const pintail = Pintail.make(pin, Direction.in);
    const motor = new Motor(pintail, orientation);

    return motor;
  }

  constructor(private pintail: Pintail, private orientation: string) { // TODO: = ORIENTATION.clockwise) {
  }

  async forward() {}
}
