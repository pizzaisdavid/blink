import { Gpio } from 'onoff';

export class Button {

  static async make(pin: number): Promise<Button> {
    const gpio = new Gpio(4, 'in', 'both');

    const button = new Button(gpio);
    return button;
  }

  private gpio: Gpio;

  constructor(gpio: Gpio) {
    this.gpio = gpio;
  }

  pressed(callback: (error: Error) => void) {
    this.gpio.watch(callback);
  }
}
