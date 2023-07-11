import React from 'react';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import { cards, projects } from '../../data';
import CatCard from '../../components/catCard/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
  return (
    <>
      <div className="home">
        <Featured />
        <TrustedBy />
        <Slide children={cards} slidesToShow={4} arrowsScroll={4}>
          {cards.map((card) => {
            return (
              <div key={card.id}>
                <CatCard card={card} />
              </div>
            );
          })}
        </Slide>
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <img src="./img/check.png" alt="" />
                The best of every budget
              </div>
              <p>
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                The best of every budget
              </div>
              <p>
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                The best of every budget
              </div>
              <p>
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                The best of every budget
              </div>
              <p>
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <div className="item">
              <video src="./img/video.mp4" controls></video>
            </div>
          </div>
        </div>
        <div className="features dark">
          <div className="container">
            <div className="item">
              <h1>fiverr business</h1>
              <h1>A solution built for business</h1>
              <p>
                Upgrade to a curated experience to access vetted talent and
                exclusive tools
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Talent matching
              </div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Dedicated account management
              </div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Team collaboration tools
              </div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Business payment solutions
              </div>
              <button>Explore Fiverr Business </button>
            </div>
            <div className="item">
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" />
            </div>
          </div>
        </div>
        <Slide slidesToShow={4} arrowsScroll={4}>
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </Slide>
      </div>
    </>
  );
};

export default Home;
