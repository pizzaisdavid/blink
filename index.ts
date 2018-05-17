import * as gpio from 'rpi-gpio';

const pin = 7;
let status = true;

gpio.setup(pin, gpio.DIR_OUT, () => {
  loop();
});

function loop() {
  flip(() => {
    setTimeout(() => {
      loop();
    }, 1000);
  });
}


function flip(callback) {
  status = !status;
  gpio.write(pin, status, (error) => {
    if (error) {
      console.log(error);
    }
    console.log(`status is ${status}`);
    callback();
  });
}