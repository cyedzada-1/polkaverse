import React from 'react'
import {rares,standards,mythicals} from './nftData'
import './nft-marketplace.scss'
import NTFMarket from '../../Components/NFTMarket'
import Footer from '../../Components/Footer'
import Responsive from '../../Components/Responsive'

function NFTMarketPlace() {
    return (
        <div className="background-nft">
           
          <Responsive />
        <div className="container">
            <NTFMarket />
            <h2 style={{marginTop:45,marginBottom:50,textAlign:"center"}}>Rare NFT</h2>
            <div  className="nft-market-place">
            {
                rares.map((rare)=>(
                    <div data-aos="zoom-in-up">
                        <img src={rare.img} className="image-card" />
                        </div>
                ))
            }
            </div>
            <h2 style={{marginTop:45,marginBottom:50,textAlign:"center"}}>Standard NFT</h2>
            <div className="nft-market-place">
            {
                standards.map((standard)=>(
                    <div data-aos="zoom-in-up">
                        <img src={standard.img} className="image-card" />
                        </div>
                ))
            }
            </div>
            <h2 style={{marginTop:45,marginBottom:50,textAlign:"center"}}>Mythical NFT</h2>
            <div className="nft-market-place">
            {
                mythicals.map((mythical)=>(
                    <div data-aos="zoom-in-up">
                        <img src={mythical.img} className="image-card" />
                        </div>
                ))
            }
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default NFTMarketPlace
