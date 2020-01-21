import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Routes from './Components/HOCs/Routes'
import axios from 'axios'


const App = () => {

	const [state, setState] = useState({
		customers: [],
		refreshCustomers:false
	})

	useEffect( () => {
		axios.get('http://34.73.118.152:1337/customers/')
		.then( (res) => {
			setState({ ...state, customers: res.data, refreshCustomers:false})
		})
	}, [state.refreshCustomers === true])

	console.log(state.customers)

	return (
		<div className="App">
			<Router>
				<Routes state={state} setState={setState} />
			</Router>
		</div>
	);
}

export default App;
