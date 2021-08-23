import axios from "axios";

export const deleteQuote = async (id)=>{
    const promise = await axios({
        method: 'DELETE',
        baseURL: 'https://prof-quotes.herokuapp.com/api',
        url: `/quotes/${id}`
    })

    return promise
}