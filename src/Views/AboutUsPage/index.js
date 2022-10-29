import React, { useEffect, useState } from 'react'
import AboutUs from '../../Components/AboutUs'
import Footer from '../../Components/Footer'
import Tokenics from '../../Components/Tokenics'
import Responsive from '../../Components/Responsive'

function AboutUsPage() {
    return (
        <div>
            <div className="background-nft">
           <Responsive />
            <AboutUs />
            <Tokenics />
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage
