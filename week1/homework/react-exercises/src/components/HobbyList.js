import React from 'react';
import Hobbies from './Hobbies';

const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

function HobbyList() {
  return (
    <ul>
      {hobbies.map((hobby) => {
        const index = hobbies.indexOf(hobby);
        return <Hobbies hobby={hobby} key={index} />;
      })}
    </ul>
  );
}

export default HobbyList;
