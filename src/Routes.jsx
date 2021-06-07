import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//Loading other react components for use as app 'pages'
import Checkin from './Components/Pages/CheckIn';
import Devices from './Components/Pages/Devices';
import Landing from './Components/Pages/Landing';
import Lookup from './Components/Pages/Lookup';
import ThankYou from './Components/Pages/ThankYou';

import './Styles/Transitions/RouteTransition.css';

//prop from previous component 'state' destructured for use as
// 'state' in this Component, and passed to children
const Routes = ({ state, setState }) => {
    const history = useHistory();
    console.log('History: ', history);

    useEffect(() => {
        setTimeout(() => {
            if (history.location.pathname.toUpperCase() === '/THANKYOU') {
                history.push('/');
            }
        }, 7500);
    });

    const routes = [
        { path: '/', name: 'Landing', Component: Landing},
        { path: '/checkIn', name: 'Checkin', Component: Checkin},
        { path: '/lookup/devices', name: 'Devices', Component: Devices},
        { path: '/lookup', name: 'Lookup', Component: Lookup},
        { path: '/thankYou', name: 'ThankYou', Component: ThankYou}
    ]

    return (
        <React.Fragment>
            {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="route-transition"
                  unmountOnExit
                >
                  <div className="page">
                    <Component state={state} setState={setState}/>
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </React.Fragment>
    );
};


// When react components are rendered by other components, they are used like html
// elements e.g. Landing is <Landing /> CheckIn is <CheckIn />. This will render
// the entire react component at the tags CaretPosition.

export default Routes;