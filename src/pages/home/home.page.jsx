import React from 'react'
import './home.styles.scss'
import Headline from '../../components/headline//headline.component'
import InPageNavigation from '../../components/inpagenavigation/inpagenavigation.component'

const HomePage=props=>{

    return(
        <div className="home-page">
            <Headline/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</span>
            <InPageNavigation/>
        </div>
    )
}

export default HomePage