import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";

import * as Styles from './Styles/App'
import './Styles/Transitions/AlertTransition.css'

const Alert = props => {
  const history = useHistory();

  return (
    <CSSTransition
      appear
      exit
      in={props.state.show}
      timeout={5000}
      classNames="Alert"
    >
      <div style={Styles.Alert}>
        <h1>Alert!</h1>
        <p>{props.state.text}</p>
      </div>
    </CSSTransition>
  );
};

export default Alert;
