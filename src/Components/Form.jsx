import React, {useState} from 'react'
import Axios from 'axios'
import '../App.css'

const Form = () => {

	const [data,setData] = useState({
		firstName:'',
        lastName:'',
        phoneType:'Samsung',
        phoneNumber:''
	})	

    const postData = {
        'FirstName':data.firstName,
        'LastName':data.lastName,
        'Phone':data.phoneType,
        'PhoneNumber':data.phoneNumber
    }

	const handleTyping = (stateData) => {
		return (e) => setData({...data,[stateData]:e.target.value})
	}
	
    const handleSumbit = ()=>{
        Axios.post('http://71.150.156.98:1337/customers/',postData)
        .then((res)=>{
 
        })
    }

	return(
        <div className='form'>
            <form onSubmit={handleSumbit}>
                <label>First name: </label>
                <input type="text" required name="firstname" value={data.firstName} onChange={handleTyping('firstName')}></input>
                <label>Last name:  </label>
                <input type="text" required name="lastname" value={data.lastName} onChange={handleTyping('lastName')}></input>
                <label>Phone Number: </label>
                <input type='number' required name='phoneNumber' value={data.phoneNumber} onChange={handleTyping('phoneNumber')}></input>

                <label>Pick your phone: </label>
                <select name='phones' id='phones-select' value={data.phoneType} onChange={handleTyping('phoneType')}>
                    <option value="Samsung">Samsung</option>
                    <option value="iPhone">iPhone</option>
                </select>
                <br></br>
                <input type="submit" value="Submit"></input>
            <br></br>
            </form> 
        </div>
	)
}

export default Form