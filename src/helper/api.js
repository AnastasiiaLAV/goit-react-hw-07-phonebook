import axios from "axios";

const instance = axios.create({
    baseURL: 'https://63223f66fd698dfa29097e56.mockapi.io/contacts/contacts'

})

export const getContacts = async() =>{
    const {data} = await instance.get('/');
    return data;
};

export const addContacts = async(data) =>{
    const {data: result} = await instance.post('/', data);
    return result;
};

export const removeContacts = async(id) =>{
    const {data: result} = await instance.delete(`/${id}`);
    return result;
};