import React from 'react';
// import PropTypes from 'prop-types';
import Slider from 'react-slick';

import sleepWellBeast from '../../images/albums/sleep_well_beast.jpg';
import troubleWillFindMe from '../../images/albums/trouble_will_find_me.jpg';
import highViolet from '../../images/albums/high_violet.jpg';
import boxer from '../../images/albums/boxer.jpg';
import alligator from '../../images/albums/alligator.jpg';
import cherryTree from '../../images/albums/cherry_tree.jpg';
import sadSongs from '../../images/albums/sad_songs_for_dirty_lovers.jpg';
import selfTitled from '../../images/albums/self_titled.jpg';
import virginiaEp from '../../images/albums/the_virginia_ep.jpg';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './style.css';

export default function BackgroundCarousel() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <img src={sleepWellBeast} alt="sleep well beast" />
      <img src={troubleWillFindMe} alt="trouble will find me" />
      <img src={highViolet} alt="high violet" />
      <img src={virginiaEp} alt="the virginia ep" />
      <img src={boxer} alt="boxer" />
      <img src={alligator} alt="alligator" />
      <img src={cherryTree} alt="cherry tree" />
      <img src={sadSongs} alt="sad songs for dirty lovers" />
      <img src={selfTitled} alt="the national" />
    </Slider>
  );
}
