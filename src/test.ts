
import { Light } from './index'

Light.make(7)
  .then(led => {

    const DURATION_IN_MILLISECONDS = 250;

    setInterval(() => {
      led.flip()
        .then(() => console.log(`the led is ${led.state}`))
        .catch(error => console.error(error));
    }, DURATION_IN_MILLISECONDS);

  })
  .catch(error => console.error(error));
