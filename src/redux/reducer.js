// import { ADD_CONTACTS, REMOVE_CONTACTS } from "./contacts/contacts-types";
// import { FILTER_CONTACTS } from "./filter/filter-type";
// const initialStore = {
//     contacts: [],
//     filter: '',
// }

// const reducer = (store = initialStore, {type, payload}) => {
//     switch(type){
//     case ADD_CONTACTS:
//         return {...store, contacts: [...store.contacts, payload]};

//     case REMOVE_CONTACTS:
//         const deleteContacts = store.contacts.filter(({id}) => id !== payload);
//         return {...store, contacts: deleteContacts};

//     case FILTER_CONTACTS:
//         return {...store, filter: payload};

//     default:
//         return store;
//     }
// }
// export default reducer;