
import { Button, Led } from '../src'

import { Hydrangea } from 'hydrangea';

const board = new Hydrangea();
const pin2 = board.createPin({ id: 3, direction: Hydrangea.direction.out });
const pin3 = board.createPin({ id: 3, direction: Hydrangea.direction.in });

const button = new Button(pin2);
const led = new Led(pin3);

button.pressed(() => {
  led.toggle()
    .then(() => console.log(`the led state is ${led.state}`))
    .catch((error) => console.error(error));
});
