
import { Gpio } from 'onoff';

export class Light {

  static async make(pin: number): Promise<Light> {
    const gpio = new Gpio(pin, 'input');
    const light = new Light(gpio);
    light.setup();
    return light;
  }

  private gpio: Gpio;

  constructor(gpio: Gpio) {
    this.gpio = gpio;
  }

  async setup() {
    await this.on();
  }

  async flip() {
    await this.gpio.write(1);
  }

  on(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.gpio.write(1, (error, value) => {
        if (error) {
          reject(error);
        }
        resolve(value === 1);
      });
    });
  }
}
