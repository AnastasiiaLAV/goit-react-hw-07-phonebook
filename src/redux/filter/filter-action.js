
import { createAction } from "@reduxjs/toolkit"
// import { FILTER_CONTACTS } from "./filter-type"


export const filterContacts = createAction("filter/set")

// export const filterContacts = (payload) =>{
//     return {
//         type: FILTER_CONTACTS,
//         payload,
//     }
// }