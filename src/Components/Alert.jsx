import React from "react";
import { CSSTransition } from "react-transition-group";

import * as Styles from '../Styles/App'
import '../Styles/Transitions/AlertTransition.css'

const Alert = ({state}) => {
  return (
    <CSSTransition
      appear
      exit
      in={state ? true : false}
      timeout={5000}
      classNames="Alert"
    >
      <div style={Styles.Alert}>
        <h1>Alert!</h1>
        <p>{state}</p>
      </div>
    </CSSTransition>
  );
};

export default Alert;
