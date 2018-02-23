import React from 'react';
// import PropTypes from 'prop-types';
import Slider from 'react-slick';

import sleepWellBeast from '../../images/albums/sleep_well_beast.jpg';
import troubleWillFindMe from '../../images/albums/trouble_will_find_me.jpg';

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
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <img src={sleepWellBeast} alt="sleep well beast" />
      <div><img src={troubleWillFindMe} alt="trouble will find me" /></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
      <div><h3>6</h3></div>
    </Slider>
  );
}
