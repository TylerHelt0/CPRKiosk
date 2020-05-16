import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Resources/Images/thereal.svg";

const ThankYou = () => {

  return (
    <header className="App-header ThankYou">
      <div className="trans-background">
        <Link to="/">
          <img className="App-logo" src={Logo} alt="company logo" />
        </Link>
        <br></br>
        <p>
          Thank you for choosing us! Leave your device with the technician
          behind the desk!
        </p>
      </div>
    </header>
  );
};

export default ThankYou;
