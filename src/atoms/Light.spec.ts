
import { Light } from './Light';
// TODO: import { Pinta } from 'pintail';

interface Pinta {

}

describe('Light', () => {
  const pin = 4;
  let mockPintail: Pinta;
  let light: Light;

  beforeEach(async () => {
    mockPintail = {};
    light = await Light.build(mockPintail);
  });

  it('turn light on', async () => {
    await light.on();
  });

});
