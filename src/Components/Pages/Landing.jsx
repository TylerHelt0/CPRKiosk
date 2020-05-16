import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import CheckinButton from '../../Resources/Images/checkin.png';
import Logo from '../../Resources/Images/thereal.svg';
import Legal from '../Legal';
import * as Styles from '../../Styles/App';

const Landing = ({ state, setState }) => {
    
    useEffect(() => {
        if (state.customers.length <= 1) {
            setState({ ...state, refreshCustomers: true });
        }
    }, [state.customers]);

    return (
        <header style={Styles.Landing}>
            <div style={Styles.TransBackground}>
                <img style={Styles.AppLogo} src={Logo} alt='company logo' />
                <p>Welcome To Our Self Check In Kiosk!</p>
                <div style={Styles.LandingButtons}>
                    <Link to='/CheckIn'>
                        <img src={CheckinButton} alt='Checkin' />
                    </Link>
                    <Link to='/Lookup'>
                        <img src={CheckinButton} alt='Lookup Info' />
                    </Link>
                </div>
            </div>
            <div className='AppTOS'>
                <Legal
                    state={state}
                    setState={setState}
                    trigger={<p>Kiosk Legal Information</p>}
                />
            </div>
        </header>
    );
};

export default Landing;
