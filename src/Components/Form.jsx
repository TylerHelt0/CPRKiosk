import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { Button, Form } from 'semantic-ui-react'


import TOS from './TOS'

//NOTICE: THIS APP IS NOT TO BE SOLD OR LICENSED AND IS STRICTLY FOR
//LEARNING PURPOSES. THIS APP IS NOT OWNED BY OR AFFILIATED WITH CPR!


const CustomerForm = ({ state, setState }) => {

    // If adding new data fields to send to Strapi, also add label, and input with
    // corresponding value and onChange parameters
    // dataObj is the object sent to strappi/customers POST route
    const dataObj = {
        "firstname": "",
        "lastname": "",
        "phone": "",
        "email": ""
    }

    //Form has its own state distinct from global state. It is structured according to
    //dataObj and is reset when form is submitted
    const [data, setData] = useState(dataObj)

    //Allows ability to redirect to different react component after axios POST, 
    // part of react-router-dom
    const history = useHistory()

    //Enables using react to control input fields
    //Is callled by inputs with a text key name of dataObj and prints keystrokes into
    //dataObj field that corresponds to key provided
    const handleTyping = (key) => {
        return (e) => setData({ ...data, [key]: e.target.value })
    }

    //event.prevent() defaullt stops form from reloading before data is sent
    //Sends data to strappi to make new customer, resets data state to blank dataObj, 
    //sets global state.refreshCustomers to reload app and display new list of customers. 
    const handleSumbit = (event) => {
        event.preventDefault()

        const cors = 'https://cors-anywhere.herokuapp.com/'
        const url = 'https://pttech.repairshopr.com/api/v1/'
        const api_key = '?api_key=0b248210-7705-426c-b13a-2c4877c95f21'

        const corsUrl = cors + url + 'customers/' + api_key

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        Axios.post(corsUrl, data, config)
            .then((res) => {
                console.log("Form response: ", res)
                setData(dataObj)
                setState({ ...state, refreshCustomers: true })
                history.push('/ThankYou')
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    const config = {
                        headers: { "Content-Type": "application/json" },
                        params: { email: data.email }
                    }
                    Axios.get(corsUrl, config)
                        .then((response) => {
                            console.log(response.data.customers[0].id)
                            alert("Email " + response.data.customers[0].email + " exists")
                        })
                }
                console.log("Form error ", error.response)
            })
    }

    return (

        <Form inverted={true} onSubmit={handleSumbit}>
            <Form.Field>
                <label>First name: </label>
                <input type="text" required name="firstname" value={data.firstname} onChange={handleTyping('firstname')}></input>
            </Form.Field>
            <Form.Field>
                <label>Last name:  </label>
                <input type="text" required name="lastname" value={data.lastname} onChange={handleTyping('lastname')}></input>
            </Form.Field>
            <Form.Field>
                <label>Phone Number: </label>
                <input type='text' required name='phone' value={data.phone} onChange={handleTyping('phone')}></input>
            </Form.Field>
            <Form.Field>
                <label>Email: </label>
                <input type='email' required name='email' value={data.email} onChange={handleTyping('email')}></input>
            </Form.Field>
            <Form.Field>
                <label>OPT in on SMS</label>
                <input type='checkbox' required name='SMS' value={data.email} onChange={handleTyping('sms')}></input>
            </Form.Field>
            <Form.Field>
                <p>Please read and agree to the <TOS state={state} setState={setState} trigger={<span className='tos'>terms</span>}/>.</p>
                <p>Notice: By clicking submit, you AGREE with our Terms of Service</p>

            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>


    )
}

/* <div className='customer-form'>
    <form onSubmit={handleSumbit}>
        <div className='input'>
            <label>First name: </label>
            <input type="text" required name="FirstName" value={data.FirstName} onChange={handleTyping('FirstName')}></input>
        </div>
        <div className='input'>
            <label>Last name:  </label>
            <input type="text" required name="LastName" value={data.LastName} onChange={handleTyping('LastName')}></input>
        </div>
        <div className='input'>
            <label>Phone Number: </label>
            <input type='number' required name='PhoneNumber' value={data.PhoneNumber} onChange={handleTyping('PhoneNumber')}></input>
        </div>
        <div className='input'>
            <label>Email: </label>
            <input type='email' required name='Email' value={data.Email} onChange={handleTyping('Email')}></input>
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


export default CustomerForm