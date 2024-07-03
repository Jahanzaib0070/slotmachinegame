import React from 'react';
import './App.css';
import SlotM from './slotM';

const App = () => {
  return ( 
    <>
    <h1 className='heading_style'>
      Welcome to Slot Machine Game
    </h1>
    <div className='slotMachine'>
      <SlotM x='😄' y='😄' z='😄'/>
      <SlotM x='🐱' y='😄' z='💯'/>
      <SlotM x='🚑' y='🚑' z='🚑'/>
      <SlotM x='😄' y='🚑' z='🐕'/>
      <SlotM x='🥀' y='🥀' z='🥀'/>
      <SlotM x='🥇' y='🚑' z='🐕'/>
      <SlotM x='❤️' y='❤️' z='❤️'/>
    </div>
  </>
  )
};

export default App;