import React from 'react'
import './coming-son.scss'
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import medium from '../../assets/SvgIcon/medium.svg'
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom';
import Resposnsive from '../../Components/Responsive'
function ComingSoon() {
    return (
        <div className="background-color"> 
             <Resposnsive />
        <div className="coming-soon">
            <div style={{textAlign:"center"}}>
               <Link to="/"> <img src={logo} style={{background:"white"}}/></Link>
            <h1>Coming Soon</h1><br />
            <ul className="footer-icons">
                <li><p className="link-nav"><a href="info@polkafinance.org" target="blank"><EmailIcon style={{width:"40px",height:"37px"}} /></a></p></li>
                <li><p className="link-nav"><a href="https://medium.com/@PolkaFinanceorg" target="blank"><img src={medium} /></a></p></li>
                <li><p className="link-nav"><a href="https://twitter.com/Polkafinanceorg" target="blank"><TwitterIcon style={{width:"40px",height:"37px"}} /></a></p></li>
                <li><p className="link-nav"><a href=" https://t.me/polkafinanceorg" target="blank"> <TelegramIcon style={{width:"40px",height:"37px"}} /></a></p></li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default ComingSoon
