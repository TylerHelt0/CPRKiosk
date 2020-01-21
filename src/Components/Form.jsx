import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import '../App.css'

const Form = ({state,setState}) => {

    const dataObj = {
        FirstName: '',
        LastName: '',
        PhoneNumber: ''
    }
    
    const [data, setData] = useState(dataObj)

    const history = useHistory()

    const handleTyping = (stateData) => {
        return (e) => setData({ ...data, [stateData]: e.target.value })
    }

    const handleSumbit = (event) => {
        event.preventDefault()
        Axios.post('http://34.73.118.152:1337/customers/', data)
        .then((res)=>{
            console.log("Form response: ", res)
            setData(dataObj)
            setState({...state,refreshCustomers:true})
            history.push('/CheckIn')
        })
    }

    return (
        <div className='form'>
            <form onSubmit={handleSumbit}>
                <label>First name: </label>
                <input type="text" required name="FirstName" value={data.FirstName} onChange={handleTyping('FirstName')}></input>
                <label>Last name:  </label>
                <input type="text" required name="LastName" value={data.LastName} onChange={handleTyping('LastName')}></input>
                <label>Phone Number: </label>
                <input type='number' required name='PhoneNumber' value={data.PhoneNumber} onChange={handleTyping('PhoneNumber')}></input>

                <br></br>
                <input type="submit" value="Submit"></input>
                <br></br>
            </form>
        </div>
    )
}

export default Form