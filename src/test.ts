
import { Button, Light } from './index'

async function main() {

  const led = await Light.make(7);
  const button = await Button.make(9);

  button.pressed((error) => {
    led.flip();
  });

  /*


  const car = Car.make(
    await MotorControl.make(),
  );


  const car = Car.make(
    MotorControl.make(40,
      [
        Motor.make(1, 'clockwise'),
        Motor.make(2, 'counter-clockwise'),
      ]
    ),
    Light.make(7),
    Ps3Controller.make(8),
  );
  car.manual();
  */
}

main();
