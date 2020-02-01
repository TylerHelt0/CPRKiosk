import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Logo from '../../Resources/Images/thereal.svg';

//NOTICE: THIS APP IS NOT TO BE SOLD OR LICENSED AND IS STRICTLY FOR
//LEARNING PURPOSES. THIS APP IS NOT OWNED BY OR AFFILIATED WITH CPR!


const ThankYou = () => {
    const history = useHistory()

 useEffect(() => {
        setTimeout(() => {
            if (history.location.pathname === '/ThankYou') {
                history.push('/')
            }
        }, 7500)
    })

    return (
        <header className='App-header ThankYou'>
            <div className='trans-background'>
                <Link to='/'><img className='App-logo' src={Logo} alt="company logo" /></Link>
                <br></br>
                <p>Thank you for choosing us! Leave your device with the technician behind the desk!</p>
            </div>
        </header>

    )
}

export default ThankYou