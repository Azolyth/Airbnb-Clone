import React from 'react';

import cardStar from '../images/star.png';

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <section className='card'>
      {badgeText && <div className='card-badge bold'>{badgeText}</div>}
      <img className='card-image' src={`../../src/images/${props.coverImg}`} />
      <div className='card-rating'>
        <img className='card-star' src={cardStar} />
        <p className='card-rating-info'>
          <span className='card-rating-score'>{props.stats.rating}</span> (
          {props.stats.reviewCount}) • {props.location}
        </p>
      </div>
      <p className='card-title'>{props.title}</p>
      <p className='card-pricing'>
        <span className='bold'>From ${props.price}</span> / person
      </p>
    </section>
  );
};

export default Card;
