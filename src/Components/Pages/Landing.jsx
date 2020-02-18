import React from "react";
import { Link } from "react-router-dom";

import CheckinButton from "../../Resources/Images/checkin.png";
import Logo from "../../Resources/Images/thereal.svg";
import Legal from "../Legal";
import * as Styles from '../../Styles/App'
import "../../Resources/Fonts/Avenir-Heavy.ttf";

//NOTICE: THIS APP IS NOT TO BE SOLD OR LICENSED AND IS STRICTLY FOR
//LEARNING PURPOSES. THIS APP IS NOT OWNED BY OR AFFILIATED WITH CPR!

const Landing = ({ state, setState }) => {
  return (
    <header style={Styles.Landing}>
      <div style={Styles.TransBackground}>
        <img style={Styles.AppLogo} src={Logo} alt="company logo" />
        <p>Welcome To Our Self Check In Kiosk!</p>
        <div style={Styles.LandingButtons}>
          <Link to="/CheckIn">
            <img src={CheckinButton} alt="checkinbutton" />
          </Link>
          <Link to="/CheckStatus">
            <img src={CheckinButton} alt="checkinbutton" />
          </Link>
        </div>
      </div>
      <div className="AppTOS">
        <Legal
          state={state}
          setState={setState}
          trigger={<p>Kiosk Legal Information</p>}
        />
      </div>
      {/* <Customers state={state} /> */}
    </header>
  );
};

export default Landing;
