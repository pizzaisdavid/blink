import { Gpio } from 'onoff';

export class Light {
  public static OFF = 0;
  public static ON = 1;

  private gpio: Gpio;

  constructor(private pin: number) {
    console.log(`pin: ${pin}`);
    this.gpio = new Gpio(this.pin, 'input');
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