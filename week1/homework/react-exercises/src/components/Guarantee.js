import React from 'react';

function Guarantee(props) {
  return (
    <div className='guarentee-item'>
      <img src={props.img} alt={props.title + ' ' + 'Logo'} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Guarantee;
