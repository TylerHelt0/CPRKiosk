import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Resources/Images/thereal.svg";

import Form from "../Form";

import * as Styles from '../../Styles/App'

//NOTICE: THIS APP IS NOT TO BE SOLD OR LICENSED AND IS STRICTLY FOR
//LEARNING PURPOSES. THIS APP IS NOT OWNED BY OR AFFILIATED WITH CPR!

//This is so called High Order Component that has multiple
//react components inside. We will use the 'Pages' folder instead of
// HOCs because this represents a 'page' of our app
const Checkin = ({ state, setState }) => {
  return (
    <header style={Styles.CheckIn}>
      <div style={Styles.TransBackground}>
        <div style={Styles.Form}>
          <Link to="/">
            <img style={Styles.AppLogo} src={Logo} alt="company logo" />
          </Link>
          <Form state={state} setState={setState} />
        </div>
      </div>
    </header>
  );
};

export default Checkin;
