import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

import * as Server from "../Services/Server";

import Alert from "./Alert";
import TOS from "./TOS";
import * as Styles from "../Styles/App";

//NOTICE: THIS APP IS NOT TO BE SOLD OR LICENSED AND IS STRICTLY FOR
//LEARNING PURPOSES. THIS APP IS NOT OWNED BY OR AFFILIATED WITH CPR!

const CustomerForm = ({ state, setState }) => {
  //Allows ability to redirect to different react component after axios POST,
  // part of react-router-dom
  const history = useHistory();

  // If adding new data fields to send to Strapi, also add label, and input with
  // corresponding value and onChange parameters
  // dataObj is the object sent to strappi/customers POST route
  const formInitialState = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    sms: false
  };

  //Form has its own state distinct from global state. It is structured according to
  //dataObj and is reset when form is submitted. Alert is shown when alert is set to a string.
  const [form, setForm] = useState(formInitialState);
  const [alert,setAlert] = useState(false);

  useEffect(() => {
    if (alert !== false) {
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
  }, [alert]);

  //Enables using react to control input fields
  //Is called by inputs with a text key name of dataObj and prints keystrokes into
  //dataObj field that corresponds to key provided
  const handleTyping = key => {
    return e => setForm({ ...form, [key]:e.target.value});
  };

  //event.preventSefault() stops form from reloading before data is sent
  //Sends data to strappi to make new customer, resets data state to blank dataObj,
  //sets global state.refreshCustomers to reload app and display new list of customers.
  const handleSumbit = event => {
    event.preventDefault();

    //Check if customer exists in already downloaded customers list
    const customer = state.customers.find( (cust) => {
      return cust.email === form.email
    })
    if (typeof customer === 'object') { 
      console.log("Customer "+customer.id+" exists on server")
      return setAlert("Email " + customer.email +" already exists on server.")
    }

    //If not, make new customer, reset form. 
    Server.newCustomer(form)
    .then( response => {
      console.log("Form response: ", response)
      setForm(formInitialState);
      setState({...state,refreshCustomers:true})
      history.push("/ThankYou");
    })
    .catch( error => {
      //Handle problems
      if (error.response.status !== 422) {
        console.log("Form error: ", error)
        setAlert("Error logged to console")
      }
    });
  };

  return (
    <>
      <Alert state={alert} />
      <Form inverted={true} onSubmit={handleSumbit}>
        <Form.Field style={Styles.FormInputText}>
          <label>First name: </label>
          <input
            type="text"
            required
            name="firstname"
            value={form.firstname}
            onChange={handleTyping("firstname")}
          ></input>
        </Form.Field>
        <Form.Field style={Styles.FormInputText}>
          <label>Last name: </label>
          <input
            type="text"
            required
            name="lastname"
            value={form.lastname}
            onChange={handleTyping("lastname")}
          ></input>
        </Form.Field>
        <Form.Field style={Styles.FormInputText}>
          <label>Phone Number: </label>
          <input
            type="text"
            required
            name="phone"
            value={form.phone}
            onChange={handleTyping("phone")}
          ></input>
        </Form.Field>
        <Form.Field style={Styles.FormInputText}>
          <label>Email: </label>
          <input
            type="email"
            required
            name="email"
            value={form.email}
            onChange={handleTyping("email")}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>I Accept SMS Updates</label>
          <input
            type="checkbox"
            name="SMS"
            value={form.sms}
            onChange={handleTyping("sms")}
          ></input>
        </Form.Field>
        <Form.Field>
          <p>
            Please read and agree to the{" "}
            <TOS
              state={state}
              setState={setState}
              trigger={<span className="tos">terms</span>}
            />
          </p>
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default CustomerForm;