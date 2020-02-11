import axios from "axios";

const url = "https://pttech.repairshopr.com/api/v1/customers?api_key=0b248210-7705-426c-b13a-2c4877c95f21"

export const refreshCustomers = () => {
    return axios.get(url)
}