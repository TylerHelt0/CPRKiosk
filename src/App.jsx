//NOTICE: THIS APP IS NOT TO BE SOLD OR LICENSED AND IS STRICTLY FOR
//LEARNING PURPOSES. THIS APP IS NOT OWNED BY OR AFFILIATED WITH CPR!

//Importing node packages that make code work
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as Server from './Services/Server'

//importing styles and reusable react components
import * as Styles from './Components/Styles/Styles';
import Routes from "./Components/HOCs/Routes";

//Defines a React Component,  using arrow function (params) => {function body}
const App = () => {
  //Global state of app, can be passed down to child compoenents
  // with props
  const initialState = {
    customers: [],
    refreshCustomers: true,
    tosAccepted: false
  };

  const [state, setState] = useState(initialState);

  //Runs once when app is started, doesn't run again unless state.refreshCustomers is
  // set to true. After it runs, set refreshCustomers to false.
  useEffect(() => {
    if (state.refreshCustomers === true) {
      Server.refreshCustomers(state,setState)
    }
  }, [state]);

  console.log("App State:", state);

  //Renders html/other react components
  return (
    <div style={Styles.App}>
      {/* enables using address bar for different 'pages' */}
      <Router>
        {/* <Routes> = contains all possible 'pages' for address bar */}
        {/* props pass state to child component,
				 e.g. state(prop)={state(global state)} */}
        <Routes state={state} setState={setState} />
      </Router>
    </div>
  );
};

//Every react component needs an export, this is how imports work
export default App;
