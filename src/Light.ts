
import { Pintail, Direction } from 'pintail';

export class Light {

  static async make(pin: number): Promise<Light> {
    const pintail = Pintail.make(pin, Direction.in);
    const light = new Light(pintail);
    await light.setup();
    return light;
  }

  constructor(private pintail: Pintail, private state = false) {}

  setup(): Promise<boolean> {
    return this.update();
  }

  flip(): Promise<boolean> {
    this.state = !this.state;
    return this.update();
  }

  on(): Promise<boolean> {
    this.state = true;
    return this.update();
  }

  off(): Promise<boolean> {
    this.state = false;
    return this.update();
  }

  update(): Promise<boolean> {
    return this.pintail.write(this.state);
  }
}
