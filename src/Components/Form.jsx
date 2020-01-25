import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import {Button,Form} from 'semantic-ui-react'


import TOS from './TOS'


const CustomerForm = ({state,setState}) => {

    // If adding new data fields to send to Strapi, also add label, and input with
    // corresponding value and onChange parameters
    // dataObj is the object sent to strappi/customers POST route
    const dataObj = {
        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        Email:'',
        tosAccepted:false
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
        Axios.post('http://34.73.118.152:1337/customers/', data)
        .then((res)=>{
            console.log("Form response: ", res)
            setData(dataObj)
            setState({...state,refreshCustomers:true})
            history.push('/ThankYou')
        })
    }

    return (

        <Form inverted={true} onSubmit={handleSumbit}>
            <Form.Field>
                <label>First name: </label>
                <input type="text" required name="FirstName" value={data.FirstName} onChange={handleTyping('FirstName')}></input>
            </Form.Field>
            <Form.Field>
                <label>Last name:  </label>
                <input type="text" required name="LastName" value={data.LastName} onChange={handleTyping('LastName')}></input>
            </Form.Field>
            <Form.Field>
                <label>Phone Number: </label>
                <input type='text' required name='PhoneNumber' value={data.PhoneNumber} onChange={handleTyping('PhoneNumber')}></input>
            </Form.Field>
            <Form.Field>
                <label>Email: </label>
                <input type='email' required name='Email' value={data.Email} onChange={handleTyping('Email')}></input>
            </Form.Field>
            <Form.Field>
                <p>Please read and agree to <TOS state={data} setState={setData} /></p>
                
            </Form.Field>
            <Form.Field>
                
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>

        
    )
}

{/* <div className='customer-form'>
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
</div> */}


export default CustomerForm