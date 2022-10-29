import React,{useState} from 'react'
import './nft.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import NFT from '../../assets/Images/NFT.jpg'

function NTFMarket() {
   
    return (
        <div >
        <div className="container ">
            <div className="feature-box2">
            <div data-aos="fade-right">
            <div className="nft-heading">
                    <h2 >NFT Marketplace</h2>
                     </div>
             <p className={ "active-content" } >NFTs can be traded via Polka NFT Marketplace using $PKV. Rare and mythical beasts can be exchanged via marketplace and used in-game. Free NFTs can be Earned by clearing different levels and completing certain tasks in game. </p>
                    
                </div>
                <img data-aos="fade-left" src={NFT} width="100%" />
            </div>
        </div>
        </div>    )
}

export default NTFMarket
