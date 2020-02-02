//NOTICE: THIS APP IS NOT TO BE SOLD OR LICENSED AND IS STRICTLY FOR
//LEARNING PURPOSES. THIS APP IS NOT OWNED BY OR AFFILIATED WITH CPR!


//Importing node packages that make code work
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios'

//importing styles and reusable react components
import './App.css';
import Routes from './Components/HOCs/Routes'

//Defines a React Component,  using arrow function (params) => {function body}
const App = () => {

	//Global state of app, can be passed down to child compoenents 
	// with props
	const [state, setState] = useState({
		customers: [],
		refreshCustomers:true,
		tosAccepted:false
	})

	//Runs once when app is started, doesn't run again unless state.refreshCustomers is
	// set to true. After it runs, set refreshCustomers to false. 
	useEffect( () => {
		if (state.refreshCustomers === true) {
			axios.get('https://pttech.repairshopr.com/api/v1/customers?api_key=0b248210-7705-426c-b13a-2c4877c95f21')
			.then( (res) => {
				//Creates new object identical to state, sets custoemers to response data and 
				//sets refreshCustomers to false
				// console.log("App Refresh ",res)
				setState({ ...state, customers: res.data, refreshCustomers:false})
			})
		}
	}, [state])

	console.log('App State:',state.customers)

	//Renders html/other react components
	return (
		<div className="App">
			{/* enables using address bar for different 'pages' */}
			<Router>
				{/* <Routes> = contains all possible 'pages' for address bar */}
				{/* props pass state to child component,
				 e.g. state(prop)={state(global state)} */}
				<Routes state={state} setState={setState} />
			</Router>
		</div>
	);
}

//Every react component needs an export, this is how imports work
export default App;
