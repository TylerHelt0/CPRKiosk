import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
    return (
        <header className='App-header'>
            <button><Link to='/CheckIn'>CheckIn</Link></button>
        </header>
    )
}

export default Landing