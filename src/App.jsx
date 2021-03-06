//Importing node packages that make code work
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as Server from "./Services/Server";

//importing styles and reusable react components
import * as Styles from "./Styles/App";
import Routes from "./Routes";

//Defines a React Component, using arrow function (params) => {function body}
const App = () => {
    //Global state of app, can be passed down to child compoenents
    // with props
    const initialState = {
        customers: [],
        refreshCustomers: false,
        tosAccepted: false,
    };

    const [state, setState] = useState(initialState);

    //Runs once when app is started, doesn't run again unless state.refreshCustomers is
    //set to true. After it runs, set refreshCustomers to false.
    useEffect(() => {
        if (state.refreshCustomers === true) {
            console.log("Refreshing Customers list...");
            Server.refreshCustomers().then((res) => {
                setState({
                    ...state,
                    customers: res.data.customers,
                    refreshCustomers: false,
                });
            });
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
