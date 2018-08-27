
import { Light } from './Light';

import { expect } from 'chai';
import { GpioMock } from 'hydrangea';

describe('Light', () => {
  let pin: GpioMock;
  let light: Light;

  beforeEach(async () => {
    pin = new GpioMock();
    light = new Light(pin);
  });

  it('on', async () => {
    await light.on();
    const value = pin.shift();
    expect(value).to.equal(true);
  });

});
