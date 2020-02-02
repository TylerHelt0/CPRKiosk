import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import Axios from 'axios'
import { Button, Form } from 'semantic-ui-react'




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

    // const history = useHistory()

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

        // const cors = 'https://cors-anywhere.herokuapp.com/'
        // const url = 'https://pttech.repairshopr.com/api/v1/'
        // const api_key = '?api_key=0b248210-7705-426c-b13a-2c4877c95f21'

        // const corsUrl = cors + url + 'customers/' + api_key

        // const config = {
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // }

    }
    return (
        <header className="App-header CheckIn">
            <div className='trans-background'>
        <Form inverted={true} onSubmit={handleSumbit}>
            <Form.Field>
                <label>Description of the Problem</label>
                <textarea type="" required name="firstname" value={data.firstname} onChange={handleTyping('firstname')}></textarea>
            </Form.Field>


            <Button type='submit'>Submit</Button>
        </Form>
</div></header>

    )
}



export default CustomerForm