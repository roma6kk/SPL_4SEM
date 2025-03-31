import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const isResetDisabled = count === 0;
  const isIncreaseDisabled = count === 5;

  return (
    <div>
      <h1>{count}</h1>
      <Button title="Increase" onClick={handleIncrease} disabled={isIncreaseDisabled} />
      <Button title="Reset" onClick={handleReset} disabled={isResetDisabled} />
    </div>
  );
};

export default Counter;