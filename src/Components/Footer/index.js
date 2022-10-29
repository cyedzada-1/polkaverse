import React from 'react'
import './footer.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import medium from '../../assets/SvgIcon/medium.svg'
import { Link } from 'react-router-dom';
import whitepaper from '../../assets/Pdf/whitepaper.pdf'
function Footer() {
    return (
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
            <li><Link  to="/">Metaverse</Link></li>
            <li><Link  to="/">Partners</Link></li>
            <li><a href={whitepaper}>Whitepaper</a></li>
            <li><Link  to="/">RoadMap</Link></li>
            <li><Link  to="/nft">NFT Martketplace</Link></li>
            </ul>
        </div>
        <div>
        <h3 style={{textAlign:'center',color:'grey',fontSize:23}}>Contact Us</h3>
        <ul className="footer-icons">
                <li><p className="link-nav"><a href="mailto:admin@polkaverse.info" ><EmailIcon style={{width:"40px",height:"37px"}} /></a></p></li>
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
    )
}

export default Footer
