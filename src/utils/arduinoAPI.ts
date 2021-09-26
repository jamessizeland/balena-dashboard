import five from 'johnny-five';

import { useAppDispatch, useAppSelector } from '../store/hooks';

const board = new five.Board({ repl: false });

let data = 0;
board.on('ready', function () {
  // Initialize I/O
  const sensor = new five.Sensor('A0');
  const led = new five.Led(13);
  led.blink(1000);

  // Handle 'data' event
  sensor.on('data', (value: number) => {
    console.log(`Raw value ${value}`);
    data = value;
  });
});
