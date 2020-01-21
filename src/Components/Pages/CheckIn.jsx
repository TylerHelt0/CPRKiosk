/* eslint-disable react/prop-types */
import React from 'react'
import logo from '../../logo.svg';
import Customers from '../Customers'
import Form from '../Form'

const Checkin = ({ state,setState }) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Form state={state} setState={setState}/>
            <Customers state={state} />
        </header>
    )
}

export default Checkin