import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
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

	const customerList = () => state.customers.map( (customer) => {
		return (
			<div key={customer.id}>
			<li>{customer.FirstName} {customer.LastName}</li>
			<p>{customer.Phone}</p>
			</div>
		)
	})

  	return (
    		<div className="App">
      			<header className="App-header">
        			<img src={logo} className="App-logo" alt="logo" />
        			<Form />
					<div className='customers'>
						{customerList()}
					</div>	
      			</header>
    		</div>
  );
}

export default App;
