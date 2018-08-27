
// import * as bus from 'i2c-bus';
// import { Motor, Configuration as MotorConfiguration } from '../motor/Motor';
// import { Pintail, Direction } from 'pintail';

// export interface Configuration {
//   address: number,
//   motors: MotorConfiguration[],
// }

// export class MotorControl {

//   static async build(configuration: Configuration): Promise<MotorControl> {
//     const controller = new MotorControl(configuration.address);
//     configuration.motors.forEach((m) => {
//       const pintail = controller.gpio(m.pin);
//       const motor = new Motor(pintail, m.orientation);
//       controller.append(motor);
//     });
//     await controller.setup();
//     return controller;
//   }

//   private bus: bus.I2cBus;
//   private motors: Motor[];
//   private ALL_LED_ON_LOW = 0xFA;
//   private ALL_LED_ON_HIGH = 0xFB;
//   private ALL_LED_OFF_LOW = 0xFC;
//   private ALL_LED_OFF_HIGH = 0xFD;

//   private MODE1 = 0x00;
//   private MODE2 = 0x01;

//   private ALLCALL = 0x01;
//   private OUTDRV = 0x04;

//   constructor(private address: number = 0x40) {
//     this.bus = bus.openSync(1);
//   }

//   async setup(): Promise<void> {
//     this.setupPwm();
//     await this.setupOscillator();
//     bus.open.bind
//   }

//   gpio(pin: number): Pintail {
//     return Pintail.make(pin, Direction.in);
//   }

//   append(motor: Motor) {
//     this.motors.push(motor);
//   }

//   setupPwm() {
//     this.bus.writeByteSync(this.address, this.ALL_LED_ON_LOW, 0);
//     this.bus.writeByteSync(this.address, this.ALL_LED_ON_HIGH, 0);
//     this.bus.writeByteSync(this.address, this.ALL_LED_OFF_LOW, 0);
//     this.bus.writeByteSync(this.address, this.ALL_LED_OFF_HIGH, 0);
//   }

//   async setupOscillator() {
//     // probably unused
//     // this.bus.writeByteSync(this.address, this.MODE2, this.OUTDRV);
//     // this.bus.writeByteSync(this.address, this.MODE1, this.ALLCALL);
//     this.bus.writeByteSync(this.address, this.MODE1, 0);
//     // TODO: maybe add sleep
//   }
// }
