import { Light } from './Light';

const pin = 7;
const light = new Light(pin);

light.setup(loop);

function loop() {
  light.flip(() => {
    setTimeout(() => {
      loop();
    }, 1000);
  });
}