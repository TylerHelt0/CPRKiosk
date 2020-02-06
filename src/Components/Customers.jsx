import React from "react";

const Customers = ({ state }) => {
  //defining function to help render list of customers, returns
  //div with an li and p tags for every customer in
  // state.customers
  const customerList = () =>
    state.customers.map(customer => {
      console.log(customer);
      return (
        <li key={customer.id}>
          <div>
            <p>{customer.fullname}</p>
            <p>{customer.phone}</p>
            <p>{customer.email}</p>
          </div>
        </li>
      );
    });

  //customersList() runs at render and populates the ol
  return (
    <div className="Customers-list">
      <ol>{customerList()}</ol>
    </div>
  );
};

export default Customers;
