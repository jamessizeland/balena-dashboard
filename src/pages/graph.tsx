import React, { useEffect, useState } from 'react';

import type { NextPage } from 'next';

const GraphPage: NextPage = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const intervalRef = setInterval(
      (): void => setNumber(Math.floor(Math.random() * 100)),
      1000,
    );
    return () => {
      clearInterval(intervalRef);
    };
  }, []);
  return (
    <div className={'container'}>
      <p>Graph</p>
      <p>{number}</p>
    </div>
  );
};

export default GraphPage;
