import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "./filter-action";
// import { FILTER_CONTACTS } from "./filter-type";

const filterReducer = createReducer('', {
    [filterContacts]: (_, {payload}) =>  payload,
})

export default filterReducer;

// / -----Redux-----
// const initialStore = '';

// const filterReducer = (store = initialStore, {type, payload}) => {
//     switch(type){

//     case FILTER_CONTACTS:
//         return payload;

//     default:
//         return store;
//     }
// }
