import React, { Component } from "react";
import Slider from "react-slick";
import './partner.css'
import solyard from '../../assets/Images/solyardfinance.svg'
import unity from '../../assets/Images/unity.svg'
import polkadot from '../../assets/Images/polkadot.svg'
import cry from '../../assets/Images/cry.svg'
import bit from '../../assets/Images/bit.svg'
import gif from '../../assets/Images/gif.svg'
import bitget from '../../assets/Images/bitget.jfif'

export default class Partners extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
    };
    return (
      <div className="our-partners">
      <div className="container">
        <h2 className="partner-heading"> Our Partners</h2>
        <Slider className="container" {...settings}>
          <div className="partner-pics">
            <img src={solyard} width="100%"  />
          </div>
          <div className="partner-pics">
          <img src={unity} width="100%" />
          </div>
          <div className="partner-pics">
          <img src={polkadot} width="100%"  />
          </div>
          <div className="partner-pics">
          <img src={cry} width="100%" />
          </div>
          {/* <div className="partner-pics">
          <img src={gif} width="100%" />
          </div> */}
        </Slider>
      </div>
      </div>
    );
  }
}