
import * as bus from 'i2c-bus';

export class MotorControl {

  private bus: bus.I2cBus;
  private address = 0x40;
  private ALL_LED_ON_LOW = 0xFA;
  private ALL_LED_ON_HIGH = 0xFB;
  private ALL_LED_OFF_LOW = 0xFC;
  private ALL_LED_OFF_HIGH = 0xFD;

  private MODE1 = 0x00;
  private MODE2 = 0x01;

  private ALLCALL = 0x01;
  private OUTDRV = 0x04;

  static async make(): Promise<MotorControl> {
    const control = new MotorControl();
    await control.setup();
    return control;
  }

  constructor() {
    this.bus = bus.openSync(1);
  }

  async setup(): Promise<void> {
    this.setupPwm();
    await this.setupOscillator();
    bus.open.bind
  }

  setupPwm() {
    this.bus.writeByteSync(this.address, this.ALL_LED_ON_LOW, 0);
    this.bus.writeByteSync(this.address, this.ALL_LED_ON_HIGH, 0);
    this.bus.writeByteSync(this.address, this.ALL_LED_OFF_LOW, 0);
    this.bus.writeByteSync(this.address, this.ALL_LED_OFF_HIGH, 0);
  }

  async setupOscillator() {
    // probably unused
    // this.bus.writeByteSync(this.address, this.MODE2, this.OUTDRV);
    // this.bus.writeByteSync(this.address, this.MODE1, this.ALLCALL);
    this.bus.writeByteSync(this.address, this.MODE1, 0);
    // TODO: maybe add sleep
  }
}
