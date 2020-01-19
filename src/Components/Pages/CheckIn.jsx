/* eslint-disable react/prop-types */
import React from 'react'
import logo from '../../logo.svg';
import Customers from '../Customers'
import Form from '../Form'

const Checkin = ({ state }) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Form />
            <Customers state={state} />
        </header>
    )
}

export default Checkin