import React,{useState} from 'react'
import staking from '../../assets/Images/staking.png'
import polka from '../../assets/Images/Polka.jpg'
import MultiChain from '../../assets/Images/MultiChain.png'
import NFT from '../../assets/Images/NFT.jpg'
import Futuristic from '../../assets/Images/Futuristic.png'
import farming from '../../assets/Images/farming.jpg'
import './features.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function PolkaMainet() {
    return (
        <div className="features">
        <div className="container ">
            <div className="feature-box">
                <img data-aos="fade-right" src={polka} width="100%" />
                <div data-aos="fade-left">
                <h2>Polka Mainnet</h2>
                <p>PolkaFinance tokens offer access to PolkaFinance platform within the community. Users can buy, earn, stake, and redeem PolkaFinance tokens on the platform to trade, tip, donate, to gain access to exclusive events, and governing rights. </p>
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

export default PolkaMainet
