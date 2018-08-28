
import { Led } from '../src';

import { Hydrangea } from 'hydrangea';

const board = new Hydrangea();
const pin = board.createPin({
  id: 3,
  direction: Hydrangea.direction.in,
});
const led = new Led(pin);

setInterval(() => {
  led.toggle()
    .then(() => console.log(`the led state is ${led.state}`))
    .catch(error => console.error(error));
}, 500);
