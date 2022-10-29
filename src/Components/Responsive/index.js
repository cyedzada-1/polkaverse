import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './responsive.css'
import whitepaper from '../../assets/Pdf/whitepaper.pdf'
import logo from '../../assets/Images/logo.png'
import Aos from 'aos'

function Responsive() {
    // const [pageURL, setPageURL] = useState(0);
    // useEffect(() => {
    //   setPageURL(window.location.href);
    // })
    useEffect(() => {
        Aos.init({duration:3000})
     },[])
    //  const handleLink=()=>{
    //      console.log("the button is click")
    //  }
    
    const handleLink=()=>{
        setTimeout(() => window.location.reload(), 100)
        }
    return (
        <div>
        <div className="header header-fixed">
        <div className="navbar container">
            <div className="logo">
            <Link to="/"><img src={logo} className="logo" /></Link>
            </div>
            <input type="checkbox" id="navbar-toggle" />
            <label for="navbar-toggle"><i></i></label>
            <nav className="menu">
            <ul>
            <div className="drop-btn">
            <li><Link to="/">Metaverse</Link></li>
            <div className="drop-down">
            <li><Link to="/">Partners</Link></li>
            <li><a href={whitepaper}>Whitepaper</a></li>
            <li><Link to="/">RoadMap</Link></li>
            </div>
            </div>
            <div className="dropbtn2">
            <li onClick={handleLink} ><Link to="/nft">NFT Martketplace</Link></li>
            <div className="drop-down2">
            <li><Link  to="/nft">Standard NFTs</Link></li>
            <li><Link  to="/nft">Rare NFTs</Link></li>
            <li><Link  to="/nft">Mythical NFTs</Link></li>
            </div>
            </div>
            <li onClick={handleLink}><Link to="/farming">Farming</Link></li>
            <li onClick={handleLink}><Link to="/about-us">About PKV</Link></li>
            <li onClick={handleLink}><Link to="/coming-soon">Play Now</Link></li>
            </ul>
            </nav>        
        </div>
    </div>
          
        </div>
    )
}

export default Responsive
