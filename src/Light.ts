import * as gpio from 'rpi-gpio';

export class Light {

  private status: boolean;

  constructor(private pin: number) {
    this.status = false;
  }
  
  setup(callback: Function) {
    gpio.setup(this.pin, gpio.DIR_OUT, callback);
  }
  
  flip(callback: Function) {
    this.status = !this.status;
    gpio.write(this.pin, this.status, (error) => {
      if (error) {
        console.log(error);
      }
      console.log(`status is ${this.status}`);
      callback();
    });
  }
}