
import { Subscription } from 'hydrangea';

export interface Button {
  pressed(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void,
  ): Subscription;
}
