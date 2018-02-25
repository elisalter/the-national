import React from 'react';
// import PropTypes from 'prop-types';
import Slider from 'react-slick';

import sleepWellBeast from '../../images/albums/sleep_well_beast.jpg';
import troubleWillFindMe from '../../images/albums/trouble_will_find_me.jpg';
import highViolet from '../../images/albums/high_violet.jpg';
import boxer from '../../images/albums/boxer.jpg';
import alligator from '../../images/albums/alligator.jpg';
import cherryTree from '../../images/albums/cherry_tree.jpg';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
// import './style.scss';

export default function BackgroundCarousel() {
  // const { images } = this.props;
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <img src={sleepWellBeast} alt="sleep well beast" />
      <img src={troubleWillFindMe} alt="trouble will find me" />
      <img src={highViolet} alt="high violet" />
      <img src={boxer} alt="boxer" />
      <img src={alligator} alt="alligator" />
      <img src={cherryTree} alt="cherry tree" />
    </Slider>
  );
}
