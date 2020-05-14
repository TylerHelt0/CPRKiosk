import Axios from "axios";

const   cors = "https://cors-anywhere.herokuapp.com/",
        url = "https://pttech.repairshopr.com/api/v1/",
        api_key = "?api_key=0b248210-7705-426c-b13a-2c4877c95f21";

export const refreshCustomers = email => {
    if (!email) {
        return Axios.get(url+"customers"+api_key)
    } else if (email) {
        const config ={
            headers: {
                "Content-Type":"application/json"
            },
            params: { email: email }
        }
        return  Axios.get(cors + url + "customers" + api_key, config)   
    }
}

export const newCustomer = data => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    return  Axios.post(cors+url + "customers" + api_key, data, config)
}
