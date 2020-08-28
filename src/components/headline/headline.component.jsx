import React from 'react'
import './headline.styles.scss'
import {ReactComponent as MailIcon} from '../../assets/mail.svg'
import {ReactComponent as BellIcon} from '../../assets/bell.svg'

const Headline=props=>{
    return(
        <div className="headline">
            <h1 className="headline-text">Choose Your Team</h1>
            <div className="headline-profile">
                <div className="mail-notification">
                    <MailIcon/>
                    <div className="notification-number">
                        <span>1</span>
                    </div>
                </div>
                <div className="bell-notification">
                    <BellIcon/>
                    <div className="notification-number">
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headline