import * as api from "helper/api";
import { Notify } from "notiflix";
import actions from "./contacts-actions";


const doubleСontacts = ({name, phone}, contacts) =>{
    
    const dublicate = contacts.find(item => item.name.toLowerCase() === name.toLowerCase() || item.phone === phone);

    return Boolean(dublicate);
} 

export const fetchContacts = () =>{
    const func = async(dispatch) =>{
        try{
            dispatch(actions.fetchContactsLoading());
            const data = await api.getContacts();
            dispatch(actions.fetchContactsSuccsess(data));
        }
        catch(error){
            dispatch(actions.fetchContactsError(error.massage));
        }
    }
    return func;
}

export const addContacts = (data) =>{
    const func = async(dispatch, getState) =>{
        
        const {contacts} = getState();

        if(doubleСontacts(data, contacts.items)){
                Notify.warning(`${data.name.toUpperCase()} contact already exists`);
                return;
        }

        try{
            dispatch(actions.addContactsLoading());
            const result = await api.addContacts(data);
            dispatch(actions.addContactsSuccsess(result));
        }
        catch(error){
            dispatch(actions.addContactsError(error.massage));
        }
    }
    return func;
}

export const removeContacts = (id) =>{
    const func = async(dispatch) =>{

        try{
            dispatch(actions.removeContactsLoading());
            await api.removeContacts(id);
            dispatch(actions.removeContactsSuccsess(id));
        }
        catch(error){
            dispatch(actions.removeContactsError(error.massage));
        }
    }
    return func;
}

