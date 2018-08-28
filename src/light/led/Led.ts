
import { Light } from '../Light';

import { Pin } from 'hydrangea';

export class Led implements Light {

  public state: boolean;
  
  constructor(private pin: Pin) {
    this.state = false;
  }

  toggle(): Promise<void> {
    return this.update(!this.state);
  }

  on(): Promise<void> {
    return this.update(true);
  }

  off(): Promise<void> {
    return this.update(false);
  }

  update(value: boolean): Promise<void> {
    this.state = value;
    return this.pin.write(value);
  }
}
