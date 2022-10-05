import React from 'react';

// Components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';

const App = () => {
  return (
    <div className='container'>
      <Nav />
      <Hero />
      <Card />
    </div>
  );
};

export default App;
