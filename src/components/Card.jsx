import React from 'react';

import cardImage from '../images/katie-zaferes.png';
import cardStar from '../images/star.png';

const Card = () => {
  return (
    <section className='card'>
      <img className='card-image' src={cardImage} />
      <div className='card-rating'>
        <img className='card-star' src={cardStar} />
        <p className='card-rating-info'>5.0 (6) • USA</p>
      </div>
      <p className='card-title'>Life lessons with Katie Zaferes</p>
      <p className='card-pricing'>
        <span className='bold'>From $136</span> / person
      </p>
    </section>
  );
};

export default Card;
