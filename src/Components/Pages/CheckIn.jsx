import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../Resources/Images/thereal.svg';
import Customers from '../Customers'
import Form from '../Form'

//NOTICE: THIS APP IS NOT TO BE SOLD OR LICENSED AND IS STRICTLY FOR
//LEARNING PURPOSES. THIS APP IS NOT OWNED BY OR AFFILIATED WITH CPR!

//This is so called High Order Component that has multiple
//react components inside. We will use the 'Pages' folder instead of 
// HOCs because this represents a 'page' of our app
const Checkin = ({ state,setState }) => {
    return (
        <header className="App-header CheckIn">
        <div className='trans-background'>
            <Link to='/'><img className='App-logo' src={Logo} alt="company logo"/></Link>
            {/* global state is passed to form, along with setState  */}
            <Form state={state} setState={setState}/>
            {/* <Customers state={state} /> */}
            </div>
        </header>
    )
}

export default Checkin