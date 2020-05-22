import React, { useState } from 'react';
import Button from './Button';
import Count from './Count';

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';
  return (
    <div>
      <Count count={count} />
      <Button event={() => setCount(count + 1)} />
      <h4>{feedback}</h4>
    </div>
  );
}

export default Counter;
