import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";

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
      <div className="Alert">
        <h1>Attention.</h1>
        <p>{props.state.text}</p>
      </div>
    </CSSTransition>
  );
};

export default Alert;
