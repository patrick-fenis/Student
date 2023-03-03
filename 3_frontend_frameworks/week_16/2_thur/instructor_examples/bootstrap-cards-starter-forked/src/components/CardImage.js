import React from 'react';

const CardImage = (props) => {
  return (
    <img
      src={props.img}
      className="card-img-top"
      alt={props.asdf}
    />
  );
};

export default CardImage;
