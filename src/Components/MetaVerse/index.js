import React,{useState} from 'react'
import game from '../../assets/Images/game.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './metaverse.css'
function MetaVerse() {
    return (
        <div className="features">
        <div className="container ">
            <div className="metaverse">
                <img data-aos="zoom-in" src={game} width="100%" />
                <div data-aos="fade-left">
                <h2>The polkaverse Gaming Universe</h2>
                <p>The Polkaverse is the first contemporary blockchain based Free to Play and Earn Game. Its an open and decentralised virtual universe built using UNITY and CRYENGINE. Polkaverse users will be able to trade Land, NFTs and assets within the polka metaverse. </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MetaVerse
