import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Farming from '../../Components/Farming'
import Responsive from '../../Components/Responsive'

function FarmingPage() {
    return (
        <div>
            <div className="background-nft">
            <Responsive />
           <Farming />
            </div>
            <Footer />
        </div>
    )
}

export default FarmingPage
