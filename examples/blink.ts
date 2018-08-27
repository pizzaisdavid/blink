
import { Light } from '../src';

import { Hydrangea } from 'hydrangea';

const board = new Hydrangea();
const pin = board.createPin({
  id: 3,
  direction: Hydrangea.direction.in,
});
const light = new Light(pin);

setInterval(() => {
  light.flip()
    .then(() => console.log(`the light state is ${light.state}`))
    .catch(error => console.error(error));
}, 500);
