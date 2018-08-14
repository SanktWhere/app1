import Slider from "react-slick";
import React, { Component } from 'react';

import './slick.min.css';
import './slick-theme.css';
import './App.css';

class SimpleSlider extends Component {
  constructor() {
    super();
    this.jsonData = [];
    this.settings = {
      dots: true,
      infinite: true,
      speed: 350,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  };

  getSliderImages(data) {
    if (data.length > 0) {
      console.log('yep');
        this.jsonData = data.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.url} className="image" alt=""/>
          </div>
        );
      });
    }
    else {
      console.log('nope');
    }
  }
  
  render() {
    this.getSliderImages(this.props.data);
    return (
      <Slider {...this.settings}>
        {this.jsonData}
      </Slider>
    );
  }
}

export default SimpleSlider;