import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../logo.svg';
import Customers from '../Customers'
import Form from '../Form'

//This is so called High Order Component that has multiple
//react components inside. We will use the 'Pages' folder instead of 
// HOCs because this represents a 'page' of our app
const Checkin = ({ state,setState }) => {
    return (
        <header className="App-header">
            <Link to='/'><img className='App-logo' src={Logo} alt="company logo"/></Link>
            {/* global state is passed to form, along with setState  */}
            <Form state={state} setState={setState}/>
            {/* <Customers state={state} /> */}
        </header>
    )
}

export default Checkin