import React from 'react';
import data from './data';

// Components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';

const App = () => {
  const cards = data.map((info) => {
    return <Card key={info.id} {...info} />;
  });

  return (
    <div className='container'>
      <Nav />
      <Hero />
      <div className='card-flex'>{cards}</div>
    </div>
  );
};

export default App;
