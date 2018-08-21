
import { Button, Light } from '../src'

Promise.all([
  Button.make(2),
  Light.make(3),
]).then(([button, led]: [Button, Light]) => {
  button.pressed(() => {
    led.flip()
      .then(() => console.log(`the led state is ${led.state}`))
      .catch((error) => console.error(error));
  });
})
.catch((error) => console.error(error));
