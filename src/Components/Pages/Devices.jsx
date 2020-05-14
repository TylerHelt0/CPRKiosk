import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../Resources/Images/thereal.svg";

import * as Styles from '../../Styles/App'

const Devices = () => {
    return (
        <header style={Styles.CheckIn}>
            <div style={Styles.TransBackground}>
                <div style={Styles.Form}>
                    <Link to="/">
                        <img
                            style={Styles.AppLogo}
                            src={Logo}
                            alt="company logo"
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Devices