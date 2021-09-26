// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import five from 'johnny-five';

const board = new five.Board({ repl: false });

let data = 0;
board.on('ready', function () {
  // Initialize I/O
  const sensor = new five.Sensor('A0');
  const led = new five.Led(13);
  led.blink(1000);

  // Handle 'data' event
  sensor.on('data', (value: number) => {
    // console.log(`Raw value ${value}`);
    data = value;
  });
});

type Data = {
  data: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): void {
  res.status(200).json({ data });
}
