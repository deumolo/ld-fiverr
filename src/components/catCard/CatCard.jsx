import React from 'react';
import './CatCard.scss';
import { Link, useLocation } from 'react-router-dom';

const CatCard = ({ card: item }) => {
  return (
    <div className="catCard">
      <img src={item.img} alt={item.desc} />
      <span className="desc">{item.desc}</span>
      <span className="title">{item.title}</span>
    </div>
  );
};

export default CatCard;
