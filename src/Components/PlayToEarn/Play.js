import React, { useEffect, useState } from 'react'
import game from '../../assets/SvgIcon/game.svg'
import fire from '../../assets/SvgIcon/fire.svg'
import electric from '../../assets/SvgIcon/electric.svg'
import danger from '../../assets/SvgIcon/danger.svg'
import mythical1 from '../../assets/Images/mythical2.png'
import mythical2 from '../../assets/Images/mythical4.png'
import rare1 from '../../assets/Images/rare1.png'
import standard2 from '../../assets/Images/standard1.png'

function Play() {
    const [tabs,setTabs]=useState(1)
    const handleTabs = (activeContent) => {
        setTabs(activeContent)
    }
    useEffect(() => { 
         setTimeout(()=>{      
             if(tabs<4){
                setTabs(tabs +1)
             }else{
                 setTabs(1)
             }
            
        },2000)
    })

    
      
    return (
        <div className="stepper">
             <div className="nft-heading">
                 <img  className={tabs===1?"active-card":"not-active-card"} onClick={()=>handleTabs(1)} src={game} />
                    <img  className={tabs===2?"active-card":"not-active-card"} onClick={()=>handleTabs(2)} src={fire} />
                    <img  className={tabs===3?"active-card":"not-active-card"} onClick={()=>handleTabs(3)} src={electric} />
                    <img  className={tabs===4?"active-card":"not-active-card"} onClick={()=>handleTabs(4)} src={danger} />

             </div>
             <div>
             <div className={tabs===1? "active-content": "hide-content" } >
                 <div className="active-image-tab">
                 <p>NFTs can be traded via Polka NFT Marketplace using $PKV. Rare and mythical beasts can be exchanged via marketplace and used in-game. </p>
                 <img src={mythical1} className="card-image-tab" width="60%" />
                 </div>
             </div>
             <div className={tabs===2? "active-content": "hide-content" } >
                 <div className="active-image-tab">
                 <p>Mythical Games is pioneering the idea of “playable NFTs,” using NFT technology to uniquely identify game characters so players can truly own them. </p>
                 <img src={rare1} className="card-image-tab" width="60%" />
                 </div>
             </div>
             <div className={tabs===3? "active-content": "hide-content" } >
                 <div className="active-image-tab">
                 <p>A Non-Fungible Token or an NFT is a token that identifies something unique on a blockchain. </p>
                 <img src={standard2} className="card-image-tab" width="60%" />
                 </div>
             </div>
             <div className={tabs===4? "active-content": "hide-content" } >
                 <div className="active-image-tab">
                 <p>NFTs can be traded via Polka NFT Marketplace using $PKV. Rare and mythical beasts can be exchanged via marketplace and used in-game.  </p>
                 <img src={mythical2} className="card-image-tab" width="60%" />
                 </div>
             </div>
             </div>
        </div>
    )
}

export default Play
