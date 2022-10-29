import React,{useState} from 'react'
import game from '../../assets/Images/game.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './play-to-earn.scss'
import Play from './Play'

function PlayToEarn() {
    return (
        <div className="features">
        <div className="container ">
            <div className="play-to-earn">
            <h2>Play to Earn Your NFT</h2>
                <div data-aos="fade-left">
                <p>Choose between different elemental Beasts to compete with others in the game and Earn PKV tokens, NFTs and rules the world of polkaverse. 
                    Each Giant has unique strengths and weaknesses based on its categories. With so many categories the possibilities are never ending. </p>
                </div>
                <Play />
            </div>
        </div>
        </div>
    )
}

export default PlayToEarn
