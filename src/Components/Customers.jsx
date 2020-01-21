import React from 'react'

const Customers = ({ state }) => {

	//defining function to help render list of customers, returns
	//div with an li and p tags for every customer in 
	// state.customers
	const customerList = () => state.customers.map((customer) => {
		return (
			<div key={customer.id}>
				<li>{customer.FirstName} {customer.LastName}</li>
				<p>{customer.PhoneNumber}</p>
				<p>{customer.Email}</p>
			</div>
		)
	})

	//customersList() runs at render and populates the ol
	return (
		<div className='customers-list'>
			<ol>
			{customerList()}
			</ol>
		</div>
	)
}

export default Customers