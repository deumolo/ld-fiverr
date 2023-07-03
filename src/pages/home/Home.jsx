import React from 'react';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import { cards } from '../../data';
import Slider from 'infinite-react-carousel';
import CatCard from '../../components/catCard/CatCard';

const Home = () => {
  return (
    <>
      <div>
        <Featured />
        <TrustedBy />
        <Slide children={cards} slidesToShow={5} arrowsScroll={4}>
          {cards.map((card) => {
            return (
              <div key={card.id}>
                <CatCard card={card} />
              </div>
            );
          })}
        </Slide>
      </div>
    </>
  );
};

export default Home;
