import axios from "axios";

export const create = async (body)=>{
    const promise = axios({
        method: 'POST',
        baseURL: 'https://prof-quotes.herokuapp.com/api',
        url: `/quotes`,
        data: body
    })
    return promise
}