
import { Pin } from 'hydrangea';

export class Led {

  constructor(private pin: Pin, public state: boolean = false) {}

  flip(): Promise<void> {
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
