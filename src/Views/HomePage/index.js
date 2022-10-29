import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import Partners from '../../Components/Partners';
import RoadMap from '../../Components/RoadMap';
import Aos from 'aos';
import logo from '../../assets/Images/logo.png'
import MetaVerse from '../../Components/MetaVerse';
import PlayToEarn from '../../Components/PlayToEarn';
import Rewards from '../../Components/Rewards';
import CollectNFT from '../../Components/CollectNFT';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import medium from '../../assets/SvgIcon/medium.svg'
import { Link } from 'react-router-dom';
import whitepaper from '../../assets/Pdf/whitepaper.pdf'

function HomePage() {
    const [showtab,setShowTab]=useState(true)
    useEffect(() => {
       Aos.init({duration:3000})
    },[])
   const handlebutton=()=>{
        setShowTab(!showtab)
    }
   const handleLink=()=>{
    setTimeout(() => window.location.reload(), 300)
    }
    return (
        <div>
            <div className="background-image">
            <div className="header header-fixed">
        <div className="navbar container">
            <div className="logo">
            <Link  to="/"><img src={logo} className="logo" /></Link>
                </div>
            <input type="checkbox" id="navbar-toggle" />
            <label for="navbar-toggle"><i></i></label>
            <nav className="menu">
                <ul>
                <div className="drop-btn">
            <li onClick={handleLink}><Link to="/">Metaverse</Link></li>
            <div className="drop-down">
            <li><a href="#partners">Partners</a></li>
            <li><a href={whitepaper}>Whitepaper</a></li>
            <li><a href="#road-map">RoadMap</a></li>
            </div>
            </div>
            <div className="dropbtn2">
            <li><Link  to="/nft">NFT Martketplace</Link></li>
            <div className="drop-down2">
            <li><Link  to="/nft">Standard NFTs</Link></li>
            <li><Link  to="/nft">Rare NFTs</Link></li>
            <li><Link  to="/nft">Mythical NFTs</Link></li>
            </div>
            </div>
            <li><Link to="/farming">Farming</Link></li>
            <li><Link to="/about-us">About PKV</Link></li>
            <li><Link to="/coming-soon">Play Now</Link></li>
            
            {/* <button className="header-button">One Pager</button> */}
           
                </ul>
            </nav>        
        </div>
    </div>
        <Header />
        </div>
           <div id="metaverse">
               <MetaVerse />
           </div>
           <div>
               <PlayToEarn />
           </div>
           <div>
               <Rewards />
           </div>
           <div>
               <CollectNFT />
           </div>
           <div id="partners">
            <Partners />
            </div>
            <div id="road-map">
            <RoadMap />
            </div>
            {/* <FAQ /> */}
            
            <div>
            <footer className="footer-background">
            <div  className="container footer-grid ">
        <div className="join-content">
            <h2>Join the PolaVerse Community</h2>
            <h3>Complete daily missions to Earn $CPKV which will be redeemable to $PKV at the end of each event. </h3>
            <a href=" https://t.me/polkafinanceorg" target="blank" > <button className="header-button">Join Us</button></a>
        </div>
        <div>
        <ul className="footer-nav">
            <li><h3 style={{textAlign:'center',color:'grey',fontSize:23}}>Technical</h3></li>
            <li><a  href="#metaverse">Metaverse</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#news">Whitepaper</a></li>
            <li><a href="#road-map">RoadMap</a></li>
            <li><Link  to="/ntf">NFT Martketplace</Link></li>
            </ul>
        </div>
        <div>
        <h3 style={{textAlign:'center',color:'grey',fontSize:23}}>Contact Us</h3>
        <ul className="footer-icons  ">
                <li><p className="link-nav"><a href="mailto:admin@polkaverse.info"><EmailIcon style={{width:"40px",height:"37px"}} /></a></p></li>
                <li><p className="link-nav"><a href="https://medium.com/@PolkaFinanceorg" target="blank"><img src={medium} /></a></p></li>
                <li><p className="link-nav"><a href="https://twitter.com/Polkafinanceorg" target="blank"><TwitterIcon style={{width:"40px",height:"37px"}} /></a></p></li>
                <li><p className="link-nav"><a href=" https://t.me/polkafinanceorg" target="blank"> <TelegramIcon style={{width:"40px",height:"37px"}} /></a></p></li>
            </ul>
        </div>
        </div>
        <div className="container bottom-footer">
            <h4>© 2021 PKV Project. All rights reserved.</h4>
            <p>The Polkaverse is the first contemporary blockchain based Free to Play and Earn Game. Its an open and decentralised virtual universe built using UNITY and CRYENGINE.</p>
        </div>
        </footer>
            </div>
           
        </div>
    )
}

export default HomePage
