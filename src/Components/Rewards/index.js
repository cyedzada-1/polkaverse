import React,{useState} from 'react'
import reward from '../../assets/Images/reward.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Rewards() {
    return (
        <div className="features">
        <div className="container ">
            <div className="metaverse">
            <img data-aos="fade-right" src={reward} width="100%" className="reward" />
                <div data-aos="fade-left">
                <h2>Daily Rewards</h2>
                <p>Complete daily missions to Earn $CPKV which will be redeemable to $PKV at the end of each event. </p>
                </div>
            </div>
            {/* <div className="feature-box">
                <img src={NFT} width="100%" />
                <h2>NFT Marketplace</h2>
                <p>Digging out the true value of NFTs, organizing the infrastructure that makes EAC and ESC ownershipuniversally accessible,tradable,andprofitable.</p>
            </div>
            <div className="feature-box">
                <img src={farming} width="100%" />
                <h2>Farming</h2>
                <p>Yield farming is a method to harness idle cryptocurrencies such as coins, tokens, stable coins, and put those assets to work in a decentralized finance fund,</p>
            </div> */}
        </div>
        </div>
    )
}

export default Rewards
