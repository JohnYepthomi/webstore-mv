import React from 'react';
import '../styles/Banner.css';
import BannerImg1 from '../assets/banner.jpg';
import { Carousel } from 'antd';

export default function Banner(){
  return (
      <Carousel autoplay className="banner-container">
        <div>
          <img src={BannerImg1} alt="banner" />
        </div>
        <div>
          <img src={BannerImg1} alt="banner" />
        </div>
        <div>
          <img src={BannerImg1} alt="banner" />
        </div>
        <div>
          <img src={BannerImg1} alt="banner" />
        </div>
      </Carousel>
  )
}