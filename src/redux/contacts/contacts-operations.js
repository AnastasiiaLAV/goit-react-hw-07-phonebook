import * as api from "helper/api";
import actions from "./contacts-actions";

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
    const func = async(dispatch) =>{
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