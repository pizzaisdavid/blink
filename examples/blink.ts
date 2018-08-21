
import { Light } from '../src'

Light.make(2)
  .then(led => {

    const DURATION_IN_MILLISECONDS = 500;

    setInterval(() => {
      led.flip()
        .then(() => console.log(`the led state is ${led.state}`))
        .catch(error => console.error(error));
    }, DURATION_IN_MILLISECONDS);

  })
  .catch(error => console.error(error));
