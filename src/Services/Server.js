import Axios from "axios";

const   cors = "https://cors-anywhere.herokuapp.com/",
        url = "https://emsrepair.repairshopr.com//api/v1/",
        api_key = "?api_key=T2d59b2eb5cdb4f569-8ef74bbf74cd148fd09e314ec8bc7133";

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
