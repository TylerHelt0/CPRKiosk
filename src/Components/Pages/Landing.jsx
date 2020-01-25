import React from 'react'
import { Link } from 'react-router-dom'

import Checkin from '../../Resources/Images/checkin.png';
import Logo from '../../Resources/Images/logo.svg';
import '../../Resources/Fonts/Avenir-Heavy.ttf'


const Landing = () => {
    return (
        <header className='App-header Landing'>
            <img src={Logo} alt="company logo"/>
            <p>Welcome To Our Self Check In Kiosk!</p>         
            <Link to='/CheckIn'><img src={Checkin} alt="checkinbutton" /></Link>
        </header>
    )
}

export default Landing