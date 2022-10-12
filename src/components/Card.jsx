import React from 'react';

import cardStar from '../images/star.png';

const Card = (props) => {
  return (
    <section className='card'>
      <img className='card-image' src={`../../public/card-images/${props.coverImg}`} />
      <div className='card-rating'>
        <img className='card-star' src={cardStar} />
        <p className='card-rating-info'>
          {props.rating}({props.reviewCount}) • {props.location}
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
