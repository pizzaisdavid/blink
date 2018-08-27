
import { Led } from './Led';

import { expect } from 'chai';
import { GpioMock } from 'hydrangea';

describe('Light', () => {
  let pin: GpioMock;
  let light: Led;

  beforeEach(async () => {
    pin = new GpioMock();
    light = new Led(pin);
  });

  it('on', () => {
    return light.on()
      .then(() => {
        const value = pin.shift();
        expect(value).to.equal(true);
      });
  });

});
