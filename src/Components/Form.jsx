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
  // If adding new data fields to send to Strapi, also add label, and input with
  // corresponding value and onChange parameters
  // dataObj is the object sent to strappi/customers POST route
  const formInitialState = {
    data:{
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      sms: false
    },
     alert: false
  };

  //Form has its own state distinct from global state. It is structured according to
  //dataObj and is reset when form is submitted
  const [form, setForm] = useState(formInitialState);

  useEffect(() => {
    if (form.alert !== false) {
      setTimeout(() => {
        setForm({ ...form, alert: false });
      }, 5000);
    }
  }, [form]);

  //Allows ability to redirect to different react component after axios POST,
  // part of react-router-dom
  const history = useHistory();

  //Enables using react to control input fields
  //Is callled by inputs with a text key name of dataObj and prints keystrokes into
  //dataObj field that corresponds to key provided
  const handleTyping = key => {
    return e => setForm({ ...form, data:{...form.data, [key]:e.target.value}});
  };

  //event.preventSefault() stops form from reloading before data is sent
  //Sends data to strappi to make new customer, resets data state to blank dataObj,
  //sets global state.refreshCustomers to reload app and display new list of customers.
  const handleSumbit = event => {
    event.preventDefault();

    Server.newCustomer(form.data)
      .then(res => {
        console.log("Form response: ", res);
        setForm(formInitialState);
        setState({ ...state, refreshCustomers: true });
        history.push("/ThankYou");
      })
      .catch(error => {
        if (error.response.status === 422) {
          Server.refreshCustomersByEmail(form.data.email).then(response => {
            console.error("Customer ", response.data.customers[0].id, " exists on server");
            setForm({
              ...form,
              alert: "Email " + response.data.customers[0].email + " exists."
            });
          });
        }
        console.log("Form error ", error.response);
      });
  };

  return (
    <>
      <Alert state={form} />
      <Form inverted={true} onSubmit={handleSumbit}>
        <Form.Field style={Styles.FormInputText}>
          <label>First name: </label>
          <input
            type="text"
            required
            name="firstname"
            value={form.data.firstname}
            onChange={handleTyping("firstname")}
          ></input>
        </Form.Field>
        <Form.Field style={Styles.FormInputText}>
          <label>Last name: </label>
          <input
            type="text"
            required
            name="lastname"
            value={form.data.lastname}
            onChange={handleTyping("lastname")}
          ></input>
        </Form.Field>
        <Form.Field style={Styles.FormInputText}>
          <label>Phone Number: </label>
          <input
            type="text"
            required
            name="phone"
            value={form.data.phone}
            onChange={handleTyping("phone")}
          ></input>
        </Form.Field>
        <Form.Field style={Styles.FormInputText}>
          <label>Email: </label>
          <input
            type="email"
            required
            name="email"
            value={form.data.email}
            onChange={handleTyping("email")}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>OPT in on SMS</label>
          <input
            type="checkbox"
            name="SMS"
            value={form.data.sms}
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

/* <div className='customer-form'>
    <form onSubmit={handleSumbit}>
        <div className='input'>
            <label>First name: </label>
            <input type="text" required name="FirstName" value={form.data.FirstName} onChange={handleTyping('FirstName')}></input>
        </div>
        <div className='input'>
            <label>Last name:  </label>
            <input type="text" required name="LastName" value={form.data.LastName} onChange={handleTyping('LastName')}></input>
        </div>
        <div className='input'>
            <label>Phone Number: </label>
            <input type='number' required name='PhoneNumber' value={form.data.PhoneNumber} onChange={handleTyping('PhoneNumber')}></input>
        </div>
        <div className='input'>
            <label>Email: </label>
            <input type='email' required name='Email' value={form.data.Email} onChange={handleTyping('Email')}></input>
        </div>
        <div className='radio'>
            <input type='checkbox' />  
            <label> I agree to <TOS state={state} setState={setState}/></label>                 
        </div>
        <div className='input'>
            <p>Signature: </p>
            <SignaturePad
                canvasProps={{
                    className: "signature"
                }}
            />
        </div>
        <div>
            <input type="submit" value="Submit"></input>
        </div>
    </form>
</div> */

export default CustomerForm;
