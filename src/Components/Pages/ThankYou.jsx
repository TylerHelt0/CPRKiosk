import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

import Logo from '../../Resources/Images/obbybest1.svg';


const ThankYou = () => {
    const history = useHistory()

    useEffect( ()=>{
        setTimeout( ()=>{
            if (history.location.pathname === '/ThankYou') {
                history.push('/')
            }
        }, 7500)
    })
    
    return (
        <header className='App-header'>
        <Link to='/'><img className='App-logo' src={Logo} alt="company logo"/></Link>
        <p>Cell Phone Repair</p><br></br>
        <p>Thank you for choosing us! Leave your device with the technician behind the desk!</p>

        </header>

    )
}

export default ThankYou