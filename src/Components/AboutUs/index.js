import React from 'react'
import './about.css'
import satelites from '../../assets/Images/aboutus.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import whitepaper from '../../assets/Pdf/whitepaper.pdf'

function AboutUs() {
    return (
        <div>
              
        <div className="content-section">
        <div className="container">
        <div className="content-grid-section">
        <div data-aos="fade-right">
        <img src={satelites} className="satelite-img" />
        </div>
        
        <div data-aos="fade-left"   style={{lineHeight: 1.6}}>
            <h2 className="company-intro">What is PolkaVerse?</h2>
            <p><span className="orange-color">The Polkaverse Token (PKV) is an ERC20-compliant cryptographic token that can be traded on the BSC blockchain just like BNB. It is both a Polkaverse platform currency and an independent store of value for players and investors.</span></p>
            <p style={{fontSize:18}}>Using Polkaverse Token (PKV) for in-game transactions allows us to lower costs on transaction fees, keeping them at the bare minimum. Controlling Polkaverse Token availability. Keeping coins stable in value and always available to buy.
</p>
            <p style={{fontSize:18,marginBottom:20}}>PolkaVerse tokens offer access to PolkaVerse platform within the community. Users can buy, earn, stake, and redeem PolkaFinance tokens on the platform to trade, tip, donate, to gain access to exclusive events, and governing rights. Participants are rewarded with PolkaVerse tokens for their involvement and engagement on the PolkaVerse Platform.</p>
            <a href={whitepaper}><button className="header-button">Read Whitepaper</button></a>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default AboutUs
