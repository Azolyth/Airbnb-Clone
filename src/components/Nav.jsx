import React from 'react';

// Images
import logo from '../images/airbnb-logo.png';

const Nav = () => {
  return (
    <nav className='nav'>
      <img className='logo' src={logo} alt='Airbnb Logo' />
    </nav>
  );
};

export default Nav;
