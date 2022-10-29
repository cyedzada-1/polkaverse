import React from 'react'
import farming from '../../assets/Images/farming.jpg'

function Farming() {
    return (
        <div className="features">
        <div className="container ">
            <div className="feature-box">
                <img data-aos="fade-right" src={farming} width="100%" />
                <div data-aos="fade-left">
                <h2>Farming</h2>
                <p>$PKV can be farmed with different lock duration and different harvesting APY. Farming will be opened in the second quarter of 2022 as mentioned in the roadmap.$CPKV will not be tradable on Pancakeswap or any  other decentralized exchange. They will function as a currency only available  inside the $PKV ecosystem and The Dark Metaverse. However, PKV Tokens and  NFTs can be traded </p>
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

export default Farming
