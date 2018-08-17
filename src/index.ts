import { Light } from './Light';

async function main() {
  const pin = 7;
  const light = new Light(pin);
  while (true) {
    try {
      await light.on();
    } catch (error) {
      console.log(error);
    }
    await sleep(1000);
  }
}

function sleep(milliseconds: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, milliseconds);
  });
}

main();