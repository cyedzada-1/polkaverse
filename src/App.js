import logo from './logo.svg';
import './App.css';
import HomePage from './Views/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NFTMarketPlace from './Views/NFTMarket';
import AboutUsPage from './Views/AboutUsPage';
import FarmingPage from './Views/FarmingPage';
import ComingSoon from './Views/ComingSoon';
import React,{useState} from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function App() {
  const [position, setPosition] = useState({top: 0, left: 0})
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth'
    })
  })
   
  const [visibility, setVisibility] = React.useState(false)
  const scrollTop = React.useRef()
   React.useEffect(( ) => {
     window.addEventListener('scroll', (e) => {
      window.scrollY > 200 
      ? scrollTop.current.style.display = 'inline-block'
      : scrollTop.current.style.display = 'none'
    })
   }) 
  return (
    <div className="app-behavior">
          <span 
        onClick={() => setPosition({...position, position: {top: 0, left: 0}})}  className="circle"
        ref={scrollTop}
      ><ArrowUpwardIcon style={{fontSize:"30px",fill:"white",marginLeft:"-7px",marginTop:"-7px"}} /></span>
      <Router >
        
       <Switch>
          <Route exact path="/" ><HomePage /></Route>
          <Route path="/nft"><NFTMarketPlace /></Route>
          <Route path="/about-us" ><AboutUsPage /></Route>
          <Route path="/coming-soon" ><ComingSoon /></Route> 
          <Route path="/farming"><FarmingPage /></Route>
          <Route path="*"><ComingSoon /></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
