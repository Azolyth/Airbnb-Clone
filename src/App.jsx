import React from 'react';
import data from './data';

// Components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';

const App = () => {
  const cards = data.map((info) => {
    return (
      <Card
        key={info.id}
        title={info.title}
        price={info.price}
        coverImg={info.coverImg}
        location={info.location}
        rating={info.stats.rating}
        reviewCount={info.stats.reviewCount}
      />
    );
  });

  return (
    <div className='container'>
      <Nav />
      <Hero />
      {cards}
    </div>
  );
};

export default App;
