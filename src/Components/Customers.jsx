/* eslint-disable react/prop-types */
import React from 'react'

const Customers = ({ state }) => {

	const customerList = () => state.customers.map((customer) => {
		return (
			<div key={customer.id}>
				<li>{customer.FirstName} {customer.LastName}</li>
				<p>{customer.Phone}</p>
			</div>
		)
	})

	return (
		<div className='customers'>
			{customerList()}
		</div>
	)
}

export default Customers