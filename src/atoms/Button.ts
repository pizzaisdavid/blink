import { Pintail, Direction, Edge } from 'pintail';
import { Subscription } from 'rxjs';

export class Button {

  static async make(pin: number): Promise<Button> {
    const pintail = Pintail.make(4, Direction.in, Edge.both);
    const button = new Button(pintail);
    // TODO: setup
    return button;
  }
  constructor(private pintail: Pintail) {}

  pressed(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void,
  ): Subscription {
    return this.pintail.subscribe(onNext, onError, onComplete);
  }
}
