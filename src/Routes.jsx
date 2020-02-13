import React, {useEffect} from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

//Loading other react components for use as app 'pages'
import Checkin from "./Components/Pages/CheckIn";
import Landing from "./Components/Pages/Landing";
import ThankYou from "./Components/Pages/ThankYou";
import Ticket from "./Components/Pages/Ticket";

import './Styles/Transitions/RouteTransition.css'

//prop from previous component 'state' destructured for use as
// 'state' in this Component, and passed to children
const Routes = ({ state, setState }) => {
  const history = useHistory();
  console.log("History: ", history);

  useEffect(() => {
    setTimeout(() => {
      if (history.location.pathname.toUpperCase() === "/THANKYOU") {
        history.push("/");
      }
    }, 7500);
  });

  return (
    <>
      {/* List of react components and the address bar paths that 
        render them */}
      <TransitionGroup appear enter exit component={null}>
        <CSSTransition
          key={history.location.key}
          timeout={600}
          classNames={"route-transition"}
        >
          <Switch location={history.location}>
            <Route
              exact
              path="/"
              render={() => <Landing state={state} setState={setState} />}
            ></Route>
            <Route
              path="/CheckIn"
              render={() => <Checkin state={state} setState={setState} />}
            ></Route>
            <Route path="/ThankYou" render={() => <ThankYou />}></Route>
            <Route
              path="/Ticket"
              render={() => <Ticket state={state} setState={setState} />}
            ></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

// When react components are rendered by other components, they are used like html
// elements e.g. Landing is <Landing /> CheckIn is <CheckIn />. This will render
// the entire react component at the tags CaretPosition.

export default Routes;