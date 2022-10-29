import React from 'react'
import logo from '../../assets/Images/logo.png'
import './header.css'
import whitepaper from '../../assets/Pdf/whitepaper.pdf'

function Header() {
    
    return (
        <div>
        <div className="hero-content container">
        <div >
          <h1 style={{textAlign:'start'}}>The Polkaverse Gaming Universe</h1>
          {/* <h3>Stake Farm Lend Borrow Buy and Sell NFTs first time</h3> */}
          <h2>The Polkaverse is the first contemporary blockchain based Free to Play and Earn Game. Its an open and decentralised virtual universe built using UNITY and CRYENGINE.</h2>
       <div className="button-dev">
       <a href={whitepaper}><button className="header-button">Whitepaper</button></a>
       {/* <button className="transparent-button">PolyBridge</button> */}
       </div>
       </div>
       <div>
           {/* <img src={market2} width="500px"/> */}
       </div>
        {/* </div> */}
        </div>
        </div>
    )
}

export default Header
