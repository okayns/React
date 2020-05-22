import React from 'react';

function Button(props) {
  return (
    <div>
      <button onClick={props.event}>Add 1</button>
    </div>
  );
}

export default Button;
