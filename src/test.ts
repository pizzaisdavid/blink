
import { Button, Light } from './index'

async function main() {

  const led = await Light.make(7);
  const button = await Button.make(9);

  button.pressed(() => led.flip());
}

main();
