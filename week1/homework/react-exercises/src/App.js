import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList';
import Guarantee from './components/Guarantee';
import Counter from './components/Counter';
import GuaranteeData from './guaranteeInfo.json';

function App() {
  return (
    <>
      <h1>Week1 React Exercises</h1>
      <hr />
      <div>
        <h3>Exercise 1</h3>
        <HobbyList />
      </div>
      <hr />
      <h3>Exercise 2</h3>
      <div className='guarentee'>
        {GuaranteeData.map((data) => (
          <Guarantee
            key={data.id}
            img={data.img}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <hr />
      <div>
        <h3>Exercise 3</h3>
        <Counter />
      </div>
    </>
  );
}

export default App;
