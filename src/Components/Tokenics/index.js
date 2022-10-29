import React,{Component} from 'react'
import './tokenics.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'

class Tokenics extends Component  {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
        }
    }
    countUp = (exec,max) => {
        let count = 0;
        const countHandle = setInterval(()=>{
          exec();
          if(count++>max-2)clearInterval(countHandle);
        },100);
      }
      
      restart = () => {
        this.setState({
          count: 0
        });
        this.countUp(
          ()=>{
            this.setState(prevState => ({
              count: prevState.count+ 1,
            }));
          },100);
      }
    
      componentDidMount() {
    
        this.countUp(
          ()=>{
            this.setState(prevState => ({
              count: prevState.count+ 1,
            }));
          },10);
    
      }
    
    render(){
    return (
        <div>
              <div className="rocket-image">
            <div className="container">
                <div className="small-images-div">
                {/* <div className="ab-position-div">
                <div className="side-images">
                <img src={ab1} width="76%" />
                <img src={ab2} width="76%" />
                </div>
                <img src={ab3} width="51%" />
                <div className="countup">
                <h2 >{this.state.count}K</h2>
                </div>
                </div> */}
                <div data-aos="fade-right">
                    
                    {/* <h3 className="orange-heading">COMMUNITY ALWAYS COMES FIRST.</h3> */}
                    <h2 className="rocket-heading">Tokenomics.</h2>
                    <p className="rocket-info">At PolkaVerse tokens will be utilized to support and govern the community. The token will function as both a governance token and a utility.</p>
                   <div className="stats-div">
                    <div>
                        <h1>Name </h1>
                        <p>Polka Verse</p>
                    </div>
                    <div>
                        <h1>Total Supply</h1>
                        <p>500,000,000</p>
                    </div>
                    <div>
                        <h1>Ticker</h1>
                        <p>PKV </p>
                    </div>
                    <div>
                        <h1>Initial Supply </h1>
                        <p>15%</p>
                    </div>
                    <div>
                        <h1>Token Based</h1>
                        <p>ERC20</p>
                    </div>
                    <div>
                        <h1>Community and Early Adopters</h1>
                        <p>10%</p>
                    </div>
                    <div>
                        <h1>Partnerships and Developments</h1>
                        <p>10%</p>
                    </div>
                    <div>
                        <h1>Farming</h1>
                        <p>50%</p>
                    </div>
                    <div>
                        <h1>In-Game Rewards</h1>
                        <p>10%</p>
                    </div>
                    <div>
                        <h1>Game Develpment (IOS, Android)</h1>
                        <p>5%</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="use-cases">
          <h2>Use Cases</h2>
          <ul class="checkmark">
          <li>PKV can be used to mint, buy and sell NFTs in the Polka NFT Marketplace.</li>
          <li>PKV holders can stake their tokens with tremendous APYs. PKV holders will also have the power to vote for changes in the platform and in gam</li>
          <li>PKV can be used to unlock mythical Beasts in game to rule the world of Polkaverse which will earn them generous rewards. </li>
        <li>Later after the mainnet launch PKV can be used to do transactions with lowest possible fee and instant block time. </li>
        <li>PKV can be used deploy smart contracts on Polkaverse Blockchain.</li>
        </ul>
        </div>
        </div>
    )
}
}

export default Tokenics
