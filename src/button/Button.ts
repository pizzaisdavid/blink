
import { Pin } from 'hydrangea';

import { Subscription } from 'rxjs';

export class Button {

  constructor(private pin: Pin) {}

  pressed(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void,
  ): Subscription {
    return this.pin.subscribe(onNext, onError, onComplete);
  }
}
