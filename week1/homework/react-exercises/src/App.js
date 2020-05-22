import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList';
import Guarantee from './components/Guarantee';
import deliveryLogo from './components/images/f-delivery.png';
import chatLogo from './components/images/chat.png';
import coinLogo from './components/images/coin.png';
import Counter from './components/Counter';

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
        <div className='guarentee-item'>
          <Guarantee
            img={deliveryLogo}
            title='Free Shipping'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam justo libero, eu mattis ante ornare quis. Donec maximus nisi vitae sagittis iaculis.'
          />
        </div>
        <div className='guarentee-item'>
          <Guarantee
            img={chatLogo}
            title='100% Money back'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam justo libero, eu mattis ante ornare quis. Donec maximus nisi vitae sagittis iaculis.'
          />
        </div>
        <div className='guarentee-item'>
          <Guarantee
            img={coinLogo}
            title='Online support 24/7'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam justo libero, eu mattis ante ornare quis. Donec maximus nisi vitae sagittis iaculis.'
          />
        </div>
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
