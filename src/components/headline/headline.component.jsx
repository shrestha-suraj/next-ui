import React from 'react'
import './headline.styles.scss'
import {ReactComponent as MailIcon} from '../../assets/mail.svg'
import {ReactComponent as BellIcon} from '../../assets/bell.svg'
import {ReactComponent as PersonIcon} from '../../assets/person.svg'
import {ReactComponent as DropIcon} from '../../assets/down.svg'

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
                <PersonIcon style={{border:'1px solid black',borderRadius:'50%'}}/>
                <span className="userName">Me</span>
                <span className="drop-down-icon">
                    <DropIcon style={{width:'100%',height:'100%'}}/>
                </span>
            </div>
        </div>
    )
}

export default Headline