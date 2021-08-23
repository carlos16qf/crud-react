import axios from "axios";

export const getOptions = async() =>{
    const res = await axios({
        method: 'GET',
        url: `/quotes/options`,
        baseURL: 'https://prof-quotes.herokuapp.com/api',
    })

    return res.data
}