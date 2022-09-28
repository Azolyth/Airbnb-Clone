import React from 'react';

// Images
import photoGrid from '../images/photo-grid.png';

const Hero = () => {
  return (
    <header>
      <img className='photo-grid' src={photoGrid} alt='A collage of cultrale images' />
      <h1 className='hero-title'>Online Experiences</h1>
      <p className='hero-body'>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </header>
  );
};

export default Hero;
