import React from 'react';
import './ProjectCard.scss';
import { Link, useLocation } from 'react-router-dom';

const Project = ({ project: item }) => {
  return (
    <div className="projectCard">
      <img src={item.img} alt={item.cat} />
      <div className="info">
        <div>
          <img src={item.pp} alt="" />
        </div>
        <div className="texts">
          <h2>{item.cat}</h2>
          <span>{item.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
