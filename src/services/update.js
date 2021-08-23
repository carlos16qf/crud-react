import axios from "axios";

export const update = async (quote)=> {
    const response = await axios({
        method: 'PUT',
        baseURL: 'https://prof-quotes.herokuapp.com/api',
        url: `/quotes/${quote.id}`,
        data: quote
    })
    console.log(response)
    return response.data
}