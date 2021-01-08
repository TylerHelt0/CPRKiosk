import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Resources/Images/thereal.svg";

import Form from "../Form";

import * as Styles from "../../Styles/App";

const Checkin = ({ state, setState }) => {
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
                    <h2>Please enter your information to begin checkin, and don't fucking talk to me until then.</h2>
                    <Form state={state} setState={setState} />
                </div>
            </div>
        </header>
    );
};

export default Checkin;
