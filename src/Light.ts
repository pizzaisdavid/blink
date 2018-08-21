
import { Pintail, Direction } from 'pintail';

export class Light {

  static async make(pin: number): Promise<Light> {
    const pintail = Pintail.make(pin, Direction.out);
    const light = new Light(pintail);
    await light.setup();
    return light;
  }

  private state: boolean;

  constructor(private pintail: Pintail) {
    this.state = false
  }

  setup(): Promise<void> {
    return this.off();
  }

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
    return this.pintail.write(value);
  }
}
