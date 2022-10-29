import React,{useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Slider from "react-slick";
import rare1 from '../../assets/Images/rare1.png'
import rare2 from '../../assets/Images/rare2.png'
import mythical1 from '../../assets/Images/mythical1.png'
import mythical2 from '../../assets/Images/mythical2.png'
import standard1 from '../../assets/Images/standard1.png'
import standard2 from '../../assets/Images/standard2.png'
import { Link } from 'react-router-dom';

function CollectNFT() {
    const [tabs,setTabs]=useState(1)
    const handleTabs = (activeContent) => {
        setTabs(activeContent)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
      };
    return (
        <div className="features">
        <div className="container ">
            <div className="feature-box2">
            <div data-aos="fade-right">
            <div className="nft-heading">
                    <h2>Collect All NFTs</h2>
             </div>
             <p  >NFTs can be traded via Polka NFT Marketplace using $PKV. Rare and mythical beasts can be exchanged via marketplace and used in-game. Free NFTs can be Earned by clearing different levels and completing certain tasks in game. </p>
                <Link to="/nft"><button className="view-card">View All Card</button></Link>
                </div>
                <div data-aos="fade-right">
                <Slider className="container" {...settings}>
          <div className="partner-pics">
            <img src={mythical1} width="100%" height="100%" />
          </div>
          <div className="partner-pics">
          <img src={rare1} width="100%" height="100%"  />
          </div>
          <div className="partner-pics">
          <img src={standard1} width="100%" height="100%" />
          </div>
          <div className="partner-pics">
          <img src={mythical2} width="100%" height="100%" />
          </div>
          <div className="partner-pics">
          <img src={rare2} width="100%" height="100%" />
          </div>
          <div className="partner-pics">
          <img src={standard2} width="100%" height="100%"/>
          </div>
          {/* <div className="partner-pics">
          <img src={coin} width="100%" />
          </div> */}
        </Slider>
                </div>
                {/* <img data-aos="fade-left" src={} width="100%" /> */}
            </div>
        </div>
        </div>    )
}

export default CollectNFT
