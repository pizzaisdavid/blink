
import {
  MotorControl,
  Configuration as MotorControlConfiguration
} from '../atoms/MotorControl';

interface Configuration {
  controller: MotorControlConfiguration,
}

export class RobotCar {

  static async build(configuration: Configuration) {
    const control = MotorControl.build(configuration.controller);
    const robot = new RobotCar();
  }

  constructor() {

  }
}



RobotCar.build({
  controller: {
    address: 40,
    motors: [
      { pin: 1, orientation: 'clockwise' },
      { pin: 2, orientation: 'counter-clockwise' },
    ]
  }
})
  .then(robot => {

  })
  .catch(error => console.log(error));
