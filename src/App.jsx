import React, {useState,useEffect, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Components/Customers'
import Form from './Components/Form'
import axios from 'axios'


const App = () => {

	const [state, setState] = useState({
		customers:[]
	})
	
	useEffect( () => {
		axios.get('http://71.150.156.98:1337/customers/')
		.then( (res) => {
			setState({...state,customers:res.data})
		})
	},[])
	
	console.log(state.customers)

  	return (
    		<div className="App">
      			<header className="App-header">
        			<img src={logo} className="App-logo" alt="logo" />
        			<Form />
					<Customers state={state}/>
      			</header>
    		</div>
  );
}

export default App;
