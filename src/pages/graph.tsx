import React, { useEffect, useState } from 'react';
import useSwr from 'swr';

import type { NextPage } from 'next';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const GraphPage: NextPage = () => {
  const [number, setNumber] = useState(0);
  const [arduino, setArduino] = useState('');
  const { data, error } = useSwr('/api/data', fetcher, {
    refreshInterval: 100,
  });

  useEffect(() => {
    const intervalRef = setInterval((): void => {
      setNumber(Math.floor(Math.random() * 100));
    }, 1000);
    return () => {
      clearInterval(intervalRef);
    };
  }, []);
  return (
    <div className={'container'}>
      <p>Graph</p>
      <p>{number}</p>
      {data ? (
        <p>
          {JSON.stringify(data)} {JSON.stringify(error)}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GraphPage;
