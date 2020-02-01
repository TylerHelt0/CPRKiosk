import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import Checkin from '../../Resources/Images/checkin.png';
import Logo from '../../Resources/Images/thereal.svg';
import Legal from '../Legal'
import '../../Resources/Fonts/Avenir-Heavy.ttf'

//NOTICE: THIS APP IS NOT TO BE SOLD OR LICENSED AND IS STRICTLY FOR
//LEARNING PURPOSES. THIS APP IS NOT OWNED BY OR AFFILIATED WITH CPR!

const Landing = ({state,setState}) => {
    return (
        <header className='App-header Landing'>
            <img src={Logo} alt="company logo" />
            <p>Welcome To Our Self Check In Kiosk!</p>
            <Link to='/CheckIn'><img src={Checkin} alt="checkinbutton" /></Link>
            <div className='Landing-KioskTOS'>
                {/* <Link to='/KioskTOS'>TOS For Establishment</Link> */}
                <Legal state={state} setState={setState} trigger={<p>Kiosk Legal Information</p>} />
            </div>
        </header>
    )
}

export default Landing